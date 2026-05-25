import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "es";

const STORAGE_KEY = "lang";

const DICT = {
  // Nav
  "nav.home":      { en: "HOME",      es: "INICIO"   },
  "nav.about":     { en: "ABOUT",     es: "SOBRE MÍ" },
  "nav.processes": { en: "PROCESSES", es: "PROCESOS" },
  "nav.contact":   { en: "CONTACT",   es: "CONTACTO" },
  "nav.openMenu":  { en: "Open menu", es: "Abrir menú" },
  "nav.closeMenu": { en: "Close menu", es: "Cerrar menú" },

  // Hero
  "hero.amIa": { en: "am i a", es: "¿soy una" },

  // About
  "about.greet":      { en: "hi, i'm",            es: "hola, soy" },
  "about.title":      { en: "Multimedia Designer", es: "Diseñadora Multimedia" },
  "about.bio": {
    en: "I am a deeply curious person, driven by the need to learn, explore and connect ideas that may seem distant at first. For a long time, my interests seemed to move in different directions: technology, music, languages, sport, movement, teaching and design. Today, I understand that this range does not make me scattered. It shapes the way I see.",
    es: "Soy una persona profundamente curiosa, movida por la necesidad de aprender, explorar y conectar ideas que a simple vista parecen distantes. Durante mucho tiempo mis intereses parecían ir en direcciones distintas: tecnología, música, idiomas, deporte, movimiento, docencia y diseño. Hoy entiendo que esa amplitud no me dispersa, sino que construye mi manera de mirar.",
  },
  "about.t1.h": { en: "versatility",   es: "versatilidad" },
  "about.t1.p": {
    en: "It allows me to move across disciplines, tools and ways of working, adapting to each project and team.",
    es: "Me permite moverme entre disciplinas, herramientas y formas de trabajo, adaptándome a cada proyecto y equipo.",
  },
  "about.t2.h": { en: "curiosity",     es: "curiosidad" },
  "about.t2.p": {
    en: "It drives me to learn, experiment and find new ways of thinking and creating.",
    es: "Es el motor que me impulsa a aprender, experimentar y encontrar nuevas formas de pensar y crear.",
  },
  "about.t3.h": { en: "judgement", es: "criterio" },
  "about.t3.p": {
    en: "It helps me design with intention, balancing intuition, logic and sensitivity in every decision.",
    es: "Me ayuda a diseñar con intención, equilibrando intuición, lógica y sensibilidad en cada decisión.",
  },

  // Procesos
  "procesos.myMy":      { en: "my",     es: "mis"      },
  "procesos.processes": { en: "processes", es: "procesos" },

  // Procesos compartidos
  "shared.title":      { en: "shared",    es: "procesos" },
  "shared.processes":  { en: "processes", es: "compartidos" },
  "shared.body": {
    en: "Along the way, I also learned to value what is shared: working in teams, crossing perspectives and passing on what I learn. I believe design grows when it opens itself to exchange, when different ways of thinking meet and knowledge begins to circulate.",
    es: "En el camino también aprendí a valorar lo compartido: trabajar en equipo, cruzar perspectivas y transmitir lo que aprendo. Creo que el diseño crece cuando se abre al intercambio, cuando distintas formas de pensar se encuentran y el conocimiento circula.",
  },

  // Contact
  "contact.title":       { en: "let's continue the", es: "sigamos el" },
  "contact.titleAccent": { en: "process",            es: "proceso" },
  "contact.body": {
    en: "Today, I want to keep building at the intersection of design, technology and purpose. I am drawn to projects that make knowledge more accessible, expand participation and turn complex ideas into clear, human and meaningful experiences.",
    es: "Hoy quiero seguir construyendo en el cruce entre diseño, tecnología y propósito. Me atraen los proyectos que acercan conocimiento, amplían el acceso y transforman ideas complejas en experiencias claras, humanas y significativas.",
  },
  "contact.placeholderName":    { en: "YOUR NAME",      es: "TU NOMBRE" },
  "contact.placeholderEmail":   { en: "YOUR EMAIL",     es: "TU EMAIL" },
  "contact.placeholderSubject": { en: "SUBJECT",        es: "ASUNTO" },
  "contact.placeholderMessage": { en: "TELL ME MORE...", es: "CUÉNTAME MÁS..." },
  "contact.send":               { en: "SEND",           es: "ENVIAR" },

  // Site
  "site.role": {
    en: "Multimedia Designer",
    es: "Diseñadora Multimedia",
  },

  // Footer
  "footer.tagline": {
    en: "THE PROCESS CONTINUES...",
    es: "EL PROCESO CONTINÚA...",
  },
  "footer.disclaimer": {
    en: "all third-party brands, logos, screenshots, and visual references belong to their respective owners and are included for academic, contextual, and non-commercial purposes only.",
    es: "las marcas, logotipos, capturas y referencias visuales de terceros pertenecen a sus respectivos titulares y se incluyen únicamente con fines académicos, contextuales y no comerciales.",
  },

  // Case study chrome
  "case.backProcesses":   { en: "← processes",     es: "← procesos"     },
  "case.next":            { en: "NEXT →",          es: "SIGUIENTE →"    },
  "case.navProcesses":    { en: "PROCESSES",       es: "PROCESOS"       },
  "case.meta.role":       { en: "role",            es: "rol"            },
  "case.meta.period":     { en: "period",          es: "período"        },
  "case.meta.team":       { en: "team",            es: "equipo"         },
  "case.meta.tools":      { en: "tools",           es: "herramientas"   },
  "case.meta.links":      { en: "links",           es: "enlaces"        },
  "case.intro.title": {
    en: "Before the work, the question.",
    es: "Antes del trabajo, la pregunta.",
  },
  "case.intro.body": {
    en: "A short orientation. What was the starting point, what got in the way, what we wanted to build, and where I stood inside it.",
    es: "Una orientación breve. Cuál era el punto de partida, qué se interpuso, qué queríamos construir y dónde me situé dentro de todo eso.",
  },
  "case.intro.context": { en: "context", es: "contexto" },
  "case.intro.problem": { en: "problem", es: "problema" },
  "case.intro.goal":    { en: "goal",    es: "objetivo" },
  "case.intro.role":    { en: "my role", es: "mi rol" },
  "case.prev":          { en: "← previous case", es: "← caso anterior" },
  "case.nextCase":      { en: "next case →",     es: "siguiente caso →" },

  // 404
  "nf.error":   { en: "error 404", es: "error 404" },
  "nf.h1a":     { en: "this page got",   es: "esta página se" },
  "nf.h1b":     { en: "lost in the process", es: "perdió en el proceso" },
  "nf.body": {
    en: "The link you followed may be broken, or the page may have moved. Let's get you back on track.",
    es: "Puede que el enlace esté roto o que la página haya cambiado de sitio. Volvamos al camino.",
  },
  "nf.backHome": { en: "← back home", es: "← volver al inicio" },

  // Girl assistant phrases
  "girl.p1": {
    en: "Let's continue the process together!",
    es: "¡Sigamos el proceso juntos!",
  },
  "girl.p2": {
    en: "Want to see where this process goes?",
    es: "¿Quieres ver hacia dónde va este proceso?",
  },
  "girl.p3": {
    en: "Every project starts with a conversation.",
    es: "Todo proyecto empieza con una conversación.",
  },
  "girl.p4": {
    en: "Have an idea in mind?",
    es: "¿Tienes una idea en mente?",
  },
  "girl.p5": {
    en: "Let's connect the next dots.",
    es: "Conectemos los siguientes puntos.",
  },
  "girl.p6": {
    en: "This process does not have to end here.",
    es: "Este proceso no tiene por qué acabar aquí.",
  },

  // Lang toggle aria
  "lang.toggle": { en: "Switch to Spanish", es: "Cambiar a inglés" },

  // Loader
  "loader.phrase": {
    en: "the process is taking shape…",
    es: "el proceso está tomando forma…",
  },

  // Music button
  "music.play":  { en: "Play music",  es: "Reproducir música" },
  "music.pause": { en: "Pause music", es: "Pausar música" },

  // Lightbox
  "lightbox.expanded": { en: "Expanded image", es: "Imagen ampliada" },
  "lightbox.close":    { en: "Close",          es: "Cerrar" },

  // Girl assistant
  "girl.open":      { en: "Open contact form",  es: "Abrir formulario de contacto" },
  "girl.dialog":    { en: "Contact form",       es: "Formulario de contacto" },
  "girl.close":     { en: "Close contact form", es: "Cerrar formulario de contacto" },

  // Video block fallback title
  "video.fallback": { en: "YouTube video", es: "Video de YouTube" },

  // Shared processes images
  "shared.photo": { en: "Shared process", es: "Proceso compartido" },
} as const;

