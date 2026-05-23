/**
 * Transition frame loader. Preloads the landing→case transition into memory
 * once on first access and exposes the decoded frames synchronously after.
 */

export const TRANSITION_TOTAL_FRAMES = 172;
export const TRANSITION_DURATION_MS = 1000;
const TRANSITION_BASE = "/frames/transition";

function getFrameDir(): string {
  if (typeof window === "undefined") return `${TRANSITION_BASE}/desktop`;
  return window.innerWidth <= 768
    ? `${TRANSITION_BASE}/mobile`
    : `${TRANSITION_BASE}/desktop`;
}

export type TransitionState = {
  frames: (HTMLImageElement | null)[];
  loaded: boolean;
  loadedCount: number;
};

let state: TransitionState | null = null;
let loadPromise: Promise<TransitionState> | null = null;

function framePath(i: number): string {
  const padded = String(i + 1).padStart(4, "0");
  return `${getFrameDir()}/${padded}.webp`;
}

export function loadTransitionFrames(): Promise<TransitionState> {
  if (loadPromise) return loadPromise;

  const s: TransitionState = {
    frames: new Array(TRANSITION_TOTAL_FRAMES).fill(null),
    loaded: false,
    loadedCount: 0,
  };
  state = s;

  loadPromise = new Promise<TransitionState>((resolve) => {
    let done = 0;
    const finish = () => {
      done++;
      if (done === TRANSITION_TOTAL_FRAMES) {
        s.loaded = true;
        resolve(s);
      }
    };
    for (let i = 0; i < TRANSITION_TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        s.frames[i] = img;
        s.loadedCount++;
        finish();
      };
      img.onerror = finish;
    }
  });

  return loadPromise;
}

export function getTransitionState(): TransitionState | null {
  return state;
}
