import type { CSSProperties, ReactNode } from "react";
import type { PlaceholderImage } from "./types";
import { useLoc } from "../../lib/i18n";

type PlaceholderProps = {
  image?: PlaceholderImage;
  ratio?: string;
  className?: string;
  overlay?: ReactNode;
  frame?: boolean;
};

export function Placeholder({
  image,
  ratio = "4/3",
  className = "",
  overlay = null,
  frame = true,
}: PlaceholderProps) {
  const loc = useLoc();
  const tone = image?.tone ?? "paper";
  const toneCls =
    tone === "dark"
      ? "ph-stripes--dark"
      : tone === "bone"
        ? "ph-stripes--bone"
        : "ph-stripes";
  const rawLabel = loc(image?.label) || "image placeholder";
  const label = rawLabel.replace(/^\d+\s*[-:]\s*/, "");
  const hasImage = !!image?.src;
  const alt = loc(image?.alt) || label;
  return (
    <div
      className={`group relative w-full overflow-hidden ${frame ? "border border-black " : ""}${hasImage ? "" : toneCls + " "}${className}`}
      style={{ aspectRatio: ratio } as CSSProperties}
    >
      {hasImage ? (
        <img
          src={image!.src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex items-end p-4">
          <span className="case-label opacity-70">{label}</span>
        </div>
      )}
      {overlay}
    </div>
  );
}

export function SectionLabel({
  index,
  label,
  className = "",
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="case-label text-accent">{index}</span>
      <span className="h-px w-8 bg-black" />
      <span className="case-label text-foreground/70">{label}</span>
    </div>
  );
}

export function ImageCaption({
  children,
  n,
}: {
  children: ReactNode;
  n?: number;
}) {
  return (
    <div className="mt-3 flex items-start gap-3">
      {n != null && (
        <span className="case-label text-accent shrink-0">fig. {n}</span>
      )}
      <span className="text-sm leading-relaxed text-foreground/70 max-w-xl">
        {children}
      </span>
    </div>
  );
}

export function TwoCol({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid md:grid-cols-12 gap-8 md:gap-16 items-start ${className}`}
    >
      {children}
    </div>
  );
}
