import { useEffect } from "react";
import type { ReactNode } from "react";
import { FadeIn } from "../components/FadeIn";
import { useT, useLoc } from "../lib/i18n";
import { LangToggle } from "../components/LangToggle";
import { ARATHE_CASE } from "../components/case/data";
import { PORTFOLIO_VIDEO_CASE } from "../components/case/data-portfolio-video";
import { ORGANIGRAM_REBRAND_CASE } from "../components/case/data-organigram-rebrand";
import { VALORANT_CHAMPIONS_CASE } from "../components/case/data-valorant-champions";
import { WINGED_CHARIOT_CASE } from "../components/case/data-winged-chariot-allegory";
import { CaseOrbs, VisualArchive } from "../components/case/Decor";
import { GirlAssistant } from "../components/case/GirlAssistant";
import { CaseBody } from "../components/case/Modules";
import { Placeholder } from "../components/case/Primitives";
import type { CaseData, NeighbourCase } from "../components/case/types";
import waveSvg from "@/assets/footer.svg";

export const CASES: Record<string, CaseData> = {
  arathe: ARATHE_CASE,
  "portfolio-video": PORTFOLIO_VIDEO_CASE,
  "organigram-rebrand": ORGANIGRAM_REBRAND_CASE,
  "valorant-champions": VALORANT_CHAMPIONS_CASE,
  "winged-chariot-allegory": WINGED_CHARIOT_CASE,
};

function pickCase(): CaseData {
  if (typeof window === "undefined") return ARATHE_CASE;
  const match = window.location.pathname.match(/^\/case\/([^/]+)/);
  const slug = match?.[1];
  return (slug ? CASES[slug] : undefined) ?? ARATHE_CASE;
}

const D = pickCase();

function CaseNav() {
  const t = useT();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md border-b border-black">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.12,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a
          href="/"
          className="font-serif text-xl tracking-[0.3em] text-accent"
        >
          sofía
        </a>

        <div className="hidden md:flex items-center gap-3 text-foreground">
          <a
            href="/#procesos"
            className="text-xs tracking-[0.25em] uppercase hover:text-accent transition-colors duration-200"
          >
            {t("case.navProcesses")}
          </a>
          <span className="text-xs tracking-[0.25em] opacity-50">/</span>
          <span className="text-xs tracking-[0.25em] uppercase font-bold text-accent">
            {D.name}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#next"
            className="text-xs tracking-[0.25em] uppercase hover:text-accent transition-colors duration-200"
          >
            {t("case.next")}
          </a>
          <LangToggle />
        </div>
      </div>
    </nav>
  );
}

function MetaCell({
  label,
  value,
  sub,
  children,
}: {
  label: string;
  value?: string;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <div className="bg-paper p-5 md:p-6 flex flex-col gap-2 min-h-[8rem]">
      <span className="case-label text-accent">{label}</span>
      {children ? (
        children
      ) : (
        <>
          <span className="text-sm leading-relaxed text-foreground/90">
            {value}
          </span>
          {sub && (
            <span className="case-label text-foreground/60">{sub}</span>
          )}
        </>
      )}
    </div>
  );
}

