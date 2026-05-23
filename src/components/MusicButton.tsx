import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string;
};

export function MusicButton({ src = "/audio/landing.mp3" }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => setPlaying(false);
    const onPause = () => setPlaying(false);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        aria-pressed={playing}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 border border-black bg-paper hover:bg-black hover:text-paper transition-colors flex items-center justify-center shadow-sm"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M14 3.5v9.25a2.75 2.75 0 1 1-1.5-2.45V5.25L8 6.5v7.25a2.75 2.75 0 1 1-1.5-2.45V5.25l7.5-1.75z"
            fill="currentColor"
          />
          {!playing && (
            <line
              x1="3"
              y1="3"
              x2="17"
              y2="17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>
    </>
  );
}
