/**
 * Frame loader utility.
 * Preloads a small batch of intro frames eagerly, then continues loading
 * the rest in the background while the intro animation plays.
 */

const TOTAL_FRAMES = 378;
const INTRO_FRAMES = 70; // ~5 seconds of video at 13.98fps, played back over 5s (1:1 speed)
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
 * Loads all frames in phases:
 * 1. First INTRO_PRELOAD frames — once loaded, signals introReady so playback can start
 * 2. Remaining intro frames (INTRO_PRELOAD..149) — loaded concurrently during playback
 * 3. Scroll frames (150-279) — loaded after all intro frames are done
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
          loadScrollFrames(state, onProgress);
        }
      };
      img.onerror = () => {
        console.warn(`Failed to load frame ${i}: ${getFramePath(i)}`);
        introLoadedCount++;

        if (!state.introReady && introLoadedCount >= INTRO_PRELOAD) {
          state.introReady = true;
          onProgress(state);
        }

        if (introLoadedCount === INTRO_FRAMES) {
          state.introLoaded = true;
          onProgress(state);
          resolve(state);
          loadScrollFrames(state, onProgress);
        }
      };
    }
  });
}

function loadScrollFrames(state: FrameLoaderState, onProgress: OnProgress) {
  let scrollLoadedCount = 0;
  const scrollFrameCount = TOTAL_FRAMES - INTRO_FRAMES;

  for (let i = INTRO_FRAMES; i < TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = getFramePath(i);
    img.onload = () => {
      state.frames[i] = img;
      state.loadedCount++;
      scrollLoadedCount++;
      if (scrollLoadedCount === scrollFrameCount) {
        state.allLoaded = true;
        onProgress(state);
      }
    };
    img.onerror = () => {
      scrollLoadedCount++;
      if (scrollLoadedCount === scrollFrameCount) {
        state.allLoaded = true;
        onProgress(state);
      }
    };
  }
}

export { TOTAL_FRAMES, INTRO_FRAMES };
