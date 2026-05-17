/**
 * Frame loader utility.
 * Preloads intro frames eagerly, then background-loads scroll frames.
 */

const TOTAL_FRAMES = 280;
const INTRO_FRAMES = 52; // 5 seconds of source video at ~10.36fps extraction rate
const FRAME_EXTENSION = "jpg";

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
  introLoaded: boolean;
  allLoaded: boolean;
  loadedCount: number;
};

type OnProgress = (state: FrameLoaderState) => void;

/**
 * Loads all frames in two phases:
 * 1. Intro frames (0-149) — loaded eagerly, resolves when all are ready
 * 2. Scroll frames (150-279) — loaded in background after intro completes
 */
export function loadFrames(onProgress: OnProgress): Promise<FrameLoaderState> {
  const state: FrameLoaderState = {
    frames: new Array(TOTAL_FRAMES).fill(null),
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
        // Notify on every frame so we can draw the first one immediately
        onProgress(state);

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
