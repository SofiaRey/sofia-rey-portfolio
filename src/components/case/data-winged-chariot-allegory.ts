import type { CaseData } from "./types";
import wcCover from "@/assets/cases/winged-chariot/cover.webp";
import wc1 from "@/assets/cases/winged-chariot/1.webp";

export const WINGED_CHARIOT_CASE: CaseData = {
  slug: "winged-chariot-allegory",
  name: "The Winged Chariot",
  tagline: {
    en: "A motion piece translating Plato’s allegory into a visual language of digital collage, vectors and symbolic imagery.",
    es: "Una pieza de motion que traduce la alegoría de Platón a un lenguaje visual de collage digital, vectores e imaginería simbólica.",
  },
  cover: {
    kind: "placeholder",
    label: {
      en: "01 - cover : winged chariot still / collage composition / 21:9",
      es: "01 - portada : still del carro alado / composición de collage / 21:9",
    },
    tone: "dark",
    src: wcCover,
    alt: {
      en: "The Winged Chariot - collage composition still",
      es: "El carro alado - still de composición en collage",
    },
  },
  meta: {
    role: {
      en: "Visual Direction · Motion Design · Digital Collage · Visual Metaphors",
      es: "Dirección visual · Motion design · Collage digital · Metáforas visuales",
    },
    period: "2023",
    duration: {
      en: "Gráfica para Cine y TV course project",
      es: "Proyecto del curso Gráfica para Cine y TV",
    },
    team: ["Sofía Rey", "Franco González"],
    tools: ["After Effects", "Figma", "Adobe Illustrator"],
    tags: [
      { en: "motion design", es: "motion design" },
      { en: "digital collage", es: "collage digital" },
      { en: "philosophy", es: "filosofía" },
      { en: "visual metaphor", es: "metáfora visual" },
      { en: "audiovisual storytelling", es: "narrativa audiovisual" },
      { en: "collaboration", es: "colaboración" },
    ],
    links: [
      {
        label: { en: "Watch video", es: "Ver video" },
        href: "https://www.youtube.com/watch?v=Sefcy8-kkBQ",
      },
    ],
    readingTime: { en: "4 min read", es: "4 min de lectura" },
  },
  intro: {
    context: {
      en: "This project was developed for Gráfica para Cine y TV as an audiovisual interpretation of Plato’s allegory of the winged chariot. It was created in collaboration with a philosophy student, who wrote the script and narrated the piece.",
      es: "Este proyecto se desarrolló para Gráfica para Cine y TV como una interpretación audiovisual de la alegoría del carro alado de Platón. Fue creado en colaboración con un estudiante de filosofía, que escribió el guion y narró la pieza.",
    },
    problem: {
      en: "The main challenge was translating abstract philosophical ideas into visual metaphors that could support the explanation without oversimplifying the concept.",
      es: "El principal desafío fue traducir ideas filosóficas abstractas en metáforas visuales que acompañaran la explicación sin simplificar demasiado el concepto.",
    },
    goal: {
      en: "Create a visually distinctive motion piece that made the allegory more engaging and understandable through symbolic imagery, rhythm and contrast.",
      es: "Crear una pieza de motion visualmente distintiva que hiciera la alegoría más atractiva y comprensible a través de imaginería simbólica, ritmo y contraste.",
    },
    role: {
      en: "I was responsible for the full visual side of the project: moodboard, aesthetic direction, visual metaphors, composition, graphic assets and motion design.",
      es: "Estuve a cargo de todo el lado visual del proyecto: moodboard, dirección estética, metáforas visuales, composición, piezas gráficas y motion design.",
    },
  },
  body: [
    {
      kind: "highlight",
      text: {
        en: "The challenge was not to illustrate philosophy literally, but to give abstract ideas a visual form.",
        es: "El desafío no era ilustrar la filosofía de forma literal, sino darle forma visual a ideas abstractas.",
      },
    },
    {
      kind: "videoblock",
      title: { en: "The Winged Chariot", es: "El carro alado" },
      video: {
        youtubeId: "Sefcy8-kkBQ",
        poster: {
          kind: "placeholder",
          label: {
            en: "The Winged Chariot video poster",
            es: "Portada del video El carro alado",
          },
          tone: "dark",
        },
      },
      caption: {
        en: "A motion piece combining narration, digital collage, vector graphics and symbolic imagery to explain Plato’s allegory.",
        es: "Una pieza de motion que combina narración, collage digital, gráfica vectorial e imaginería simbólica para explicar la alegoría de Platón.",
      },
    },
    {
      kind: "longtext",
      title: {
        en: "Designing for an abstract concept",
        es: "Diseñar para un concepto abstracto",
      },
      paragraphs: [
        {
          en: "This project started from a collaboration with another discipline. My collaborator, a philosophy student, wrote the script and narrated the video, while I focused on building the visual world around it.",
          es: "Este proyecto partió de una colaboración con otra disciplina. Mi compañero, estudiante de filosofía, escribió el guion y narró el video, mientras yo me concentré en construir el mundo visual a su alrededor.",
        },
        {
          en: "The allegory of the winged chariot is not an easy concept to represent visually. It speaks about reason, desire, tension, aspiration and internal conflict. My task was to find metaphors that could accompany the narration and make those ideas more accessible without turning them into overly literal images.",
          es: "La alegoría del carro alado no es un concepto fácil de representar visualmente. Habla de razón, deseo, tensión, aspiración y conflicto interno. Mi tarea fue encontrar metáforas que pudieran acompañar la narración y hacer esas ideas más accesibles sin convertirlas en imágenes demasiado literales.",
        },
        {
          en: "That process pushed me to think differently about motion graphics. The visuals were not only decorative: they had to become a bridge between philosophical language and the viewer’s understanding.",
          es: "Ese proceso me obligó a pensar el motion graphics de otra manera. Lo visual no era solo decorativo: tenía que volverse un puente entre el lenguaje filosófico y la comprensión de la audiencia.",
        },
      ],
    },
    {
      kind: "decisions",
      title: { en: "Visual direction", es: "Dirección visual" },
      items: [
        {
          n: "01",
          title: { en: "Digital collage", es: "Collage digital" },
          body: {
            en: "I chose a digital collage language to create a fragmented, symbolic and layered world, closer to thought and interpretation than to literal illustration.",
            es: "Elegí un lenguaje de collage digital para crear un mundo fragmentado, simbólico y por capas, más cercano al pensamiento y la interpretación que a la ilustración literal.",
          },
        },
        {
          n: "02",
          title: {
            en: "Ancient meets digital",
            es: "Lo antiguo se encuentra con lo digital",
          },
          body: {
            en: "Most of the imagery was treated in black and white, connecting the classical origin of the allegory with a contemporary digital composition.",
            es: "La mayor parte de las imágenes se trabajó en blanco y negro, conectando el origen clásico de la alegoría con una composición digital contemporánea.",
          },
        },
        {
          n: "03",
          title: {
            en: "Complementary contrast",
            es: "Contraste complementario",
          },
          body: {
            en: "The colour palette was built around yellow and violet, using strong complementary contrast to make the piece feel bold, expressive and visually memorable.",
            es: "La paleta cromática se construyó en torno al amarillo y al violeta, usando un contraste complementario fuerte para que la pieza se sintiera audaz, expresiva y visualmente memorable.",
          },
        },
      ],
    },
    {
      kind: "fullimage",
      image: {
        kind: "placeholder",
        label: {
          en: "02 - winged chariot composition / collage and vector mix",
          es: "02 - composición del carro alado / mezcla de collage y vector",
        },
        tone: "dark",
        src: wc1,
        alt: {
          en: "The Winged Chariot - composition with collage and vector mix",
          es: "El carro alado - composición con mezcla de collage y vector",
        },
      },
      caption: {
        en: "The contrast between classical imagery and digital graphics became one of the core visual devices.",
        es: "El contraste entre la imaginería clásica y la gráfica digital se volvió uno de los recursos visuales centrales.",
      },
    },
    {
      kind: "steps",
      title: { en: "Process", es: "Proceso" },
      items: [
        {
          date: "01",
          title: { en: "Understanding the script", es: "Entender el guion" },
          body: {
            en: "The process began by reading and interpreting the script written by my collaborator, identifying the key philosophical ideas that needed visual support.",
            es: "El proceso empezó leyendo e interpretando el guion escrito por mi compañero, identificando las ideas filosóficas clave que necesitaban apoyo visual.",
          },
        },
        {
          date: "02",
          title: {
            en: "Moodboard and aesthetic direction",
            es: "Moodboard y dirección estética",
          },
          body: {
            en: "I built a moodboard to define a distinctive style: digital collage, black-and-white imagery, vector shapes and a yellow-violet complementary palette.",
            es: "Armé un moodboard para definir un estilo distintivo: collage digital, imágenes en blanco y negro, formas vectoriales y una paleta complementaria de amarillo y violeta.",
          },
        },
        {
          date: "03",
          title: {
            en: "Visual metaphor exploration",
            es: "Exploración de metáforas visuales",
          },
          body: {
            en: "I searched for symbolic ways to represent abstract concepts such as reason, impulse, tension, elevation and internal conflict.",
            es: "Busqué formas simbólicas de representar conceptos abstractos como la razón, el impulso, la tensión, la elevación y el conflicto interno.",
          },
        },
        {
          date: "04",
          title: { en: "Graphic composition", es: "Composición gráfica" },
          body: {
            en: "I designed the visual scenes by combining cutout imagery, flat colour fields, geometric shapes and vector elements.",
            es: "Diseñé las escenas visuales combinando imágenes recortadas, planos de color pleno, formas geométricas y elementos vectoriales.",
          },
        },
        {
          date: "05",
          title: { en: "Motion design", es: "Motion design" },
          body: {
            en: "I animated the compositions to follow the rhythm of the narration, using movement to clarify relationships between ideas and keep the piece visually engaging.",
            es: "Animé las composiciones siguiendo el ritmo de la narración, usando el movimiento para aclarar relaciones entre ideas y mantener la pieza visualmente atrapante.",
          },
        },
      ],
    },
    {
      kind: "closing",
      title: {
        en: "A style outside my comfort zone",
        es: "Un estilo fuera de mi zona de confort",
      },
      body: {
        en: "I wanted this project to look very different from the work I had done before. The collage approach allowed me to create something more experimental, expressive and conceptually charged. Combining classical imagery with a digital vector language helped the video stay connected to the philosophical origin of the text while still feeling visually contemporary.",
        es: "Quería que este proyecto se viera muy distinto de lo que había hecho antes. El enfoque de collage me permitió crear algo más experimental, expresivo y cargado conceptualmente. La mezcla de imaginería clásica con lenguaje vectorial digital ayudó a que el video se mantuviera conectado al origen filosófico del texto sin dejar de sentirse visualmente contemporáneo.",
      },
    },
  ],
  neighbours: {
    prev: {
      name: "Valorant Champions",
      slug: "valorant-champions",
      kind: {
        en: "Motion · Broadcast Identity",
        es: "Motion · Identidad de broadcast",
      },
    },
    next: {
      name: "Arathe",
      slug: "arathe",
      kind: {
        en: "Accessibility · Physical computing",
        es: "Accesibilidad · Computación física",
      },
    },
  },
};