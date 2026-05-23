import type { CaseData } from "./types";
import cover from "@/assets/cases/organigram/cover.webp";
import logo from "@/assets/cases/organigram/logo.webp";
import og1 from "@/assets/cases/organigram/1.webp";
import og2 from "@/assets/cases/organigram/2.webp";
import og3 from "@/assets/cases/organigram/3.webp";
import og4 from "@/assets/cases/organigram/4.webp";
import og5 from "@/assets/cases/organigram/5.webp";
import og6 from "@/assets/cases/organigram/6.webp";
import og7 from "@/assets/cases/organigram/7.webp";
import og8 from "@/assets/cases/organigram/8.webp";
import og9 from "@/assets/cases/organigram/9.webp";
import og10 from "@/assets/cases/organigram/10.webp";
import og11 from "@/assets/cases/organigram/11.webp";
import og12 from "@/assets/cases/organigram/12.webp";

export const ORGANIGRAM_REBRAND_CASE: CaseData = {
  slug: "organigram-rebrand",
  name: "Organigram Rebrand",
  tagline: {
    en: "A speculative rebrand exploring how a cannabis company could move beyond obvious symbols and build a more refined, trustworthy identity.",
    es: "Un rebranding especulativo que explora cómo una empresa de cannabis puede ir más allá de los símbolos obvios y construir una identidad más refinada y confiable.",
  },
  logo: {
    src: logo,
    alt: "Organigram",
    maxHeight: 80,
  },
  cover: {
    kind: "placeholder",
    label: {
      en: "01 - cover : Organigram final logo / brand applications / 21:9",
      es: "01 - portada : logo final de Organigram / aplicaciones de marca / 21:9",
    },
    tone: "paper",
    src: cover,
    alt: {
      en: "Organigram rebrand - final logo and brand applications",
      es: "Rebrand de Organigram - logo final y aplicaciones de marca",
    },
  },
  meta: {
    role: {
      en: "Brand Research · Visual Identity · Brand Voice · Logo Design",
      es: "Investigación de marca · Identidad visual · Voz de marca · Diseño de logo",
    },
    period: "2024",
    duration: {
      en: "Branding 1 course project",
      es: "Proyecto del curso Branding 1",
    },
    tools: ["Figma", "Procreate"],
    tags: [
      { en: "branding", es: "branding" },
      { en: "visual identity", es: "identidad visual" },
      { en: "brand voice", es: "voz de marca" },
      { en: "logo design", es: "diseño de logo" },
      { en: "exchange semester", es: "semestre de intercambio" },
      { en: "research", es: "investigación" },
    ],
    links: [],
    readingTime: { en: "5 min read", es: "5 min de lectura" },
  },
  intro: {
    context: {
      en: "During my exchange semester at Wilson School of Design, Kwantlen Polytechnic University, I took Branding 1. The assignment was to choose an existing brand whose current identity was not working well and develop a complete rebranding proposal.",
      es: "Durante mi semestre de intercambio en Wilson School of Design, de Kwantlen Polytechnic University, cursé Branding 1. La consigna era elegir una marca existente cuya identidad actual no funcionara bien y desarrollar una propuesta completa de rebranding.",
    },
    problem: {
      en: "I chose Organigram, a Canadian cannabis company. Its existing logo felt visually weak: it had low contrast, too much complexity and relied heavily on predictable category and national symbols, such as the cannabis leaf and the maple leaf.",
      es: "Elegí Organigram, una empresa canadiense de cannabis. Su logo actual se sentía visualmente débil: tenía bajo contraste, demasiada complejidad y dependía mucho de símbolos previsibles de la categoría y del país, como la hoja de cannabis y la hoja de arce.",
    },
    goal: {
      en: "Create a stronger and more versatile identity that could communicate wellness, trust, innovation and professionalism without relying on the most literal visual codes of cannabis or Canada.",
      es: "Crear una identidad más fuerte y versátil, capaz de comunicar bienestar, confianza, innovación y profesionalismo sin depender de los códigos visuales más literales del cannabis o de Canadá.",
    },
    role: {
      en: "I developed the full rebranding process: research, visual exploration, tagline development, brand voice definition, hand sketching, logo refinement and two complete brand manual directions before selecting the final route.",
      es: "Desarrollé el proceso completo de rebranding: investigación, exploración visual, desarrollo de tagline, definición de voz de marca, bocetado a mano, refinamiento del logo y dos direcciones completas de manual de marca antes de elegir el camino final.",
    },
  },
  body: [
    {
      kind: "highlight",
      text: {
        en: "The challenge was to design a cannabis identity without reducing the brand to a cannabis leaf.",
        es: "El desafío era diseñar una identidad de cannabis sin reducir la marca a una hoja de cannabis.",
      },
    },
    {
      kind: "longtext",
      title: {
        en: "Looking beyond the obvious",
        es: "Mirar más allá de lo obvio",
      },
      paragraphs: [
        {
          en: "The first step was to understand the world around Organigram more deeply. Instead of staying with the most expected cannabis references, I researched laboratory imagery, chemical structures, medical and wellness codes, natural systems, innovation, sustainability and the values behind the company.",
          es: "El primer paso fue entender con más profundidad el universo alrededor de Organigram. En lugar de quedarme con las referencias más esperables del cannabis, investigué imaginería de laboratorio, estructuras químicas, códigos médicos y de bienestar, sistemas naturales, innovación, sostenibilidad y los valores detrás de la empresa.",
        },
        {
          en: "This gave me a broader visual and conceptual vocabulary. The goal was not to hide the cannabis category, but to avoid making it the only thing the brand could communicate. Organigram needed to feel trustworthy, professional and forward-thinking, while still connected to wellness and nature.",
          es: "Eso me dio un vocabulario visual y conceptual más amplio. El objetivo no era ocultar la categoría del cannabis, sino evitar que fuera lo único que la marca podía comunicar. Organigram debía sentirse confiable, profesional y con visión a futuro, sin perder su vínculo con el bienestar y la naturaleza.",
        },
      ],
    },
    {
      kind: "fullimage",
      image: {
        kind: "placeholder",
        label: {
          en: "Organigram rebrand - contextual image",
          es: "Rebrand de Organigram - imagen contextual",
        },
        tone: "bone",
        src: og1,
        alt: {
          en: "Organigram rebrand contextual image",
          es: "Imagen contextual del rebrand de Organigram",
        },
      },
    },
    {
      kind: "steps",
      title: {
        en: "Branding process",
        es: "Proceso de branding",
      },
      items: [
        {
          date: "01",
          title: {
            en: "Researching the territory",
            es: "Investigar el territorio",
          },
          body: {
            en: "I explored the cannabis industry, laboratory references, chemical composition, natural imagery, wellness codes and the company’s values to find richer material for the identity.",
            es: "Exploré la industria del cannabis, referencias de laboratorio, composición química, imaginería natural, códigos de bienestar y los valores de la empresa para encontrar material más rico para la identidad.",
          },
        },
        {
          date: "02",
          title: {
            en: "Exploring taglines",
            es: "Explorar taglines",
          },
          body: {
            en: "I developed different tagline directions, moving between innovation, sustainability, quality and wellness before narrowing the brand’s tone.",
            es: "Desarrollé distintas direcciones de tagline, moviéndome entre innovación, sostenibilidad, calidad y bienestar antes de afinar el tono de la marca.",
          },
        },
        {
          date: "03",
          title: {
            en: "Sketching at volume",
            es: "Bocetar en volumen",
          },
          body: {
            en: "The assignment required at least 100 hand-drawn logo variations. At first, repeating the same task so many times felt excessive, but it taught me that the strongest idea can appear much later than expected.",
            es: "La consigna pedía al menos 100 variaciones de logo dibujadas a mano. Al principio, repetir tantas veces la misma tarea parecía excesivo, pero me enseñó que la idea más fuerte puede aparecer mucho más tarde de lo esperado.",
          },
        },
        {
          date: "04",
          title: {
            en: "Defining the voice",
            es: "Definir la voz",
          },
          body: {
            en: "Once the visual territory was clearer, I developed the brand voice around care, trust, competence, sophistication and forward-thinking wellness.",
            es: "Una vez que el territorio visual estuvo más claro, desarrollé la voz de marca en torno al cuidado, la confianza, la competencia, la sofisticación y una idea de bienestar con visión a futuro.",
          },
        },
        {
          date: "05",
          title: {
            en: "Building two brand systems",
            es: "Construir dos sistemas de marca",
          },
          body: {
            en: "The project required two complete brand manual directions. The biggest challenge was making both solutions feel distinct while still responding to the same values.",
            es: "El proyecto requería dos direcciones completas de manual de marca. El mayor desafío fue lograr que ambas soluciones se sintieran distintas y, a la vez, respondieran a los mismos valores.",
          },
        },
        {
          date: "06",
          title: {
            en: "Selecting the final route",
            es: "Elegir el camino final",
          },
          body: {
            en: "The final identity was selected for its clarity, adaptability, alignment with the brand values and ability to move Organigram away from predictable category clichés.",
            es: "La identidad final fue elegida por su claridad, adaptabilidad, alineación con los valores de marca y capacidad de alejar a Organigram de los clichés previsibles de la categoría.",
          },
        },
      ],
    },
    {
      kind: "sideimage",
      orientation: "image-right",
      title: {
        en: "The value of sketching too much",
        es: "El valor de bocetar demasiado",
      },
      body: {
        en: "One of the most valuable parts of the project was the forced volume of sketching. Drawing one hundred variations sounded repetitive, and at times it felt like I was running out of ideas. But the process proved the opposite: by pushing past the first obvious solutions, more interesting forms started to appear. The right direction did not come from a sudden spark, but from staying with the problem longer than felt comfortable.",
        es: "Una de las partes más valiosas del proyecto fue el volumen forzado de bocetado. Dibujar cien variaciones sonaba repetitivo, y por momentos sentía que se me acababan las ideas. Pero el proceso demostró lo contrario: al empujar más allá de las primeras soluciones obvias, empezaron a aparecer formas más interesantes. La dirección correcta no llegó como una idea repentina, sino como resultado de quedarme con el problema más tiempo del que era cómodo.",
      },
      image: {
        kind: "placeholder",
        label: {
          en: "05 - hand-drawn logo sketches / 100 variations",
          es: "05 - bocetos de logo a mano / 100 variaciones",
        },
        tone: "paper",
        src: og2,
        alt: {
          en: "Hand-drawn logo sketches - 100 variations",
          es: "Bocetos de logo a mano - 100 variaciones",
        },
      },
      caption: {
        en: "The sketching phase helped move the identity away from the first, most predictable ideas.",
        es: "La fase de bocetado ayudó a alejar la identidad de las primeras ideas, las más predecibles.",
      },
    },
    {
      kind: "tools",
      title: {
        en: "Brand voice direction",
        es: "Dirección de voz de marca",
      },
      items: [
        {
          name: "Sincerity",
          note: {
            en: "Transparent, honest and reliable communication that builds trust.",
            es: "Comunicación transparente, honesta y confiable que genera confianza.",
          },
        },
        {
          name: "Competence",
          note: {
            en: "A professional tone that communicates expertise and leadership in the industry.",
            es: "Un tono profesional que comunica experticia y liderazgo en la industria.",
          },
        },
        {
          name: "Sophistication",
          note: {
            en: "A refined expression that supports the perception of quality and care.",
            es: "Una expresión refinada que sostiene la percepción de calidad y cuidado.",
          },
        },
        {
          name: "Innovation",
          note: {
            en: "A forward-thinking attitude connected to research, development and better cannabis products.",
            es: "Una actitud con visión a futuro conectada con la investigación, el desarrollo y mejores productos de cannabis.",
          },
        },
        {
          name: "Tagline direction",
          note: {
            en: "Wellness through Cannabis.",
            es: "Bienestar a través del cannabis.",
          },
        },
      ],
    },
    {
      kind: "gallery2",
      images: [
        {
          kind: "placeholder",
          label: {
            en: "Brand manual route A",
            es: "Manual de marca - ruta A",
          },
          tone: "bone",
          src: og3,
          alt: {
            en: "First Organigram brand manual direction",
            es: "Primera dirección de manual de marca de Organigram",
          },
        },
        {
          kind: "placeholder",
          label: {
            en: "Brand manual route B",
            es: "Manual de marca - ruta B",
          },
          tone: "dark",
          src: og4,
          alt: {
            en: "Second Organigram brand manual direction",
            es: "Segunda dirección de manual de marca de Organigram",
          },
        },
      ],
      caption: {
        en: "Creating two complete systems pushed me to explore different visual answers to the same strategic problem.",
        es: "Crear dos sistemas completos me obligó a explorar respuestas visuales distintas para un mismo problema estratégico.",
      },
    },
    {
      kind: "longtext",
      title: {
        en: "Designing in a different context",
        es: "Diseñar en otro contexto",
      },
      paragraphs: [
        {
          en: "This project was also shaped by the experience of studying design in another country. The class took place during my exchange semester in Canada, and the process exposed me to a different design culture from the one I was used to in Uruguay.",
          es: "Este proyecto también estuvo atravesado por la experiencia de estudiar diseño en otro país. La materia fue parte de mi semestre de intercambio en Canadá, y el proceso me expuso a una cultura de diseño distinta a la que estaba acostumbrada en Uruguay.",
        },
        {
          en: "At times, the criteria and discussions felt different from what I had previously learned. Some conversations placed stronger emphasis on aesthetics, while I was used to defending meaning, concept and rationale. Navigating that contrast helped me become more adaptable as a designer.",
          es: "Por momentos, los criterios y las discusiones se sentían distintos a lo que había aprendido antes. Algunas conversaciones ponían más énfasis en la estética, mientras que yo estaba acostumbrada a defender significado, concepto y fundamento. Navegar ese contraste me ayudó a volverme más adaptable como diseñadora.",
        },
        {
          en: "The project taught me to hold onto my own criteria while learning how to respond to another academic and cultural environment. That tension made the process stronger and expanded the way I approach branding work.",
          es: "El proyecto me enseñó a sostener mi propio criterio mientras aprendía a responder a otro entorno académico y cultural. Esa tensión fortaleció el proceso y amplió mi forma de abordar proyectos de branding.",
        },
      ],
    },
    {
      kind: "gallery2",
      images: [
        {
          kind: "placeholder",
          label: {
            en: "06 - brand manual route A / logo and applications",
            es: "06 - manual de marca camino A / logo y aplicaciones",
          },
          tone: "bone",
          src: og11,
          alt: {
            en: "Brand manual route A — logo and applications",
            es: "Manual de marca camino A — logo y aplicaciones",
          },
        },
        {
          kind: "placeholder",
          label: {
            en: "07 - brand manual route B / logo and applications",
            es: "07 - manual de marca camino B / logo y aplicaciones",
          },
          tone: "dark",
          src: og12,
          alt: {
            en: "Brand manual route B — logo and applications",
            es: "Manual de marca camino B — logo y aplicaciones",
          },
        },
      ],
      caption: {
        en: "Creating two complete systems pushed me to explore different visual answers to the same strategic problem.",
        es: "Crear dos sistemas completos me empujó a explorar distintas respuestas visuales al mismo problema estratégico.",
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
          en: "The first idea is usually the most obvious one, especially in categories full of visual clichés.",
          es: "La primera idea suele ser la más obvia, especialmente en categorías llenas de clichés visuales.",
        },
        {
          en: "High-volume sketching can feel repetitive, but it is often what pushes a project into more original territory.",
          es: "Bocetar en volumen puede sentirse repetitivo, pero muchas veces es lo que empuja un proyecto hacia territorios más originales.",
        },
        {
          en: "A strong rebrand needs both visual appeal and strategic reasoning.",
          es: "Un buen rebrand necesita atractivo visual, pero también razonamiento estratégico.",
        },
        {
          en: "Creating two different systems for the same brand forced me to separate brand values from a single visual solution.",
          es: "Crear dos sistemas distintos para una misma marca me obligó a separar los valores de marca de una única solución visual.",
        },
        {
          en: "Studying design in a different country helped me become more versatile and more aware of how cultural context shapes design critique.",
          es: "Estudiar diseño en otro país me ayudó a volverme más versátil y a entender mejor cómo el contexto cultural influye en la crítica de diseño.",
        },
      ],
    },
    {
      kind: "closing",
      title: {
        en: "A lesson in range",
        es: "Una lección de amplitud",
      },
      body: {
        en: "The Organigram rebrand became less about redesigning a logo and more about learning how to build range: range in research, range in sketching, range in visual systems and range in how I defend a design decision. It helped me understand that versatility is not about changing style randomly, but about adapting while keeping a clear strategic intention.",
        es: "El rebrand de Organigram terminó siendo menos sobre rediseñar un logo y más sobre aprender a construir amplitud: amplitud en la investigación, en el bocetado, en los sistemas visuales y en la forma de defender una decisión de diseño. Me ayudó a entender que la versatilidad no se trata de cambiar de estilo al azar, sino de adaptarse sin perder una intención estratégica clara.",
      },
    },
  ],
  archive: {
    title: {
      en: "Visual process archive",
      es: "Archivo visual del proceso",
    },
    note: {
      en: "Fragments from the branding process: visual research, tagline exploration, sketching, brand voice and two identity system directions.",
      es: "Fragmentos del proceso de branding: investigación visual, exploración de taglines, bocetado, voz de marca y dos direcciones de sistema de identidad.",
    },
    items: [
      {
        kind: "placeholder",
        tone: "paper",
        label: {
          en: "visual identity research",
          es: "investigación de identidad visual",
        },
        date: {
          en: "research",
          es: "investigación",
        },
        note: {
          en: "laboratory, trust, wellness and innovation references",
          es: "referencias de laboratorio, confianza, bienestar e innovación",
        },
        src: og6,
        alt: {
          en: "Visual identity research — references",
          es: "Investigación de identidad visual — referencias",
        },
      },
      {
        kind: "placeholder",
        tone: "bone",
        label: {
          en: "tagline exploration",
          es: "exploración de taglines",
        },
        date: {
          en: "strategy",
          es: "estrategia",
        },
        note: {
          en: "from innovation to wellness",
          es: "de la innovación al bienestar",
        },
        src: og5,
        alt: {
          en: "Tagline exploration — from innovation to wellness",
          es: "Exploración de tagline — de la innovación al bienestar",
        },
      },
      {
        kind: "placeholder",
        tone: "dark",
        label: {
          en: "logo sketches",
          es: "bocetos de logo",
        },
        date: {
          en: "exploration",
          es: "exploración",
        },
        src: og7,
        note: {
          en: "100+ hand-drawn variations",
          es: "100+ variaciones dibujadas a mano",
        },
      },
      {
        kind: "placeholder",
        tone: "paper",
        label: {
          en: "brand voice",
          es: "voz de marca",
        },
        date: {
          en: "voice",
          es: "voz",
        },
        src: og9,
        note: {
          en: "care, trust and sophistication",
          es: "cuidado, confianza y sofisticación",
        },
      },
      {
        kind: "placeholder",
        tone: "bone",
        label: {
          en: "brand manual route A",
          es: "manual de marca - ruta A",
        },
        date: {
          en: "system",
          es: "sistema",
        },
        src: og8,
        note: {
          en: "first complete identity direction",
          es: "primera dirección completa de identidad",
        },
      },
      {
        kind: "placeholder",
        tone: "dark",
        label: {
          en: "brand manual route B",
          es: "manual de marca - ruta B",
        },
        date: {
          en: "system",
          es: "sistema",
        },
        src: og10,

        note: {
          en: "second complete identity direction",
          es: "segunda dirección completa de identidad",
        },
      },
    ],
  },
  neighbours: {
    prev: {
      name: "Portfolio Video",
      slug: "portfolio-video",
      kind: {
        en: "AI · Motion · Process",
        es: "IA · Motion · Proceso",
      },
    },
    next: {
      name: "Valorant Champions",
      slug: "valorant-champions",
      kind: {
        en: "Motion · Broadcast graphics",
        es: "Motion · Gráfica para broadcast",
      },
    },
  },
};