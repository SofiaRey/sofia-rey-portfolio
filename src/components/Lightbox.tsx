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
    const sbWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty("--sb-w", `${sbWidth}px`);
    document.body.classList.add("scroll-locked");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("scroll-locked");
      document.documentElement.style.removeProperty("--sb-w");
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
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative inline-block"
      >
        <img
          src={src}
          alt={alt}
          className={`max-w-[90vw] max-h-[90vh] object-contain border border-black block ${
            rounded ? "rounded-full aspect-square object-cover" : ""
          }`}
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center border border-black bg-paper hover:bg-black hover:text-paper transition-colors"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            ×
          </span>
        </button>
      </div>
    </div>
  );
}