export type TKey = keyof typeof DICT;

// Lists (ordered translations) ─ kept separate so callers iterate naturally.
const ROLES_EN = [
  "developer?",
  "ux designer?",
  "video editor?",
  "community manager?",
  "photographer?",
  "professor?",
  "entrepreneur?",
  "speaker?",
  "multimedia designer?",
];
const ROLES_ES = [
  "desarrolladora?",
  "diseñadora ux?",
  "editora de video?",
  "community manager?",
  "fotógrafa?",
  "profesora?",
  "emprendedora?",
  "oradora?",
  "diseñadora multimedia?",
];

export function getRoles(lang: Lang): string[] {
  return lang === "es" ? ROLES_ES : ROLES_EN;
}

function detectInitial(): Lang {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {}
  if (typeof navigator !== "undefined") {
    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("es")) return "es";
  }
  return "en";
}

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: TKey) => string;
};

const I18nContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectInitial());

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {}
      },
      t: (k) => DICT[k]?.[lang] ?? k,
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export function useT() {
  return useContext(I18nContext).t;
}

// ── Per-field localized data ──────────────────────────────────────
// Used in case-study data files: a field can be either a plain string
// (keeps existing data working) or { en, es } when translated.

export type LocalizedString = string | { en: string; es: string };

export function loc(val: LocalizedString | undefined, lang: Lang): string {
  if (val == null) return "";
  if (typeof val === "string") return val;
  return val[lang] ?? val.en;
}

export function locArr(
  arr: readonly LocalizedString[] | undefined,
  lang: Lang,
): string[] {
  if (!arr) return [];
  return arr.map((v) => loc(v, lang));
}

export function useLoc() {
  const { lang } = useContext(I18nContext);
  return (val: LocalizedString | undefined) => loc(val, lang);
}
