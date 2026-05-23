import type { CaseData } from "./types";
import pvCover from "@/assets/cases/portfolio-video/cover.webp";
import pv1 from "@/assets/cases/portfolio-video/1.webp";
import pv2 from "@/assets/cases/portfolio-video/2.webp";
import pv3 from "@/assets/cases/portfolio-video/3.webp";
import pv4 from "@/assets/cases/portfolio-video/4.webp";
import pv5 from "@/assets/cases/portfolio-video/5.webp";
import pv6 from "@/assets/cases/portfolio-video/6.webp";

export const PORTFOLIO_VIDEO_CASE: CaseData = {
  slug: "portfolio-video",
  name: "Portfolio Video",
  tagline: {
    en: "An AI-assisted audiovisual piece that introduces my portfolio and translates my design identity into motion.",
    es: "Una pieza audiovisual asistida por IA que presenta mi portfolio y traduce mi identidad como diseñadora al movimiento.",
  },
  cover: {
    kind: "placeholder",
    label: {
      en: "01 - cover : portfolio video still / falling silhouette / 21:9",
      es: "01 - portada : still del video de portfolio / silueta cayendo / 21:9",
    },
    tone: "paper",
    src: pvCover,
    alt: {
      en: "Portfolio video - falling silhouette still",
      es: "Video de portfolio - still de silueta cayendo",
    },
  },
  meta: {
    role: {
      en: "Concept · Art Direction · AI-assisted Video Creation · Motion Editing",
      es: "Concepto · Dirección de arte · Creación de video asistida por IA · Edición de motion",
    },
    period: "2026",
    duration: { en: "Final portfolio project", es: "Proyecto final de portfolio" },
    tools: [
      "Figma",
      "After Effects",
      "Procreate",
      "Seedream 5",
      "Veo 3",
      "Kling 3",
      "Suno",
      "Lyria",
      "Invideo",
      "Pinterest references",
    ],
    tags: [
      { en: "portfolio", es: "portfolio" },
      { en: "art direction", es: "dirección de arte" },
      { en: "AI video", es: "video con IA" },
      { en: "motion design", es: "motion design" },
      { en: "visual storytelling", es: "narrativa visual" },
      { en: "process", es: "proceso" },
    ],
    links: [
      {
        label: { en: "Portfolio website", es: "Sitio del portfolio" },
        href: "https://sofia-rey-portfolio.vercel.app/",
      },
    ],
    readingTime: { en: "5 min read", es: "5 min de lectura" },
  },
  intro: {
    context: {
      en: "This video was created as the audiovisual piece that accompanies my final portfolio website. It introduces the same concept as the web: my identity as a designer is shaped by the processes, interests and ideas I have moved through.",
      es: "Este video fue creado como la pieza audiovisual que acompaña mi sitio de portfolio final. Presenta el mismo concepto que la web: mi identidad como diseñadora está moldeada por los procesos, intereses e ideas que he atravesado.",
    },
    problem: {
      en: "I wanted to create a piece that felt personal, delicate and emotional, while also working as a visual element within the website’s scrolling experience. The challenge was to use AI-generated video without losing authorship, intention or control over the final result.",
      es: "Quería crear una pieza que se sintiera personal, delicada y emotiva, y que a la vez funcionara como elemento visual dentro de la experiencia de scroll del sitio. El desafío era usar video generado por IA sin perder autoría, intención ni control sobre el resultado final.",
    },
    goal: {
      en: "Create a short portfolio video that could communicate my concept, represent my internal creative process and visually connect with the website experience.",
      es: "Crear un video corto de portfolio que pudiera comunicar mi concepto, representar mi proceso creativo interno y conectar visualmente con la experiencia de la web.",
    },
    role: {
      en: "I developed the concept, wrote the visual script, designed the character and visual system, generated and curated AI video outputs, corrected frames manually in Procreate, edited the final piece in After Effects and directed the music using AI tools.",
      es: "Desarrollé el concepto, escribí el guion visual, diseñé el personaje y el sistema visual, generé y curé los resultados de video con IA, corregí frames manualmente en Procreate, edité la pieza final en After Effects y dirigí la música usando herramientas de IA.",
    },
  },
  body: [
    {
      kind: "highlight",
      text: {
        en: "AI did not create the concept. It became one of the tools I used to reach a visual result I could not have produced alone within the available time, budget and technical constraints.",
        es: "La IA no creó el concepto. Fue una de las herramientas que usé para llegar a un resultado visual que no habría podido producir sola con el tiempo, presupuesto y recursos técnicos disponibles.",
      },
    },
    {
      kind: "videoblock",
      title: { en: "Touching the Process", es: "Touching the Process" },
      video: {
        youtubeId: "hEbSAWX2LHk",
        poster: {
          kind: "placeholder",
          label: {
            en: "Portfolio video poster",
            es: "Portada del video de portfolio",
          },
          tone: "paper",
        },
      },
      caption: {
        en: "A short audiovisual piece that introduces the concept behind my portfolio: moving through ideas, processes and shared paths without crashing into the unknown.",
        es: "Una pieza audiovisual breve que presenta el concepto detrás de mi portfolio: atravesar ideas, procesos y caminos compartidos sin estrellarse contra lo desconocido.",
      },
    },
    {
      kind: "longtext",
      title: {
        en: "From concept to visual metaphor",
        es: "Del concepto a la metáfora visual",
      },
      paragraphs: [
        {
          en: "The starting point was not technical. Before opening any tool, I needed to understand what I wanted to say. My portfolio is built around the idea that every process I have gone through - design, programming, teaching, movement, music, science and collaboration - has shaped the way I work and see the world.",
          es: "El punto de partida no fue técnico. Antes de abrir cualquier herramienta, necesitaba entender qué quería decir. Mi portfolio se construye alrededor de la idea de que cada proceso que atravesé - diseño, programación, docencia, movimiento, música, ciencia y colaboración - moldeó mi forma de trabajar y de ver el mundo.",
        },
        {
          en: "I translated that idea into a simple visual script: I climb onto an idea, move through it, let myself fall into the unknown and learn to navigate that fall. Sometimes the process is solitary, sometimes it is shared. What matters is that I do not crash. I land with delicacy.",
          es: "Traduje esa idea en un guion visual simple: me subo a una idea, la recorro, me dejo caer hacia lo desconocido y aprendo a navegar esa caída. A veces el proceso es solitario, a veces es compartido. Lo importante es que no me estrello: aterrizo con delicadeza.",
        },
        {
          en: "This falling movement also made sense for the website. Since the landing page is experienced by scrolling down, the video could become part of that vertical journey, connecting the audiovisual piece with the interaction of the web itself.",
          es: "Ese movimiento de caída también tenía sentido para el sitio. Como la landing se recorre haciendo scroll hacia abajo, el video podía integrarse a ese viaje vertical y conectar la pieza audiovisual con la propia interacción de la web.",
        },
      ],
    },
    {
      kind: "sideimage",
      orientation: "image-right",
      title: { en: "Designing the character", es: "Diseñar el personaje" },
      body: {
        en: "I wanted the character to feel light, graceful and delicate, almost like a small visual representation of myself moving through the process. Since illustration is not my strongest skill, I gathered anatomical references from Pinterest, imported them and drew over them until I found a silhouette and gesture that felt right. The final style had to be simple enough to work with AI video generation, but expressive enough to feel personal.",
        es: "Quería que el personaje se sintiera ligero, grácil y delicado, casi como una pequeña representación visual de mí misma moviéndome por el proceso. Como la ilustración no es mi mayor fortaleza, reuní referencias anatómicas de Pinterest, las importé y dibujé sobre ellas hasta encontrar una silueta y un gesto que se sintieran correctos. El estilo final debía ser lo bastante simple para funcionar con generación de video por IA, pero lo bastante expresivo para sentirse personal.",
      },
      image: {
        kind: "placeholder",
        label: {
          en: "02 - character sketches / silhouette exploration",
          es: "02 - bocetos del personaje / exploración de silueta",
        },
        tone: "bone",
        src: pv1,
        alt: {
          en: "Character sketches and silhouette exploration",
          es: "Bocetos del personaje y exploración de silueta",
        },
      },
      caption: {
        en: "The character was designed through reference, tracing, simplification and iteration.",
        es: "El personaje se diseñó a partir de referencias, calco, simplificación e iteración.",
      },
    },
    {
      kind: "decisions",
      title: { en: "Visual decisions", es: "Decisiones visuales" },
      items: [
        {
          n: "01",
          title: {
            en: "Ideas as tangled scribbles",
            es: "Las ideas como garabatos enredados",
          },
          body: {
            en: "Ideas were represented as messy scribbled spheres: dense, tangled and organic, like thoughts that are not fully clear yet but still carry potential.",
            es: "Las ideas se representaron como esferas garabateadas y desordenadas: densas, enredadas y orgánicas, como pensamientos que todavía no están del todo claros pero ya contienen potencial.",
          },
        },
        {
          n: "02",
          title: {
            en: "Black and white restraint",
            es: "Contención en blanco y negro",
          },
          body: {
            en: "The visual system stayed mostly black and white so it would not compete with the process videos and project visuals that appear throughout the portfolio.",
            es: "El sistema visual se mantuvo mayormente en blanco y negro para no competir con los videos de proceso ni con los visuales de los proyectos que aparecen a lo largo del portfolio.",
          },
        },
        {
          n: "03",
          title: {
            en: "Air as part of the composition",
            es: "El aire como parte de la composición",
          },
          body: {
            en: "A major challenge was allowing enough negative space. The video needed to remain central, while the text and website layout had to support it without overwhelming the frame.",
            es: "Un desafío importante fue dejar suficiente espacio en negativo. El video tenía que mantenerse como centro, mientras que el texto y el layout de la web debían acompañarlo sin saturar el cuadro.",
          },
        },
      ],
    },
    {
      kind: "gallery3",
      images: [
        {
          kind: "placeholder",
          label: {
            en: "03 - Figma layout / text alignment tests",
            es: "03 - layout en Figma / pruebas de alineación de texto",
          },
          tone: "paper",
          src: pv2,
          alt: {
            en: "Figma layout and text alignment tests",
            es: "Layout en Figma y pruebas de alineación de texto",
          },
        },
        {
          kind: "placeholder",
          label: {
            en: "04 - first and last frames drawn by hand",
            es: "04 - primer y último frame dibujados a mano",
          },
          tone: "bone",
          src: pv3,
          alt: {
            en: "First and last frames drawn by hand",
            es: "Primer y último frame dibujados a mano",
          },
        },
        {
          kind: "placeholder",
          label: {
            en: "05 - tangled idea spheres / visual reference",
            es: "05 - esferas de ideas enredadas / referencia visual",
          },
          tone: "dark",
          src: pv4,
          alt: {
            en: "Tangled idea spheres - visual reference",
            es: "Esferas de ideas enredadas - referencia visual",
          },
        },
      ],
      caption: {
        en: "Before generating motion, I designed the visual system, composition and key frames by hand.",
        es: "Antes de generar movimiento, diseñé a mano el sistema visual, la composición y los frames clave.",
      },
    },
    {
      kind: "steps",
      title: { en: "Production process", es: "Proceso de producción" },
      items: [
        {
          date: "01",
          title: { en: "Concept and script", es: "Concepto y guion" },
          body: {
            en: "I defined the message of the piece and translated it into a visual journey: climbing onto an idea, travelling through it, falling, navigating uncertainty and landing softly.",
            es: "Definí el mensaje de la pieza y lo traduje en un recorrido visual: subirme a una idea, atravesarla, caer, navegar la incertidumbre y aterrizar con suavidad.",
          },
        },
        {
          date: "02",
          title: { en: "Visual system", es: "Sistema visual" },
          body: {
            en: "I designed the character, the scribbled idea spheres and the black-and-white composition in Figma, thinking about how the video would live inside the website.",
            es: "Diseñé el personaje, las esferas de ideas garabateadas y la composición en blanco y negro en Figma, pensando en cómo viviría el video dentro de la web.",
          },
        },
        {
          date: "03",
          title: { en: "Key frames by hand", es: "Frames clave a mano" },
          body: {
            en: "After several AI image models failed to understand the exact style I wanted, I decided to draw the first and last frame of each video section myself.",
            es: "Después de que varios modelos de imagen por IA no lograran entender el estilo exacto que buscaba, decidí dibujar yo misma el primer y último frame de cada sección del video.",
          },
        },
        {
          date: "04",
          title: { en: "AI video generation", es: "Generación de video con IA" },
          body: {
            en: "I tested Seedream 5, Veo 3 and Kling 3 to generate the transitions between key frames. Seedream produced the strongest results, so I generated several versions and quickly tested how they connected.",
            es: "Probé Seedream 5, Veo 3 y Kling 3 para generar las transiciones entre frames clave. Seedream fue el que dio mejores resultados, así que generé varias versiones y probé rápidamente cómo conectaban entre sí.",
          },
        },
        {
          date: "05",
          title: { en: "Frame-by-frame repair", es: "Reparación frame a frame" },
          body: {
            en: "I exported parts of the video as image sequences, brought them into Procreate and manually erased AI artefacts such as extra arms, distorted bodies and broken silhouettes.",
            es: "Exporté partes del video como secuencias de imágenes, las llevé a Procreate y borré manualmente artefactos de la IA como brazos de más, cuerpos distorsionados y siluetas rotas.",
          },
        },
        {
          date: "06",
          title: { en: "Final edit", es: "Edición final" },
          body: {
            en: "I assembled the piece in After Effects, adjusted curves and zooms, integrated process videos, added motion blur, used a 3D camera for depth, generated additional thought spheres and applied final noise, blur and polish.",
            es: "Armé la pieza en After Effects, ajusté curvas y zooms, integré videos de proceso, agregué motion blur, usé cámara 3D para dar profundidad, generé esferas de pensamiento adicionales y apliqué ruido, desenfoque y pulido final.",
          },
        },
      ],
    },
    {
      kind: "sideimage",
      orientation: "image-left",
      title: { en: "Directing the music", es: "Dirigir la música" },
      body: {
        en: "The music needed to feel whimsical, delicate and adventurous without becoming too mysterious or dramatic. I first tried generating it with Lyria, but the results did not match the tone I had in mind. I then moved to Suno and iterated through a detailed prompt describing tempo, instrumentation, emotional progression and the exact shift I needed around the moment where the character falls.",
        es: "La música tenía que sentirse fantasiosa, delicada y aventurera, sin volverse demasiado misteriosa ni dramática. Primero intenté generarla con Lyria, pero los resultados no encajaban con el tono que tenía en mente. Después pasé a Suno e iteré con un prompt detallado que describía el tempo, la instrumentación, la progresión emocional y el cambio exacto que necesitaba en el momento en que el personaje cae.",
      },
      image: {
        kind: "placeholder",
        label: {
          en: "06 - music prompt / audio timeline",
          es: "06 - prompt de música / línea de tiempo de audio",
        },
        tone: "dark",
        src: pv5,
        alt: {
          en: "Music prompt and audio timeline",
          es: "Prompt de música y línea de tiempo de audio",
        },
      },
      caption: {
        en: "The final soundtrack was AI-generated, but carefully directed through mood, timing, instrumentation and structure.",
        es: "La banda sonora final fue generada por IA, pero dirigida cuidadosamente a partir del clima, el ritmo, la instrumentación y la estructura.",
      },
    },
    {
      kind: "highlight",
      text: {
        en: "I wanted the piece to feel like falling into the unknown without fear - not crashing, but landing softly.",
        es: "Quería que la pieza se sintiera como caer hacia lo desconocido sin miedo: no estrellarse, sino aterrizar con suavidad.",
      },
    },
    {
      kind: "longtext",
      title: {
        en: "AI as a careful production tool",
        es: "La IA como herramienta de producción cuidada",
      },
      paragraphs: [
        {
          en: "This was the first time I worked with this kind of AI-assisted audiovisual workflow. The process was slow, experimental and often frustrating. The models did not always understand the style, the anatomy or the continuity I needed, and many outputs were unusable without manual intervention.",
          es: "Fue la primera vez que trabajé con este tipo de flujo audiovisual asistido por IA. El proceso fue lento, experimental y muchas veces frustrante. Los modelos no siempre entendían el estilo, la anatomía o la continuidad que necesitaba, y muchos resultados eran inutilizables sin intervención manual.",
        },
        {
          en: "Still, AI gave me access to visual resources that would have been very difficult to produce otherwise. I used it with caution, curating outputs, rejecting what did not match the concept and repairing the parts that broke the visual language.",
          es: "Aun así, la IA me dio acceso a recursos visuales que habrían sido muy difíciles de producir de otra manera. La usé con cuidado: curando resultados, descartando lo que no encajaba con el concepto y reparando las partes que rompían el lenguaje visual.",
        },
        {
          en: "The final result feels meaningful to me because it is not only a video about my process - it is also a product of that process. It required concept, direction, patience, iteration, technical learning and manual care.",
          es: "El resultado final tiene sentido para mí porque no es solo un video sobre mi proceso: también es producto de ese proceso. Requirió concepto, dirección, paciencia, iteración, aprendizaje técnico y cuidado manual.",
        },
      ],
    },
    {
      kind: "image",
      ratio: "20/9",
      image: {
        kind: "placeholder",
        label: {
          en: "07 - portfolio video - closing visual",
          es: "07 - video de portfolio - visual de cierre",
        },
        tone: "paper",
        src: pv6,
        alt: {
          en: "Portfolio video - closing visual",
          es: "Video de portfolio - visual de cierre",
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
          en: "AI can accelerate production, but it does not replace concept, art direction or visual judgement.",
          es: "La IA puede acelerar la producción, pero no reemplaza el concepto, la dirección de arte ni el criterio visual.",
        },
        {
          en: "The strongest results came when I stopped expecting the tools to solve everything and started using them as part of a controlled pipeline.",
          es: "Los mejores resultados aparecieron cuando dejé de esperar que las herramientas resolvieran todo y empecé a usarlas como parte de un pipeline controlado.",
        },
        {
          en: "Drawing the key frames myself gave the AI clearer constraints and helped me preserve authorship over the visual language.",
          es: "Dibujar yo misma los frames clave le dio a la IA restricciones más claras y me ayudó a preservar la autoría sobre el lenguaje visual.",
        },
        {
          en: "Manual correction was essential. The final piece only worked after frame-by-frame cleanup, traditional editing and motion design decisions.",
          es: "La corrección manual fue esencial. La pieza final solo funcionó después de la limpieza frame a frame, la edición tradicional y las decisiones de motion design.",
        },
        {
          en: "A personal portfolio piece can be both strategic and emotional. This video represents me because the process behind it also represents how I work.",
          es: "Una pieza personal de portfolio puede ser estratégica y emotiva a la vez. Este video me representa porque el proceso detrás también representa cómo trabajo.",
        },
      ],
    },
    {
      kind: "closing",
      title: {
        en: "A video about process, made through process",
        es: "Un video sobre el proceso, hecho a través del proceso",
      },
      body: {
        en: "This piece became more than a teaser for my portfolio. It became a small reflection of my way of designing: starting from an idea, moving through uncertainty, using the tools that make sense, asking technology for help without giving up authorship, and taking care of the details until the result feels honest.",
        es: "Esta pieza se volvió más que un teaser de mi portfolio. Se volvió un pequeño reflejo de mi forma de diseñar: partir de una idea, atravesar la incertidumbre, usar las herramientas que tienen sentido, pedirle ayuda a la tecnología sin renunciar a la autoría y cuidar los detalles hasta que el resultado se sienta honesto.",
      },
    },
  ],
  neighbours: {
    prev: {
      name: "Arathe",
      slug: "arathe",
      kind: {
        en: "Accessibility · Physical computing",
        es: "Accesibilidad · Computación física",
      },
    },
    next: {
      name: "Organigram Rebrand",
      slug: "organigram-rebrand",
      kind: { en: "Branding · Visual identity", es: "Branding · Identidad visual" },
    },
  },
};