function CaseHero() {
  const t = useT();
  const loc = useLoc();
  return (
    <header id="hero" className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="flex items-center gap-3 mb-8 text-foreground/70">
            <a
              href="/#procesos"
              className="case-label hover:text-accent transition-colors"
            >
              {t("case.backProcesses")}
            </a>
            <span className="ml-auto case-label text-accent">
              {loc(D.meta.readingTime)}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="grid md:grid-cols-12 gap-6 md:gap-12 mb-12 items-end">
            <div className="md:col-span-7">
              {D.logo ? (
                <img
                  src={D.logo.src}
                  alt={D.logo.alt ?? D.name}
                  style={{ maxHeight: D.logo.maxHeight ?? 96 }}
                  className="block w-auto"
                />
              ) : (
                <h1
                  className="font-serif lowercase text-pretty"
                  style={{ fontSize: 48, lineHeight: 1 }}
                >
                  {D.name.toLowerCase()}
                </h1>
              )}
            </div>
            <div className="md:col-span-5 md:text-right">
              <p className="text-sm leading-relaxed text-foreground/85 max-w-md md:ml-auto">
                {loc(D.tagline)}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={140}>
          <div className="flex flex-wrap gap-2 mb-10">
            {D.meta.tags.map((tag, i) => (
              <span
                key={i}
                className="border border-black px-3 py-1 case-label"
              >
                {loc(tag)}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <Placeholder image={D.cover} ratio="21/9" />
        </FadeIn>

        <FadeIn delay={260}>
          {(() => {
            const cells: ReactNode[] = [
              <MetaCell key="role" label={t("case.meta.role")} value={loc(D.meta.role)} />,
              <MetaCell
                key="period"
                label={t("case.meta.period")}
                value={loc(D.meta.period)}
                sub={loc(D.meta.duration)}
              />,
            ];
            if (D.meta.team && D.meta.team.length > 0) {
              cells.push(
                <MetaCell
                  key="team"
                  label={t("case.meta.team")}
                  value={D.meta.team.join(" · ")}
                />,
              );
            }
            cells.push(
              <MetaCell
                key="tools"
                label={t("case.meta.tools")}
                value={D.meta.tools.join(" · ")}
              />,
            );
            if (D.meta.links && D.meta.links.length > 0) {
              cells.push(
                <MetaCell key="links" label={t("case.meta.links")}>
                  <ul className="flex flex-col gap-1">
                    {D.meta.links.map((l, i) => (
                      <li key={i}>
                        <a
                          href={l.href}
                          className="text-sm underline hover:text-accent transition-colors arrow-link"
                        >
                          {loc(l.label)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </MetaCell>,
              );
            }
            const colsClass =
              cells.length === 5
                ? "md:grid-cols-5"
                : cells.length === 4
                  ? "md:grid-cols-4"
                  : "md:grid-cols-3";
            return (
              <div
                className={`mt-16 md:mt-20 grid ${colsClass} gap-px bg-black border border-black`}
              >
                {cells}
              </div>
            );
          })()}
        </FadeIn>
      </div>
    </header>
  );
}

function ProcessIntro() {
  const t = useT();
  const loc = useLoc();
  const items = [
    { n: "01", label: t("case.intro.context"), text: loc(D.intro.context) },
    { n: "02", label: t("case.intro.problem"), text: loc(D.intro.problem) },
    { n: "03", label: t("case.intro.goal"),    text: loc(D.intro.goal) },
    { n: "04", label: t("case.intro.role"),    text: loc(D.intro.role) },
  ];
  const [introTitleA, introTitleB] = t("case.intro.title").split(", ");
  return (
    <section
      id="process-intro"
      className="relative py-24 md:py-36 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-16 items-end">
            <div className="md:col-span-6">
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.05] text-pretty">
                {introTitleA},
                <br />
                <span className="italic">{introTitleB}</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-sm leading-relaxed text-foreground/75 max-w-md md:text-right md:ml-auto">
                {t("case.intro.body")}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid md:grid-cols-2 gap-px bg-black border border-black">
            {items.map((it, i) => (
              <div
                key={i}
                className="bg-paper p-7 md:p-10 h-full flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="case-label text-accent">{it.n}</span>
                  <span className="case-label text-foreground/80">
                    {it.label}
                  </span>
                </div>
                <p className="font-sans text-sm md:text-base leading-[1.7] text-foreground/85 text-pretty">
                  {it.text}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function NeighbourCard({
  side,
  item,
}: {
  side: "prev" | "next";
  item: NeighbourCase;
}) {
  const t = useT();
  const loc = useLoc();
  const isPrev = side === "prev";
  return (
    <a
      href={`/case/${item.slug}`}
      className={`group bg-paper p-6 md:p-10 flex flex-col gap-5 hover:bg-bone/99 transition-colors ${isPrev ? "" : "md:items-end"}`}
    >
      <span className={`case-label text-accent ${isPrev ? "" : "md:text-right"}`}>
        {isPrev ? t("case.prev") : t("case.nextCase")}
      </span>
      <div className={isPrev ? "" : "md:text-right"}>
        <div className="case-label text-foreground/60 mb-1">{loc(item.kind)}</div>
        <div className="font-serif text-2xl md:text-3xl leading-tight transition-colors group-hover:text-foreground/50">
          {item.name}
        </div>
      </div>
    </a>
  );
}

function CaseFooterNav() {
  return (
    <section
      id="next"
      className="relative py-12 md:py-16 px-6 border-t border-black"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-px bg-black border border-black">
            <NeighbourCard side="prev" item={D.neighbours.prev} />
            <NeighbourCard side="next" item={D.neighbours.next} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CaseFooter() {
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
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            backgroundColor: "#0a0a0a",
            width: "100%",
            height: "40%",
          }}
        />
        <p className="absolute bottom-2 left-0 right-0 text-center text-xs tracking-[0.25em] uppercase text-paper">
          {t("footer.tagline")}
        </p>
      </div>
    </footer>
  );
}

export function CaseStudy() {
  useEffect(() => {
    document.body.classList.add("case-grain");
    document.body.style.backgroundColor = "#fdfcf9";
    return () => {
      document.body.classList.remove("case-grain");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-paper text-foreground">
      <CaseNav />
      <CaseOrbs />
      <main className="relative z-10">
        <CaseHero />
        <ProcessIntro />
        <CaseBody blocks={D.body} />
        {D.archive && <VisualArchive data={D.archive} />}
        <CaseFooterNav />
      </main>
      <CaseFooter />

      <GirlAssistant />
    </div>
  );
}

export default CaseStudy;
