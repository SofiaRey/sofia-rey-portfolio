import { useEffect, useRef, useState } from "react";
import { ContactBody } from "../Contact";
import girlPng from "@/assets/girl.png";
import { useT, type TKey } from "../../lib/i18n";

const PHRASE_KEYS: TKey[] = [
  "girl.p1",
  "girl.p2",
  "girl.p3",
  "girl.p4",
  "girl.p5",
  "girl.p6",
];

export function GirlAssistant() {
  const t = useT();
  const [hovered, setHovered] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    document.addEventListener("open-contact", onOpen);
    return () => document.removeEventListener("open-contact", onOpen);
  }, []);

  const onEnter = () => {
    setPhraseIdx((i) => (i + 1) % PHRASE_KEYS.length);
    setHovered(true);
  };

  return (
    <>
      <div className="girl-fixed fixed right-4 md:right-8 bottom-0 md:bottom-2 z-[60] flex flex-col items-end gap-3 pointer-events-none">
        <div
          aria-hidden={!hovered}
          className={`bubble pointer-events-none transition-all duration-300 origin-bottom-right ${
            hovered
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-2 scale-95"
          }`}
        >
          <div className="bg-paper border border-black px-4 py-2.5 max-w-[240px] font-serif italic text-sm leading-snug text-pretty">
            {t(PHRASE_KEYS[phraseIdx]!)}
          </div>
        </div>

        <button
          type="button"
          onMouseEnter={onEnter}
          onMouseLeave={() => setHovered(false)}
          onFocus={onEnter}
          onBlur={() => setHovered(false)}
          onClick={() => setOpen(true)}
          aria-label={t("girl.open")}
          className="pointer-events-auto relative group bg-transparent border-none p-0"
        >
          <img
            src={girlPng}
            alt=""
            draggable="false"
            className="relative h-28 md:h-36 select-none transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[2deg] animate-float-y"
          />
        </button>
      </div>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const t = useT();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const sbWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--sb-w", `${sbWidth}px`);
    document.body.classList.add("scroll-locked");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const focusTimer = setTimeout(() => firstFocusRef.current?.focus(), 0);
    return () => {
      document.body.classList.remove("scroll-locked");
      document.documentElement.style.removeProperty("--sb-w");
      document.removeEventListener("keydown", onKey);
      clearTimeout(focusTimer);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t("girl.dialog")}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 animate-in fade-in duration-200"
    >
      <div
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
        className="modal-enter relative w-full max-w-5xl bg-paper border border-black max-h-[92vh] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t("girl.close")}
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center border border-black bg-paper hover:bg-black hover:text-paper transition-colors z-10"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ×
          </span>
        </button>

        <div className="px-6 md:px-12 py-12 md:py-16">
          <ContactBody firstFocusRef={firstFocusRef} />
        </div>
      </div>
    </div>
  );
}
