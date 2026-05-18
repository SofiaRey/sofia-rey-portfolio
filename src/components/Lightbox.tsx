import { useEffect } from "react";

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
  rounded?: boolean;
}

export function Lightbox({ src, alt, onClose, rounded = false }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Expanded image"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 animate-in fade-in duration-200"
    >
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className={`max-w-[90vw] max-h-[90vh] object-contain border border-black ${
          rounded ? "rounded-full aspect-square object-cover" : ""
        }`}
      />
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 md:top-6 md:right-6 text-white text-4xl leading-none cursor-pointer bg-transparent border-none p-2"
      >
        ×
      </button>
    </div>
  );
}
