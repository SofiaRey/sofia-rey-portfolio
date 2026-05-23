import waveSvg from "@/assets/footer.svg";
import { useT } from "../lib/i18n";

export function Footer() {
  const t = useT();
  return (
    <footer className="relative z-10">
      <div
        className="relative animate-wave"
        style={{
          height: "max(70px, calc(100vw * 98 / 1919))",
          backgroundImage: `url(${waveSvg})`,
          backgroundSize: "100vw 100%",
          backgroundRepeat: "repeat-x",
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        <div style={{
          backgroundColor: "#000000",
          width: "100%",
          height: "40%",
          }}></div>
        <p className="absolute bottom-2 left-0 right-0 text-center text-xs tracking-[0.25em] uppercase text-white">
          {t("footer.tagline")}
        </p>
      </div>
    </footer>
  );
}
