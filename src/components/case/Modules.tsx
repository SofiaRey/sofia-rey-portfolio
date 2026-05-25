import type { JSX } from "react";
import { FadeIn } from "../FadeIn";
import { Placeholder, TwoCol } from "./Primitives";
import { useLoc, useT } from "../../lib/i18n";
import type {
  CaseBlock,
  ClosingBlock,
  DecisionsBlock,
  FullImageBlock,
  Gallery2Block,
  Gallery3Block,
  HighlightBlock,
  ImageWithCaptionBlock,
  LearningsBlock,
  LongTextBlock,
  QuoteBlock,
  ResultsBlock,
  SideImageBlock,
  SideTextBlock,
  StepsBlock,
  ToolsBlock,
  VideoBlock,
} from "./types";

const BODY_WRAP = "max-w-5xl mx-auto px-6";

type ModuleProps<B> = { block: B; n: number };

function LongText({ block }: ModuleProps<LongTextBlock>) {
  const loc = useLoc();
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-20 md:py-28`}>
        {block.title && (
          <h3 className="font-serif text-3xl md:text-4xl mb-6 text-pretty">
            {loc(block.title)}
          </h3>
        )}
        <div className="flex flex-col gap-5">
          {block.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-sm leading-[1.75] text-foreground/85"
            >
              {loc(p)}
            </p>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function Highlight({ block }: ModuleProps<HighlightBlock>) {
  const loc = useLoc();
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-16 md:py-24`}>
        <p className="font-serif italic text-2xl md:text-4xl leading-[1.25] text-pretty">
          <span className="underline-hand">{loc(block.text)}</span>
        </p>
      </div>
    </FadeIn>
  );
}

function FullImage({ block }: ModuleProps<FullImageBlock>) {
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-16 md:py-24`}>
        <Placeholder image={block.image} ratio="16/9" />
      </div>
    </FadeIn>
  );
}

function ImageWithCaption({ block }: ModuleProps<ImageWithCaptionBlock>) {
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-16 md:py-24`}>
        <Placeholder image={block.image} ratio={block.ratio ?? "3/2"} />
      </div>
    </FadeIn>
  );
}

