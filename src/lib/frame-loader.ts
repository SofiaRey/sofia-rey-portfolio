/**
 * Frame loader utility.
 * Loads frames in sequential batches to avoid overwhelming the network:
 * 1. Intro frames (0-69) — all at once, signals introReady after first 30
 * 2. Scroll frames in quarters — each quarter starts only after the previous completes
 */

const TOTAL_FRAMES = 862;
const INTRO_FRAMES = 160; // ~first 18% of the animation, played over the 5s intro
const INTRO_PRELOAD = 30; // preload this many before starting intro (rest loads during playback)
const FRAME_EXTENSION = "webp";

function getFrameDir(): string {
  return window.innerWidth <= 768 ? "/frames/mobile" : "/frames/desktop";
}

function getFramePath(index: number): string {
  const dir = getFrameDir();
  const padded = String(index + 1).padStart(4, "0");
  return `${dir}/${padded}.${FRAME_EXTENSION}`;
}

export type FrameLoaderState = {
  frames: (HTMLImageElement | null)[];
  introReady: boolean; // enough frames to start playback
  introLoaded: boolean; // all intro frames loaded
  allLoaded: boolean;
  loadedCount: number;
};

type OnProgress = (state: FrameLoaderState) => void;

/**
 * Loads a batch of frames (from startIndex to endIndex-1) in parallel.
 * Returns a promise that resolves when all frames in the batch are loaded.
 */
function loadBatch(
  state: FrameLoaderState,
  startIndex: number,
  endIndex: number,
  onProgress: OnProgress
): Promise<void> {
  return new Promise((resolve) => {
    const batchSize = endIndex - startIndex;
    let loaded = 0;

    for (let i = startIndex; i < endIndex; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        state.frames[i] = img;
        state.loadedCount++;
        loaded++;
        if (loaded === batchSize) {
          onProgress(state);
          resolve();
        }
      };
      img.onerror = () => {
        loaded++;
        if (loaded === batchSize) {
          onProgress(state);
          resolve();
        }
      };
    }
  });
}

/**
 * Loads all frames in phases:
 * 1. Intro frames (0-69) — loaded eagerly, signals introReady after first 30
 * 2. Scroll frames in 4 quarters — each quarter waits for the previous to finish
 */
export function loadFrames(onProgress: OnProgress): Promise<FrameLoaderState> {
  const state: FrameLoaderState = {
    frames: new Array(TOTAL_FRAMES).fill(null),
    introReady: false,
    introLoaded: false,
    allLoaded: false,
    loadedCount: 0,
  };

  return new Promise((resolve) => {
    let introLoadedCount = 0;

    // Phase 1: Load all intro frames
    for (let i = 0; i < INTRO_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        state.frames[i] = img;
        state.loadedCount++;
        introLoadedCount++;

        // Signal ready once we have enough frames to start smooth playback
        if (!state.introReady && introLoadedCount >= INTRO_PRELOAD) {
          state.introReady = true;
          onProgress(state);
        }

        if (introLoadedCount === INTRO_FRAMES) {
          state.introLoaded = true;
          onProgress(state);
          resolve(state);
          // Phase 2: Load scroll frames in quarters
          loadScrollInQuarters(state, onProgress);
        }
      };
      img.onerror = () => {
        introLoadedCount++;

        if (!state.introReady && introLoadedCount >= INTRO_PRELOAD) {
          state.introReady = true;
          onProgress(state);
        }

        if (introLoadedCount === INTRO_FRAMES) {
          state.introLoaded = true;
          onProgress(state);
          resolve(state);
          loadScrollInQuarters(state, onProgress);
        }
      };
    }
  });
}

/**
 * Loads scroll frames (INTRO_FRAMES to TOTAL_FRAMES) in 4 sequential quarters.
 * Each quarter only starts after the previous one finishes.
 */
async function loadScrollInQuarters(state: FrameLoaderState, onProgress: OnProgress) {
  const scrollStart = INTRO_FRAMES;
  const scrollCount = TOTAL_FRAMES - INTRO_FRAMES;
  const quarterSize = Math.ceil(scrollCount / 4);

  for (let q = 0; q < 4; q++) {
    const start = scrollStart + q * quarterSize;
    const end = Math.min(start + quarterSize, TOTAL_FRAMES);
    await loadBatch(state, start, end, onProgress);
  }

  state.allLoaded = true;
  onProgress(state);
}

export { TOTAL_FRAMES, INTRO_FRAMES };
