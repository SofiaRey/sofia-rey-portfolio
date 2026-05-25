import type { LocalizedString } from "../../lib/i18n";

export type Tone = "paper" | "bone" | "dark";

export type PlaceholderImage = {
  kind: "placeholder";
  label: LocalizedString;
  tone?: Tone;
  src?: string;
  alt?: LocalizedString;
};

export type CaseMeta = {
  role: LocalizedString;
  period: LocalizedString;
  duration: LocalizedString;
  team?: string[];
  tools: string[];
  tags: LocalizedString[];
  links?: { label: LocalizedString; href: string }[];
  readingTime: LocalizedString;
};

export type CaseIntro = {
  context: LocalizedString;
  problem: LocalizedString;
  goal: LocalizedString;
  role: LocalizedString;
};

export type LongTextBlock = {
  kind: "longtext";
  title?: LocalizedString;
  paragraphs: LocalizedString[];
};

export type HighlightBlock = {
  kind: "highlight";
  text: LocalizedString;
};

export type FullImageBlock = {
  kind: "fullimage";
  image: PlaceholderImage;
  caption?: LocalizedString;
};

export type ImageWithCaptionBlock = {
  kind: "image";
  image: PlaceholderImage;
  caption?: LocalizedString;
  ratio?: string;
};

export type Gallery2Block = {
  kind: "gallery2";
  images: [PlaceholderImage, PlaceholderImage];
  caption?: LocalizedString;
};

export type Gallery3Block = {
  kind: "gallery3";
  images: [PlaceholderImage, PlaceholderImage, PlaceholderImage];
  caption?: LocalizedString;
};

export type SideImageBlock = {
  kind: "sideimage";
  orientation: "image-left" | "image-right";
  image: PlaceholderImage;
  caption?: LocalizedString;
  title?: LocalizedString;
  body: LocalizedString;
};

export type SideTextBlock = {
  kind: "sidetext";
  orientation: "text-left" | "text-right";
  image: PlaceholderImage;
  caption?: LocalizedString;
  title?: LocalizedString;
  body: LocalizedString;
};

export type QuoteBlock = {
  kind: "quote";
  text: LocalizedString;
  attribution?: LocalizedString;
};

export type LearningsBlock = {
  kind: "learnings";
  title: LocalizedString;
  items: LocalizedString[];
};

export type DecisionsBlock = {
  kind: "decisions";
  title: LocalizedString;
  items: { n: string; title: LocalizedString; body: LocalizedString }[];
};

export type ToolsBlock = {
  kind: "tools";
  title: LocalizedString;
  items: { name: string; note: LocalizedString; href?: string }[];
};

export type StepsBlock = {
  kind: "steps";
  title: LocalizedString;
  items: { date: LocalizedString; title: LocalizedString; body: LocalizedString }[];
};

export type ResultsBlock = {
  kind: "results";
  title: LocalizedString;
  items: { value: string; label: LocalizedString }[];
};

export type ClosingBlock = {
  kind: "closing";
  title: LocalizedString;
  body: LocalizedString;
};

export type CaseVideo =
  | { src: string; poster?: PlaceholderImage }
  | { youtubeId: string; poster?: PlaceholderImage }
  | { vimeoId: string; vimeoHash?: string; poster?: PlaceholderImage };

export type VideoBlock = {
  kind: "videoblock";
  video: CaseVideo;
  title?: LocalizedString;
  caption?: LocalizedString;
  ratio?: string;
};

export type CaseBlock =
  | LongTextBlock
  | HighlightBlock
  | FullImageBlock
  | ImageWithCaptionBlock
  | Gallery2Block
  | Gallery3Block
  | SideImageBlock
  | SideTextBlock
  | QuoteBlock
  | LearningsBlock
  | DecisionsBlock
  | ToolsBlock
  | StepsBlock
  | ResultsBlock
  | ClosingBlock
  | VideoBlock;

export type ArchiveItem = PlaceholderImage & {
  date: LocalizedString;
  note: LocalizedString;
};

export type NeighbourCase = {
  name: LocalizedString;
  slug: string;
  kind: LocalizedString;
  tone?: Tone;
};

export type CaseLogo = {
  src: string;
  alt?: string;
  maxHeight?: number;
};

export type CaseData = {
  slug: string;
  name: LocalizedString;
  tagline: LocalizedString;
  logo?: CaseLogo;
  cover: PlaceholderImage;
  meta: CaseMeta;
  intro: CaseIntro;
  body: CaseBlock[];
  archive?: {
    title: LocalizedString;
    note: LocalizedString;
    items: ArchiveItem[];
  };
  neighbours: {
    prev: NeighbourCase;
    next: NeighbourCase;
  };
  copyrightNote?: LocalizedString;
};