function Gallery2({ block }: ModuleProps<Gallery2Block>) {
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-16 md:py-24`}>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {block.images.map((im, i) => (
            <Placeholder key={i} image={im} ratio="4/5" />
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function Gallery3({ block }: ModuleProps<Gallery3Block>) {
  const [a, b, c] = block.images;
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-16 md:py-24`}>
        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-5 md:mt-12">
            <Placeholder image={a} ratio="4/5" />
          </div>
          <div className="md:col-span-7">
            <Placeholder image={b} ratio="16/10" />
            <div className="hidden md:block mt-6">
              <Placeholder image={c} ratio="16/7" />
            </div>
          </div>
          <div className="md:hidden">
            <Placeholder image={c} ratio="16/10" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function SideImage({ block }: ModuleProps<SideImageBlock>) {
  const loc = useLoc();
  const imgFirst = block.orientation === "image-left";
  const imgCol = `${imgFirst ? "md:order-1 " : "md:order-2 "}md:col-span-7`;
  const txtCol = `${imgFirst ? "md:order-2 " : "md:order-1 "}md:col-span-5 md:pt-8`;
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-20 md:py-28`}>
        <TwoCol>
          <div className={imgCol}>
            <Placeholder image={block.image} ratio="4/3" />
          </div>
          <div className={txtCol}>
            {block.title && (
              <h3 className="font-serif text-3xl md:text-4xl mb-5 text-pretty">
                {loc(block.title)}
              </h3>
            )}
            <p className="text-sm leading-[1.75] text-foreground/85 max-w-[44ch]">
              {loc(block.body)}
            </p>
          </div>
        </TwoCol>
      </div>
    </FadeIn>
  );
}

function SideText({ block, n }: ModuleProps<SideTextBlock>) {
  const imgFirst = block.orientation === "text-right";
  const sideImageBlock: SideImageBlock = {
    kind: "sideimage",
    orientation: imgFirst ? "image-left" : "image-right",
    image: block.image,
    caption: block.caption,
    title: block.title,
    body: block.body,
  };
  return <SideImage block={sideImageBlock} n={n} />;
}



function Quote({ block }: ModuleProps<QuoteBlock>) {
  const loc = useLoc();
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-24 md:py-32`}>
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2 md:text-right">
            <span className="font-serif text-7xl md:text-8xl leading-none text-accent">
              “
            </span>
          </div>
          <div className="md:col-span-9">
            <blockquote className="font-serif italic text-3xl md:text-5xl leading-[1.15] text-pretty">
              {loc(block.text)}
            </blockquote>
            {block.attribution && (
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-10 bg-black" />
                <span className="case-label text-foreground/70">
                  {loc(block.attribution)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function Learnings({ block }: ModuleProps<LearningsBlock>) {
  const loc = useLoc();
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-20 md:py-28`}>
        <h3 className="font-serif text-3xl md:text-4xl mb-10">{loc(block.title)}</h3>
        <ol className="flex flex-col">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="grid grid-cols-[2rem_1fr] md:grid-cols-[2.5rem_1fr] gap-4 py-5 border-t border-black last:border-b"
            >
              <span className="case-label text-accent pt-1">
                {i + 1}
              </span>
              <span className="font-serif text-xl md:text-2xl leading-[1.3] text-pretty">
                {loc(it)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </FadeIn>
  );
}

function Decisions({ block }: ModuleProps<DecisionsBlock>) {
  const loc = useLoc();
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-20 md:py-28`}>
        <h3 className="font-serif text-3xl md:text-4xl mb-12 max-w-2xl">
          {loc(block.title)}
        </h3>
        <div className="grid md:grid-cols-3 gap-px bg-black border border-black">
          {block.items.map((it, i) => (
            <div
              key={i}
              className="bg-paper p-6 md:p-8 flex flex-col gap-3 min-h-[14rem]"
            >
              <span className="case-label text-accent">{it.n}</span>
              <h4 className="font-serif text-xl leading-tight">{loc(it.title)}</h4>
              <p className="text-sm leading-relaxed text-foreground/75">
                {loc(it.body)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function Tools({ block }: ModuleProps<ToolsBlock>) {
  const loc = useLoc();
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-20 md:py-28`}>
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h3 className="font-serif text-3xl md:text-4xl">{loc(block.title)}</h3>
          </div>
          <ul className="md:col-span-8 flex flex-col">
            {block.items.map((it, i) => (
              <li
                key={i}
                className="grid grid-cols-[1fr_auto] gap-6 py-4 border-t border-black last:border-b items-baseline"
              >
                {it.href ? (
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl md:text-2xl hover:text-accent transition-colors"
                  >
                    {it.name}
                    <span
                      aria-hidden="true"
                      className="ml-2 text-sm align-middle text-foreground/60"
                    >
                      ↗
                    </span>
                  </a>
                ) : (
                  <span className="font-serif text-xl md:text-2xl">{it.name}</span>
                )}
                <span className="case-label text-foreground/60 text-right">
                  {loc(it.note)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeIn>
  );
}

function Steps({ block }: ModuleProps<StepsBlock>) {
  const loc = useLoc();
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-20 md:py-28`}>
        <h3 className="font-serif text-3xl md:text-4xl mb-12">{loc(block.title)}</h3>
        <ol className="relative">
          <span
            aria-hidden="true"
            className="absolute left-[5px] top-2 bottom-2 w-0.5 -translate-x-1/2 bg-black"
          />
          {block.items.map((it, i) => (
            <li
              key={i}
              className="relative pl-10 pb-10 last:pb-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-[5px] top-2 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-black"
              />
              <h4 className="font-serif text-2xl md:text-3xl leading-tight mb-2">
                {loc(it.title)}
              </h4>
              <p className="text-sm leading-relaxed text-foreground/75 max-w-[56ch]">
                {loc(it.body)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </FadeIn>
  );
}

function Results({ block }: ModuleProps<ResultsBlock>) {
  const loc = useLoc();
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-20 md:py-28`}>
        <h3 className="font-serif text-3xl md:text-4xl mb-12">{loc(block.title)}</h3>
        <div className="grid md:grid-cols-2 gap-px bg-black border border-black">
          {block.items.map((it, i) => (
            <div
              key={i}
              className="bg-paper p-8 md:p-10 flex flex-col gap-3"
            >
              <span className="font-serif text-5xl md:text-6xl text-accent leading-none">
                {it.value}
              </span>
              <span className="text-sm leading-relaxed text-foreground/75 max-w-md">
                {loc(it.label)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function Video({ block }: ModuleProps<VideoBlock>) {
  const loc = useLoc();
  const t = useT();
  const ratio = block.ratio ?? "16/9";
  const { video } = block;
  const title = loc(block.title);
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-16 md:py-24`}>
        {block.title && (
          <h3 className="font-serif text-3xl md:text-4xl mb-6 text-pretty">
            {title}
          </h3>
        )}
        <div
          className="relative w-full border border-black bg-black overflow-hidden"
          style={{ aspectRatio: ratio }}
        >
          {video.poster && (
            <div className="absolute inset-0">
              <Placeholder image={video.poster} ratio={ratio} frame={false} />
            </div>
          )}
          {"youtubeId" in video ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
              title={title || t("video.fallback")}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
            />
          ) : "vimeoId" in video ? (
            <iframe
              src={`https://player.vimeo.com/video/${video.vimeoId}${video.vimeoHash ? `?h=${video.vimeoHash}` : ""}`}
              title={title || t("video.fallback")}
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <video
              src={video.src}
              controls
              preload="metadata"
              playsInline
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
        {block.caption && (
          <p className="mt-4 case-label text-foreground/60">{loc(block.caption)}</p>
        )}
      </div>
    </FadeIn>
  );
}

function Closing({ block }: ModuleProps<ClosingBlock>) {
  const loc = useLoc();
  return (
    <FadeIn>
      <div className={`${BODY_WRAP} py-16 md:py-20 text-center`}>
        <h3 className="font-serif text-3xl md:text-4xl mb-6 text-pretty">
          {loc(block.title)}
        </h3>
        <p className="text-sm leading-[1.85] text-foreground/85 max-w-[58ch] mx-auto">
          {loc(block.body)}
        </p>
      </div>
    </FadeIn>
  );
}

export function CaseBody({ blocks }: { blocks: CaseBlock[] }) {
  return (
    <div className="relative">
      {blocks.map((b, i) => {
        const n = i + 1;
        let node: JSX.Element;
        switch (b.kind) {
          case "longtext":
            node = <LongText block={b} n={n} />;
            break;
          case "highlight":
            node = <Highlight block={b} n={n} />;
            break;
          case "fullimage":
            node = <FullImage block={b} n={n} />;
            break;
          case "image":
            node = <ImageWithCaption block={b} n={n} />;
            break;
          case "gallery2":
            node = <Gallery2 block={b} n={n} />;
            break;
          case "gallery3":
            node = <Gallery3 block={b} n={n} />;
            break;
          case "sideimage":
            node = <SideImage block={b} n={n} />;
            break;
          case "sidetext":
            node = <SideText block={b} n={n} />;
            break;
          case "quote":
            node = <Quote block={b} n={n} />;
            break;
          case "learnings":
            node = <Learnings block={b} n={n} />;
            break;
          case "decisions":
            node = <Decisions block={b} n={n} />;
            break;
          case "tools":
            node = <Tools block={b} n={n} />;
            break;
          case "steps":
            node = <Steps block={b} n={n} />;
            break;
          case "results":
            node = <Results block={b} n={n} />;
            break;
          case "closing":
            node = <Closing block={b} n={n} />;
            break;
          case "videoblock":
            node = <Video block={b} n={n} />;
            break;
        }
        return <div key={i}>{node}</div>;
      })}
    </div>
  );
}
