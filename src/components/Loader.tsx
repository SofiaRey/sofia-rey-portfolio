import { useEffect, useState } from "react";
import { useT } from "../lib/i18n";

const MIN_DISPLAY_MS = 1200;

type Props = {
  orb?: string;
  phrase?: string;
};

export function Loader({
  orb = "/videos/process-1.webp",
  phrase,
}: Props) {
  const t = useT();
  const text = phrase ?? t("loader.phrase");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const hide = () => {
      const remaining = Math.max(0, MIN_DISPLAY_MS - (Date.now() - start));
      window.setTimeout(() => setHidden(true), remaining);
    };
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
      return () => window.removeEventListener("load", hide);
    }
  }, []);

  return (
    <div
      aria-hidden={hidden}
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-paper transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img
        src={orb}
        alt=""
        draggable={false}
        className="w-32 h-32 md:w-40 md:h-40 mb-8 select-none animate-[pulse_2.5s_ease-in-out_infinite]"
      />
      <p className="font-serif italic text-lg md:text-xl text-foreground/80 text-pretty">
        {text}
      </p>
    </div>
  );
}
