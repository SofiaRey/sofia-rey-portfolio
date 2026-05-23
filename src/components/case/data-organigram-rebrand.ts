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
    es: "Un rebranding especulativo que explora cómo una empresa de cannabis podría ir más allá de los símbolos obvios y construir una identidad más refinada y confiable.",
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
      en: "Organigram rebrand — final logo and applications",
      es: "Rebrand de Organigram — logo final y aplicaciones",
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
      { en: "branding",          es: "branding" },
      { en: "visual identity",   es: "identidad visual" },
      { en: "brand voice",       es: "voz de marca" },
      { en: "logo design",       es: "diseño de logo" },
      { en: "exchange semester", es: "semestre de intercambio" },
      { en: "research",          es: "investigación" },
    ],
    links: [],
    readingTime: { en: "5 min read", es: "5 min de lectura" },
  },
  intro: {
    context: {
      en: "During my exchange semester at Wilson School of Design at Kwantlen Polytechnic University in Canada, I took Branding 1. The assignment was to choose an existing brand whose current identity was not working well and develop a complete rebranding proposal.",
      es: "Durante mi semestre de intercambio en la Wilson School of Design de Kwantlen Polytechnic University en Canadá, cursé Branding 1. La consigna era elegir una marca existente cuya identidad actual no estuviera funcionando bien y desarrollar una propuesta completa de rebranding.",
    },
    problem: {
      en: "I chose Organigram, a Canadian cannabis company. Its existing logo felt visually weak: low in contrast, overly complex and too dependent on predictable national and category symbols, such as the maple leaf and the cannabis leaf.",
      es: "Elegí Organigram, una empresa canadiense de cannabis. Su logo existente se sentía visualmente débil: bajo contraste, demasiado complejo y muy dependiente de símbolos predecibles del país y la categoría, como la hoja de arce y la hoja de cannabis.",
    },
    goal: {
      en: "Create a stronger, more versatile identity that could communicate wellness, trust, innovation and professionalism without relying on the most literal visual codes of cannabis and Canada.",
      es: "Crear una identidad más fuerte y versátil, capaz de comunicar bienestar, confianza, innovación y profesionalismo sin apoyarse en los códigos visuales más literales del cannabis y de Canadá.",
    },
    role: {
      en: "I led the full rebranding process: research, visual exploration, tagline development, brand voice definition, hand sketching, logo refinement and the creation of two complete brand manual directions before selecting the final route.",
      es: "Lideré todo el proceso de rebranding: investigación, exploración visual, desarrollo de tagline, definición de voz de marca, bocetado a mano, refinamiento del logo y la creación de dos direcciones completas de manual de marca antes de elegir el camino final.",
    },
  },
  body: [
    {
      kind: "highlight",
      text: {
        en: "The challenge was to design a cannabis identity without letting the brand be reduced to a cannabis leaf.",
        es: "El desafío era diseñar una identidad de cannabis sin dejar que la marca quedara reducida a una hoja de cannabis.",
      },
    },
    {
      kind: "longtext",
      title: { en: "Looking beyond the obvious", es: "Mirar más allá de lo obvio" },
      paragraphs: [
        {
          en: "The first step was to understand the world around Organigram more deeply. Instead of staying only with the most expected cannabis references, I researched laboratory imagery, chemical structures, medical and wellness codes, natural systems, innovation, sustainability and the values behind the company.",
          es: "El primer paso fue entender el mundo alrededor de Organigram con más profundidad. En vez de quedarme solo con las referencias más esperables del cannabis, investigué imaginería de laboratorio, estructuras químicas, códigos médicos y de bienestar, sistemas naturales, innovación, sostenibilidad y los valores detrás de la empresa.",
        },
        {
          en: "This research gave me a broader visual and conceptual vocabulary. The goal was not to hide the cannabis category, but to avoid making it the only thing the brand could communicate. Organigram needed to feel trustworthy, professional and forward-thinking, while still connected to wellness and nature.",
          es: "Esta investigación me dio un vocabulario visual y conceptual más amplio. El objetivo no era ocultar la categoría del cannabis, sino evitar que fuera lo único que la marca podía comunicar. Organigram tenía que sentirse confiable, profesional y con visión a futuro, sin dejar de estar conectada con el bienestar y la naturaleza.",
        },
      ],
    },
    {
      kind: "fullimage",
      image: {
        kind: "placeholder",
        label: {
          en: "Organigram rebrand — contextual image",
          es: "Rebrand de Organigram — imagen contextual",
        },
        tone: "bone",
        src: og1,
        alt: {
          en: "Organigram rebrand — contextual image",
          es: "Rebrand de Organigram — imagen contextual",
        },
      },
    },
    {
      kind: "steps",
      title: { en: "Branding process", es: "Proceso de branding" },
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
          title: { en: "Exploring taglines", es: "Explorar taglines" },
          body: {
            en: "I developed different tagline directions, moving between innovation, sustainability, quality and wellness before narrowing the tone of the brand.",
            es: "Desarrollé distintas direcciones de tagline, moviéndome entre innovación, sostenibilidad, calidad y bienestar antes de afinar el tono de la marca.",
          },
        },
        {
          date: "03",
          title: { en: "Sketching at volume", es: "Bocetar en volumen" },
          body: {
            en: "The assignment required at least 100 hand-drawn logo variations. Repeating the exercise so many times felt excessive at first, but it taught me that the best idea can appear much later than expected.",
            es: "La consigna pedía al menos 100 variaciones de logo dibujadas a mano. Al principio repetir el ejercicio tantas veces se sentía excesivo, pero me enseñó que la mejor idea puede aparecer mucho más tarde de lo esperado.",
          },
        },
        {
          date: "04",
          title: { en: "Defining the voice", es: "Definir la voz" },
          body: {
            en: "Once the visual territory was clearer, I developed the brand voice around care, trust, competence, sophistication and forward-thinking wellness.",
            es: "Una vez que el territorio visual estuvo más claro, desarrollé la voz de marca en torno al cuidado, la confianza, la competencia, la sofisticación y un bienestar con visión a futuro.",
          },
        },
        {
          date: "05",
          title: {
            en: "Building two brand systems",
            es: "Construir dos sistemas de marca",
          },
          body: {
            en: "The project required two complete brand manual directions. The biggest challenge was making both solutions feel different while still responding to the same brand values.",
            es: "El proyecto requería dos direcciones completas de manual de marca. El mayor desafío fue lograr que ambas soluciones se sintieran distintas y, a la vez, respondieran a los mismos valores de marca.",
          },
        },
        {
          date: "06",
          title: {
            en: "Selecting the final route",
            es: "Elegir el camino final",
          },
          body: {
            en: "The final identity direction was chosen based on clarity, adaptability, alignment with the brand values and its ability to move Organigram away from predictable category clichés.",
            es: "La dirección final de identidad se eligió por su claridad, su adaptabilidad, su alineación con los valores de marca y su capacidad de alejar a Organigram de los clichés predecibles de la categoría.",
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
        en: "One of the most valuable parts of the project was the forced volume of sketching. Drawing one hundred variations sounded repetitive, and at times it felt like I was running out of ideas. But the process proved the opposite: by pushing past the obvious first solutions, more interesting forms started to appear. The right direction was not necessarily in the first sketches. It came from staying with the problem longer than felt comfortable.",
        es: "Una de las partes más valiosas del proyecto fue el volumen forzado de bocetado. Dibujar cien variaciones sonaba repetitivo, y por momentos sentía que se me acababan las ideas. Pero el proceso demostró lo contrario: al empujar más allá de las primeras soluciones obvias, empezaron a aparecer formas más interesantes. La dirección correcta no estaba necesariamente en los primeros bocetos. Llegó al quedarme con el problema más tiempo del que era cómodo.",
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
          en: "Hand-drawn logo sketches — 100 variations",
          es: "Bocetos de logo a mano — 100 variaciones",
        },
      },
      caption: {
        en: "The sketching phase helped move the identity away from the first, most predictable ideas.",
        es: "La fase de bocetado ayudó a alejar la identidad de las primeras ideas, las más predecibles.",
      },
    },
    {
      kind: "tools",
      title: { en: "Brand voice direction", es: "Dirección de voz de marca" },
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
            en: "06 - brand manual route A / logo and applications",
            es: "06 - manual de marca camino A / logo y aplicaciones",
          },
          tone: "bone",
          src: og3,
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
          src: og4,
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
      kind: "longtext",
      title: {
        en: "Designing in a different context",
        es: "Diseñar en otro contexto",
      },
      paragraphs: [
        {
          en: "This project was also shaped by the experience of studying design in another country. The class took place during my exchange semester in Canada, and the process exposed me to a different design culture from the one I was used to in Uruguay.",
          es: "Este proyecto también estuvo moldeado por la experiencia de estudiar diseño en otro país. La clase fue durante mi semestre de intercambio en Canadá, y el proceso me expuso a una cultura de diseño distinta a la que conocía en Uruguay.",
        },
        {
          en: "At times, the criteria and discussions felt very different from what I had previously learned. Some conversations placed stronger emphasis on aesthetics, while I was used to defending meaning, concept and rationale. Navigating that contrast helped me become more adaptable as a designer.",
          es: "Por momentos, los criterios y las discusiones se sentían muy distintos a lo que había aprendido antes. Algunas conversaciones ponían el énfasis en la estética, mientras que yo estaba acostumbrada a defender el sentido, el concepto y el razonamiento. Moverme en ese contraste me ayudó a volverme más adaptable como diseñadora.",
        },
        {
          en: "The project taught me to hold onto my own criteria while also learning how to respond to another academic and cultural environment. That tension made the outcome stronger and expanded the way I approach branding work.",
          es: "El proyecto me enseñó a sostener mis propios criterios y, a la vez, a aprender a responder a otro entorno académico y cultural. Esa tensión hizo que el resultado fuera más fuerte y amplió la manera en que enfrento el trabajo de branding.",
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
          es: "La primera idea suele ser la más obvia, sobre todo en categorías llenas de clichés visuales.",
        },
        {
          en: "High-volume sketching can feel repetitive, but it is often what pushes a project into more original territory.",
          es: "Bocetar en gran volumen puede sentirse repetitivo, pero suele ser lo que empuja un proyecto hacia un territorio más original.",
        },
        {
          en: "A strong rebrand needs both visual appeal and strategic reasoning.",
          es: "Un buen rebrand necesita atractivo visual y razonamiento estratégico al mismo tiempo.",
        },
        {
          en: "Creating two different systems for the same brand forced me to separate brand values from a single visual solution.",
          es: "Crear dos sistemas distintos para la misma marca me obligó a separar los valores de marca de una única solución visual.",
        },
        {
          en: "Studying design in a different country helped me become more versatile and more aware of how cultural context shapes design critique.",
          es: "Estudiar diseño en otro país me ayudó a ser más versátil y a tomar más conciencia de cómo el contexto cultural moldea la crítica de diseño.",
        },
      ],
    },
    {
      kind: "closing",
      title: { en: "A lesson in range", es: "Una lección sobre rango" },
      body: {
        en: "The Organigram rebrand became less about redesigning a logo and more about learning how to build range: range in research, range in sketching, range in visual systems and range in how I defend a design decision. It helped me understand that versatility is not about changing style randomly, but about adapting while keeping a clear strategic intention.",
        es: "El rebrand de Organigram terminó siendo menos sobre rediseñar un logo y más sobre aprender a construir rango: rango en investigación, rango en bocetado, rango en sistemas visuales y rango en cómo defiendo una decisión de diseño. Me ayudó a entender que la versatilidad no es cambiar de estilo al azar, sino adaptarme manteniendo una intención estratégica clara.",
      },
    },
  ],
  archive: {
    title: { en: "Visual process archive", es: "Archivo visual del proceso" },
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
        date: { en: "research", es: "investigación" },
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
        label: { en: "tagline exploration", es: "exploración de tagline" },
        date: { en: "strategy", es: "estrategia" },
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
        label: { en: "logo sketches", es: "bocetos de logo" },
        date: { en: "exploration", es: "exploración" },
        src: og7,
        note: {
          en: "100+ hand-drawn variations",
          es: "más de 100 variaciones a mano",
        },
      },
      {
        kind: "placeholder",
        tone: "paper",
        label: { en: "brand voice", es: "voz de marca" },
        date: { en: "voice", es: "voz" },
        src: og9,
        note: {
          en: "sincerity, competence and sophistication",
          es: "sinceridad, competencia y sofisticación",
        },
      },
      {
        kind: "placeholder",
        tone: "bone",
        label: {
          en: "brand manual route A",
          es: "manual de marca camino A",
        },
        date: { en: "system", es: "sistema" },
        src: og8,
        note: {
          en: "first complete identity direction",
          es: "primera dirección de identidad completa",
        },
      },
      {
        kind: "placeholder",
        tone: "dark",
        label: {
          en: "brand manual route B",
          es: "manual de marca camino B",
        },
        date: { en: "system", es: "sistema" },
        src: og10,
        note: {
          en: "second complete identity direction",
          es: "segunda dirección de identidad completa",
        },
      },
    ],
  },
  neighbours: {
    prev: {
      name: "Portfolio Video",
      slug: "portfolio-video",
      kind: { en: "AI · Motion · Process", es: "IA · Motion · Proceso" },
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
