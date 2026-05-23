import { useI18n } from "../lib/i18n";

type LangToggleProps = {
  className?: string;
};

export function LangToggle({ className = "" }: LangToggleProps) {
  const { lang, setLang } = useI18n();
  const next = lang === "en" ? "es" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
      className={`text-xs tracking-[0.25em] cursor-pointer border-none bg-transparent inline-flex items-center gap-1 ${className}`}
    >
      <span
        className={
          lang === "en"
            ? "text-accent font-bold"
            : "text-foreground/50 hover:text-accent transition-colors"
        }
      >
        EN
      </span>
      <span className="text-foreground/30">/</span>
      <span
        className={
          lang === "es"
            ? "text-accent font-bold"
            : "text-foreground/50 hover:text-accent transition-colors"
        }
      >
        ES
      </span>
    </button>
  );
}
