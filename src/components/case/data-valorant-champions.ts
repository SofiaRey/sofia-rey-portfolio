import type { CaseData } from "./types";
import vcCover from "@/assets/cases/valorant-champions/cover.webp";
import vcLogo from "@/assets/cases/valorant-champions/logo.webp";
import vc1 from "@/assets/cases/valorant-champions/1.webp";
import vc2 from "@/assets/cases/valorant-champions/2.webp";
import vc3 from "@/assets/cases/valorant-champions/3.webp";
import vc4 from "@/assets/cases/valorant-champions/4.webp";
import vc5 from "@/assets/cases/valorant-champions/5.webp";
import vc7 from "@/assets/cases/valorant-champions/7.webp";

export const VALORANT_CHAMPIONS_CASE: CaseData = {
  slug: "valorant-champions",
  name: "Valorant Champions",
  tagline: {
    en: "An animated broadcast identity system for Valorant Champions, developed from static graphics into final motion pieces.",
    es: "Un sistema de identidad animada para broadcast de Valorant Champions, desarrollado desde piezas gráficas estáticas hasta animaciones finales.",
  },
  logo: {
    src: vcLogo,
    alt: "Valorant Champions",
    maxHeight: 100,
  },
  cover: {
    kind: "placeholder",
    label: {
      en: "01 - cover : VCT animated brand still / bumper frame / 21:9",
      es: "01 - portada : still de marca animada VCT / frame del bumper / 21:9",
    },
    tone: "dark",
    src: vcCover,
    alt: {
      en: "Valorant Champions - animated broadcast identity still",
      es: "Valorant Champions - still de identidad animada para broadcast",
    },
  },
  meta: {
    role: {
      en: "Visual Identity · Motion Design · Broadcast Graphics · Art Direction",
      es: "Identidad visual · Motion design · Gráfica para broadcast · Dirección de arte",
    },
    period: "2023",
    duration: {
      en: "Gráfica para Cine y TV course project",
      es: "Proyecto del curso Gráfica para Cine y TV",
    },
    tools: ["After Effects", "Figma", "Adobe Illustrator", "Reaper"],
    tags: [
      { en: "motion design", es: "motion design" },
      { en: "broadcast graphics", es: "gráfica para broadcast" },
      { en: "visual identity", es: "identidad visual" },
      { en: "esports", es: "esports" },
      { en: "animation", es: "animación" },
      { en: "After Effects", es: "After Effects" },
    ],
    links: [],
    readingTime: { en: "5 min read", es: "5 min de lectura" },
  },
  intro: {
    context: {
      en: "This project was developed for Gráfica para Cine y TV, a course focused on designing graphic systems for audiovisual media. The assignment was to create a complete animated brand package from scratch, starting with static identity pieces and then bringing them into motion.",
      es: "Este proyecto se desarrolló para Gráfica para Cine y TV, una materia enfocada en el diseño de sistemas gráficos para medios audiovisuales. La consigna era crear desde cero un paquete completo de marca animada, partiendo de piezas estáticas de identidad y llevándolas luego al movimiento.",
    },
    problem: {
      en: "Valorant Champions already had a strong visual universe, but its identity changes every year. The challenge was to understand the existing codes of both Valorant and Champions, then create a new system that felt believable within the franchise while still having its own visual direction.",
      es: "Valorant Champions ya tenía un universo visual fuerte, pero su identidad cambia cada año. El desafío era entender los códigos existentes tanto de Valorant como de Champions, y luego crear un sistema nuevo que se sintiera creíble dentro de la franquicia y, a la vez, tuviera una dirección visual propia.",
    },
    goal: {
      en: "Design a complete graphic identity system for Valorant Champions and animate its main pieces as if they belonged to a real esports broadcast package.",
      es: "Diseñar un sistema completo de identidad gráfica para Valorant Champions y animar sus piezas principales como si pertenecieran a un paquete real de broadcast para esports.",
    },
    role: {
      en: "I researched the existing brand language, built the visual diagnosis, designed the static graphic system, created the bumper storyboard, edited the music base and animated the final pieces in After Effects.",
      es: "Investigué el lenguaje visual existente, armé el diagnóstico de marca, diseñé el sistema gráfico estático, hice el storyboard del bumper, edité la base musical y animé las piezas finales en After Effects.",
    },
  },
  body: [
    {
      kind: "highlight",
      text: {
        en: "This was the first project where I treated motion not as an extra layer, but as part of the brand system itself.",
        es: "Este fue el primer proyecto en el que trabajé el movimiento no como una capa extra, sino como parte del propio sistema de marca.",
      },
    },
    {
      kind: "videoblock",
      title: {
        en: "Animated broadcast identity",
        es: "Identidad animada para broadcast",
      },
      video: {
        youtubeId: "YRU-S-HLmqo",
        poster: {
          kind: "placeholder",
          label: {
            en: "VCT animated case video poster",
            es: "Portada del video del caso VCT animado",
          },
          tone: "dark",
        },
      },
      caption: {
        en: "A case video showing the animated bumper, broadcast graphics and motion pieces created for the Valorant Champions identity.",
        es: "Un video case que muestra el bumper animado, la gráfica para broadcast y las piezas en movimiento creadas para la identidad de Valorant Champions.",
      },
    },
    {
      kind: "longtext",
      title: {
        en: "Understanding the existing language",
        es: "Entender el lenguaje existente",
      },
      paragraphs: [
        {
          en: "The project started with a diagnosis of Valorant and the previous Valorant Champions visual identity. I analysed the game’s graphic language: typography, colour palette, glitch-inspired vector style, geometric elements and broadcast compositions.",
          es: "El proyecto empezó con un diagnóstico de Valorant y de la identidad visual anterior de Valorant Champions. Analicé el lenguaje gráfico del juego: tipografía, paleta de colores, estilo vectorial inspirado en el glitch, elementos geométricos y composiciones de broadcast.",
        },
        {
          en: "I also studied the Champions 2021 identity separately, since the event changes its visual system every year. That edition used a high-contrast black and white system with gold accents, circular text rings, thin geometric lines, symmetrical compositions, large typographic treatments and 3D elements.",
          es: "También estudié la identidad de Champions 2021 por separado, ya que el evento cambia su sistema visual cada año. Esa edición usaba un sistema en blanco y negro de muy alto contraste con detalles dorados, anillos circulares de texto, líneas geométricas finas, composiciones simétricas, tratamientos tipográficos a gran escala y elementos 3D.",
        },
        {
          en: "This research became the foundation for my proposal: a system that would feel connected to both the game and the Champions event, while giving the new identity its own rhythm, hierarchy and motion potential.",
          es: "Esta investigación se volvió la base de mi propuesta: un sistema que se sintiera conectado tanto con el juego como con el evento Champions, dándole a la nueva identidad su propio ritmo, jerarquía y potencial de movimiento.",
        },
      ],
    },
    {
      kind: "gallery3",
      images: [
        {
          kind: "placeholder",
          label: {
            en: "02 - Valorant brand diagnosis / colour and typography",
            es: "02 - diagnóstico de marca Valorant / color y tipografía",
          },
          tone: "paper",
          src: vc1,
          alt: {
            en: "Valorant brand diagnosis - colour and typography",
            es: "Diagnóstico de marca Valorant - color y tipografía",
          },
        },
        {
          kind: "placeholder",
          label: {
            en: "03 - Champions 2021 visual analysis",
            es: "03 - análisis visual de Champions 2021",
          },
          tone: "dark",
          src: vc3,
          alt: {
            en: "Champions 2021 visual analysis",
            es: "Análisis visual de Champions 2021",
          },
        },
        {
          kind: "placeholder",
          label: {
            en: "04 - VCT moodboard / broadcast references",
            es: "04 - moodboard VCT / referencias de broadcast",
          },
          tone: "bone",
          src: vc4,
          alt: {
            en: "VCT moodboard - broadcast references",
            es: "Moodboard VCT - referencias de broadcast",
          },
        },
      ],
      caption: {
        en: "The diagnosis compared Valorant’s game identity with the yearly visual language of Champions.",
        es: "El diagnóstico comparó la identidad del juego Valorant con el lenguaje visual anual de Champions.",
      },
    },
    {
      kind: "decisions",
      title: { en: "Visual direction", es: "Dirección visual" },
      items: [
        {
          n: "01",
          title: {
            en: "Combining both identities",
            es: "Combinar ambas identidades",
          },
          body: {
            en: "I integrated Valorant’s red and glitch language with the black, white and gold contrast of Champions, creating a bridge between the game and the tournament.",
            es: "Integré el rojo y el lenguaje glitch de Valorant con el contraste en blanco, negro y dorado de Champions, creando un puente entre el juego y el torneo.",
          },
        },
        {
          n: "02",
          title: {
            en: "Making typography structural",
            es: "Volver estructural la tipografía",
          },
          body: {
            en: "Typography became more than information. Repeated words, text rings and large-scale type helped build rhythm, hierarchy and opportunities for motion.",
            es: "La tipografía pasó a ser más que información. Palabras repetidas, anillos de texto y tipografía a gran escala ayudaron a construir ritmo, jerarquía y oportunidades de movimiento.",
          },
        },
        {
          n: "03",
          title: {
            en: "Designing with motion in mind",
            es: "Diseñar pensando en el movimiento",
          },
          body: {
            en: "The static system was created with animation in mind: rings, grids, logo fragments, cuts and geometric shapes could scale, rotate, glitch and sync with the beat.",
            es: "El sistema estático se creó pensando en la animación: anillos, grillas, fragmentos de logo, cortes y formas geométricas podían escalar, rotar, glitchear y sincronizarse con el beat.",
          },
        },
      ],
    },
    {
      kind: "fullimage",
      image: {
        kind: "placeholder",
        label: {
          en: "Valorant Champions broadcast composition",
          es: "Composición de broadcast de Valorant Champions",
        },
        tone: "bone",
        src: vc2,
        alt: {
          en: "Valorant Champions broadcast composition",
          es: "Composición de broadcast de Valorant Champions",
        },
      },
    },
    {
      kind: "sideimage",
      orientation: "image-right",
      title: {
        en: "Building the static system first",
        es: "Construir primero el sistema estático",
      },
      body: {
        en: "Before animating, I designed the main static pieces of the broadcast package: waiting screen, transitions, score elements, support grids, round win graphics, lower thirds, replay frame and caster camera graphics. This helped me understand the system as a complete audiovisual identity rather than a single bumper.",
        es: "Antes de animar, diseñé las principales piezas estáticas del paquete de broadcast: pantalla de espera, transiciones, elementos de marcador, grillas de apoyo, gráficas de round win, zócalos, frame de replay y gráficas de cámara de casters. Esto me ayudó a entender el sistema como una identidad audiovisual completa, no solo como un bumper aislado.",
      },
      image: {
        kind: "placeholder",
        label: {
          en: "05 - static broadcast pieces / score, replay, lower thirds",
          es: "05 - piezas estáticas de broadcast / marcador, replay, lower thirds",
        },
        tone: "paper",
        src: vc5,
        alt: {
          en: "Static broadcast pieces - score, replay, lower thirds",
          es: "Piezas estáticas de broadcast - marcador, replay, lower thirds",
        },
      },
      caption: {
        en: "The static pieces defined the visual rules before moving into animation.",
        es: "Las piezas estáticas definieron las reglas visuales antes de pasar a la animación.",
      },
    },
    {
      kind: "steps",
      title: { en: "Process", es: "Proceso" },
      items: [
        {
          date: "01",
          title: { en: "Brand diagnosis", es: "Diagnóstico de marca" },
          body: {
            en: "I researched the current Valorant identity and the previous Champions edition, identifying recurring elements such as palettes, typefaces, glitch effects, geometric lines and broadcast layouts.",
            es: "Investigué la identidad actual de Valorant y la edición anterior de Champions, identificando elementos recurrentes como paletas, tipografías, efectos glitch, líneas geométricas y layouts de broadcast.",
          },
        },
        {
          date: "02",
          title: {
            en: "Moodboard and direction",
            es: "Moodboard y dirección",
          },
          body: {
            en: "I created a moodboard to define the atmosphere of the new system, combining esports intensity, high contrast, gold details, red accents and layered typographic compositions.",
            es: "Armé un moodboard para definir la atmósfera del nuevo sistema, combinando intensidad de esports, alto contraste, detalles dorados, acentos rojos y composiciones tipográficas en capas.",
          },
        },
        {
          date: "03",
          title: {
            en: "Static graphic system",
            es: "Sistema gráfico estático",
          },
          body: {
            en: "I designed the main broadcast assets as still compositions, including screens, transitions, scoreboard elements, support grids and replay frames.",
            es: "Diseñé los principales assets de broadcast como composiciones fijas, incluyendo pantallas, transiciones, elementos de marcador, grillas de apoyo y frames de replay.",
          },
        },
        {
          date: "04",
          title: { en: "Audio base", es: "Base de audio" },
          body: {
            en: "The music was created first by editing an existing Champions track in Reaper, so the motion could later be synchronised to the beat.",
            es: "La música se creó primero editando un track existente de Champions en Reaper, para que el movimiento pudiera sincronizarse después con el beat.",
          },
        },
        {
          date: "05",
          title: { en: "Bumper storyboard", es: "Storyboard del bumper" },
          body: {
            en: "I planned the bumper frame by frame, defining when elements would scale, cut, move sideways, glitch or reveal the logo in sync with the music.",
            es: "Planifiqué el bumper frame a frame, definiendo cuándo los elementos iban a escalar, cortar, moverse lateralmente, glitchear o revelar el logo en sincronía con la música.",
          },
        },
        {
          date: "06",
          title: {
            en: "After Effects animation",
            es: "Animación en After Effects",
          },
          body: {
            en: "I animated the pieces in After Effects, working with scale changes, motion timing, logo glitches, transitions, layered typography and broadcast-style movement.",
            es: "Animé las piezas en After Effects, trabajando con cambios de escala, timing de movimiento, glitches del logo, transiciones, tipografía en capas y movimiento propio del lenguaje de broadcast.",
          },
        },
      ],
    },
    {
      kind: "highlight",
      text: {
        en: "Designing for motion made me understand that a brand can have rhythm, not only shape.",
        es: "Diseñar para el movimiento me hizo entender que una marca puede tener ritmo, no solo forma.",
      },
    },
    {
      kind: "longtext",
      title: {
        en: "Learning After Effects through a real system",
        es: "Aprender After Effects desde un sistema real",
      },
      paragraphs: [
        {
          en: "This was the first time I worked this extensively with After Effects. Until then, I had approached motion mostly through isolated animation exercises. In this project, every movement had to serve a larger graphic identity.",
          es: "Fue la primera vez que trabajé tan a fondo con After Effects. Hasta ese momento, había abordado el motion principalmente desde ejercicios de animación aislados. En este proyecto, cada movimiento tenía que responder a una identidad gráfica más amplia.",
        },
        {
          en: "The biggest challenge was translating static compositions into motion without losing consistency. The elements needed to feel energetic and competitive, but also controlled enough to work as part of a broadcast system.",
          es: "El mayor desafío fue traducir composiciones estáticas al movimiento sin perder consistencia. Los elementos tenían que sentirse enérgicos y competitivos, pero a la vez lo bastante controlados como para funcionar dentro de un sistema de broadcast.",
        },
        {
          en: "Working from research to static design to animation helped me understand motion design as a complete process: first define the visual rules, then decide how those rules behave over time.",
          es: "Trabajar desde la investigación al diseño estático y de ahí a la animación me ayudó a entender el motion design como un proceso completo: primero definir las reglas visuales, después decidir cómo se comportan esas reglas en el tiempo.",
        },
      ],
    },
    {
      kind: "image",
      ratio: "29/9",
      image: {
        kind: "placeholder",
        label: {
          en: "Valorant Champions broadcast detail",
          es: "Detalle de broadcast de Valorant Champions",
        },
        tone: "paper",
        src: vc7,
        alt: {
          en: "Valorant Champions broadcast detail",
          es: "Detalle de broadcast de Valorant Champions",
        },
      },
    },
    {
      kind: "learnings",
      title: {
        en: "What this process taught me",
        es: "Lo que este proceso me enseñó",
      },
      items: [
        {
          en: "Motion design works best when it is planned from the identity system, not added at the end.",
          es: "El motion design funciona mejor cuando se planifica desde el sistema de identidad, no cuando se agrega al final.",
        },
        {
          en: "A strong audiovisual brand needs consistency across many small broadcast moments, not only one hero animation.",
          es: "Una marca audiovisual fuerte necesita consistencia en muchos pequeños momentos de broadcast, no solo en una animación principal.",
        },
        {
          en: "Storyboarding helped me control rhythm, timing and visual hierarchy before opening After Effects.",
          es: "Hacer storyboard me ayudó a controlar el ritmo, el timing y la jerarquía visual antes de abrir After Effects.",
        },
        {
          en: "Editing the music first made the animation more intentional because the movement could respond to the beat.",
          es: "Editar la música primero hizo que la animación fuera más intencional, porque el movimiento podía responder al beat.",
        },
        {
          en: "This project pushed me to become more comfortable with After Effects and to understand motion as a design language.",
          es: "Este proyecto me empujó a sentirme más cómoda con After Effects y a entender el movimiento como un lenguaje de diseño.",
        },
      ],
    },
    {
      kind: "closing",
      title: {
        en: "From static identity to motion system",
        es: "De la identidad estática al sistema en movimiento",
      },
      body: {
        en: "This project helped me understand animated branding as a complete system. The final result was not only a set of moving graphics, but a visual language with rules, rhythm and behaviour. It was an important step in learning how to design for screens where identity, information and movement need to work together.",
        es: "Este proyecto me ayudó a entender el branding animado como un sistema completo. El resultado final no fue solo un conjunto de gráficas en movimiento, sino un lenguaje visual con reglas, ritmo y comportamiento. Fue un paso importante para aprender a diseñar para pantallas donde identidad, información y movimiento tienen que funcionar juntos.",
      },
    },
  ],
  neighbours: {
    prev: {
      name: "Organigram Rebrand",
      slug: "organigram-rebrand",
      kind: {
        en: "Branding · Visual Identity",
        es: "Branding · Identidad visual",
      },
    },
    next: {
      name: "The Winged Chariot",
      slug: "winged-chariot-allegory",
      kind: {
        en: "Motion · Visual metaphor",
        es: "Motion · Metáfora visual",
      },
    },
  },
  copyrightNote: {
    en: "Note: Valorant and its visual elements belong to Riot Games, Inc. This project is presented for academic and portfolio purposes only, with no commercial intent or official affiliation.",
    es: "Nota: Valorant y sus elementos visuales pertenecen a Riot Games, Inc. Este proyecto se presenta únicamente con fines académicos y de portafolio, sin intención comercial ni afiliación oficial.",
  },
};