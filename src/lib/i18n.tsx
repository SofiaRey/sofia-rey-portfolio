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
    en: "I am a multimedia design student passionate about learning new things. This is one of my most notable characteristics. My vocation for design arises from the need to integrate a wide range of personal interests, including computer science, music, language studies and sports. This discipline allows me to mix and match my different interests, enhancing the final result of my work.",
    es: "Soy estudiante de diseño multimedia, apasionada por aprender cosas nuevas. Esa es una de mis características más notorias. Mi vocación por el diseño nace de la necesidad de integrar intereses muy distintos: informática, música, idiomas y deporte. Esta disciplina me permite mezclar y combinar todos esos intereses, potenciando el resultado final de mi trabajo.",
  },
  "about.t1.h": { en: "versatility",   es: "versatilidad" },
  "about.t1.p": {
    en: "It allows me to adapt my skills to the needs of the environment, both to work in teams and alone.",
    es: "Me permite adaptar mis habilidades a las necesidades del entorno, tanto para trabajar en equipo como en solitario.",
  },
  "about.t2.h": { en: "curiosity",     es: "curiosidad" },
  "about.t2.p": {
    en: "I am a curious person, eager to learn and experiment with new tools as part of my constant development.",
    es: "Soy una persona curiosa, con ganas de aprender y experimentar con nuevas herramientas como parte de mi desarrollo constante.",
  },
  "about.t3.h": { en: "consciousness", es: "conciencia" },
  "about.t3.p": {
    en: "Understanding the logic behind each step is fundamental to design. Design is the perfect blend of intuition and rationality.",
    es: "Entender la lógica detrás de cada paso es fundamental para el diseño. El diseño es la combinación perfecta entre intuición y racionalidad.",
  },

  // Procesos
  "procesos.myMy":      { en: "my",     es: "mis"      },
  "procesos.processes": { en: "processes", es: "procesos" },

  // Procesos compartidos
  "shared.title":      { en: "shared",    es: "procesos" },
  "shared.processes":  { en: "processes", es: "compartidos" },
  "shared.body": {
    en: "Along the way I also learned to value what is shared: working in teams, crossing perspectives, and building with others. I believe design grows when it opens up to exchange, when different ways of thinking meet and turn an initial idea into something more meaningful.",
    es: "En el camino aprendí también a valorar lo compartido: trabajar en equipo, cruzar perspectivas y construir con otras personas. Creo que el diseño crece cuando se abre al intercambio, cuando distintas formas de pensar se encuentran y convierten una idea inicial en algo con más sentido.",
  },

  // Contact
  "contact.title":       { en: "let's continue the", es: "sigamos el" },
  "contact.titleAccent": { en: "process",            es: "proceso" },
  "contact.body": {
    en: "Today I want to keep building projects where design, technology, and purpose meet. I'm drawn to accessible experiences, well-crafted digital products, education, outreach, and tools that turn complex ideas into clear, human experiences.",
    es: "Hoy quiero seguir construyendo proyectos donde se encuentren diseño, tecnología y propósito. Me atraen las experiencias accesibles, los productos digitales bien hechos, la educación, la divulgación y las herramientas que convierten ideas complejas en experiencias claras y humanas.",
  },
  "contact.placeholderName":    { en: "YOUR NAME",      es: "TU NOMBRE" },
  "contact.placeholderEmail":   { en: "YOUR EMAIL",     es: "TU EMAIL" },
  "contact.placeholderSubject": { en: "SUBJECT",        es: "ASUNTO" },
  "contact.placeholderMessage": { en: "TELL ME MORE...", es: "CUÉNTAME MÁS..." },
  "contact.send":               { en: "SEND",           es: "ENVIAR" },

  // Footer
  "footer.tagline": {
    en: "THE PROCESS CONTINUES...",
    es: "EL PROCESO CONTINÚA...",
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
  "girl.p7": {
    en: "I read every message — try me.",
    es: "Leo todos los mensajes, escríbeme.",
  },

  // Lang toggle aria
  "lang.toggle": { en: "Switch to Spanish", es: "Cambiar a inglés" },
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
