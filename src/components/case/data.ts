import type { CaseData } from "./types";
import aratheLogo from "@/assets/cases/arathe/logo-arathe.png";
import aratheCover from "@/assets/cases/arathe/cover.webp";
import img1 from "@/assets/cases/arathe/1.webp";
import img2 from "@/assets/cases/arathe/2.webp";
import img3 from "@/assets/cases/arathe/3.webp";
import img4 from "@/assets/cases/arathe/4.webp";
import img5 from "@/assets/cases/arathe/5.webp";
import img6 from "@/assets/cases/arathe/6.webp";
import img7 from "@/assets/cases/arathe/7.webp";
import img8 from "@/assets/cases/arathe/8.webp";
import img9 from "@/assets/cases/arathe/9.webp";
import img10 from "@/assets/cases/arathe/10.webp";
import img11 from "@/assets/cases/arathe/11.webp";
import img12 from "@/assets/cases/arathe/12.webp";
import img13 from "@/assets/cases/arathe/13.webp";
import img14 from "@/assets/cases/arathe/14.webp";
import img15 from "@/assets/cases/arathe/15.webp";
import img16 from "@/assets/cases/arathe/16.webp";
import img17 from "@/assets/cases/arathe/17.webp";

export const ARATHE_CASE: CaseData = {
  slug: "arathe",
  name: "Arathe",
  tagline: {
    en: "A multisensory astronomy experience designed to make the sky accessible through touch, sound and vibration.",
    es: "Una experiencia astronómica multisensorial diseñada para hacer el cielo accesible a través del tacto, el sonido y la vibración.",
  },
  logo: {
    src: aratheLogo,
    alt: "Arathe",
    maxHeight: 220,
  },
  cover: {
    kind: "placeholder",
    label: {
      en: "Arathe cover",
      es: "Portada de Arathe",
    },
    tone: "dark",
    src: aratheCover,
    alt: {
      en: "Arathe — multisensory astronomy experience",
      es: "Arathe — experiencia astronómica multisensorial",
    },
  },
  meta: {
    role: {
      en: "Technology Lead · Multimedia Designer · Interactive Experience Designer",
      es: "Lead técnica · Diseñadora multimedia · Diseñadora de experiencias interactivas",
    },
    period: "2025 - 2026",
    duration: {
      en: "Final degree project, ongoing initiative",
      es: "Proyecto final de carrera, iniciativa en curso",
    },
    team: ["Sofía Rey", "Lucía Martínez", "Emiliana Abbate"],
    tools: [
      "Raspberry Pi",
      "Python",
      "Framer",
      "Rive",
      "Audacity",
      "Figma",
      "Physical computing",
    ],
    tags: [
      { en: "accessibility",           es: "accesibilidad" },
      { en: "astronomy",               es: "astronomía" },
      { en: "physical computing",      es: "computación física" },
      { en: "interactive installation", es: "instalación interactiva" },
      { en: "sound design",            es: "diseño sonoro" },
      { en: "education",               es: "educación" },
    ],
    links: [
      {
        label: { en: "Arathe website", es: "Sitio web de Arathe" },
        href: "https://www.arathe.com.uy",
      },
      {
        label: { en: "Interactive Kepler blog", es: "Blog interactivo de Kepler" },
        href: "https://www.arathe.com.uy/blog/kepler",
      },
    ],
    readingTime: { en: "8 min read", es: "8 min de lectura" },
  },
  intro: {
    context: {
      en: "Arathe began as my final degree project in Multimedia Design at Universidad ORT, in collaboration with the Planetarium of Montevideo. The project emerged from a shared interest in making astronomy more accessible to blind and low-vision visitors.",
      es: "Arathe nació como mi proyecto final de carrera en Diseño Multimedia en la Universidad ORT, en colaboración con el Planetario de Montevideo. El proyecto surgió de un interés compartido por hacer la astronomía más accesible para visitantes ciegos y con baja visión.",
    },
    problem: {
      en: "Astronomy is usually communicated through images, projections and visual references. The challenge was to design an experience where sight was no longer the centre, and where touch, sound, vibration and spatial orientation could become the main ways of understanding the sky.",
      es: "La astronomía suele comunicarse a través de imágenes, proyecciones y referencias visuales. El desafío fue diseñar una experiencia en la que la vista dejara de ser el centro y donde el tacto, el sonido, la vibración y la orientación espacial pasaran a ser las formas principales de entender el cielo.",
    },
    goal: {
      en: "Create an interactive, multisensory astronomy experience centred on blind and low-vision audiences, while also expanding the Planetarium’s cultural and educational offer for all visitors.",
      es: "Crear una experiencia astronómica interactiva y multisensorial centrada en públicos ciegos y con baja visión, ampliando a la vez la oferta cultural y educativa del Planetario para todos los visitantes.",
    },
    role: {
      en: "I led the interactive technology of the tactile dome, developed the Raspberry Pi and Python system, documented the electronics, contributed to the accessible audio narratives and built the first interactive blog article using Framer and Rive.",
      es: "Lideré la tecnología interactiva de la cúpula táctil, desarrollé el sistema sobre Raspberry Pi y Python, documenté la electrónica, colaboré en las narrativas sonoras accesibles y construí el primer artículo de blog interactivo con Framer y Rive.",
    },
  },
  body: [
    {
      kind: "videoblock",
      title: { en: "Arathe case video", es: "Video del caso Arathe" },
      video: {
        youtubeId: "38prjwW5D9w",
        poster: {
          kind: "placeholder",
          label: {
            en: "Arathe case video poster",
            es: "Portada del video del caso Arathe",
          },
          tone: "dark",
        },
      },
      caption: {
        en: "A short introduction to Arathe: a multisensory astronomy experience that invites people to explore the sky through touch, sound and vibration.",
        es: "Una breve introducción a Arathe: una experiencia astronómica multisensorial que invita a explorar el cielo a través del tacto, el sonido y la vibración.",
      },
    },
    {
      kind: "highlight",
      text: {
        en: "Arathe is not about adapting astronomy after the fact. It is about designing an astronomical experience from other senses from the very beginning.",
        es: "Arathe no se trata de adaptar la astronomía después. Se trata de diseñar una experiencia astronómica desde otros sentidos desde el inicio.",
      },
    },
    {
      kind: "fullimage",
      image: {
        kind: "placeholder",
        label: {
          en: "Dome being used by a low vision visitor",
          es: "Cúpula siendo utilizada por una visitante con baja visión",
        },
        tone: "bone",
        src: img1,
        alt: {
          en: "Dome being used by a low vision visitor",
          es: "Cúpula siendo utilizada por una visitante con baja visión",
        },
      },
    },
    {
      kind: "longtext",
      title: {
        en: "An accessible way to experience the sky",
        es: "Una forma accesible de experimentar el cielo",
      },
      paragraphs: [
        {
          en: "Arathe is a multisensory astronomy experience that invites people to explore constellations through touch, sound, vibration and storytelling. The project moves astronomy beyond the purely visual and asks what it means to design for people who experience the world through different senses.",
          es: "Arathe es una experiencia astronómica multisensorial que invita a explorar las constelaciones a través del tacto, el sonido, la vibración y el relato. El proyecto lleva la astronomía más allá de lo puramente visual y se pregunta qué significa diseñar para personas que experimentan el mundo desde otros sentidos.",
        },
        {
          en: "The core piece is an interactive tactile dome. A visitor sits inside the structure, explores constellations in relief with their hands and receives audio and haptic feedback when touching different regions of the sky. Although the experience was designed primarily for blind and low-vision visitors, it also invites sighted audiences to close their eyes and discover the sky differently.",
          es: "La pieza central es una cúpula táctil interactiva. La persona se sienta dentro de la estructura, explora con las manos las constelaciones en relieve y recibe respuesta sonora y háptica al tocar distintas regiones del cielo. Aunque la experiencia se diseñó principalmente para visitantes ciegos y con baja visión, también invita a quienes ven a cerrar los ojos y descubrir el cielo de otra forma.",
        },
      ],
    },
    {
      kind: "decisions",
      title: { en: "Key design decisions", es: "Decisiones de diseño clave" },
      items: [
        {
          n: "01",
          title: {
            en: "Designing from accessibility",
            es: "Diseñar desde la accesibilidad",
          },
          body: {
            en: "Accessibility was treated as the starting point of the experience, not as an adaptation added later. Touch, sound, vibration and spatial orientation became the main design materials.",
            es: "La accesibilidad fue el punto de partida de la experiencia, no una adaptación añadida después. El tacto, el sonido, la vibración y la orientación espacial se volvieron los principales materiales de diseño.",
          },
        },
        {
          n: "02",
          title: {
            en: "Keeping the interaction simple",
            es: "Mantener la interacción simple",
          },
          body: {
            en: "The technology behind the dome is complex, but the visitor experience had to remain intuitive: sit inside, touch a constellation, listen, feel and continue exploring.",
            es: "La tecnología detrás de la cúpula es compleja, pero la experiencia del visitante debía mantenerse intuitiva: sentarse dentro, tocar una constelación, escuchar, sentir y seguir explorando.",
          },
        },
        {
          n: "03",
          title: {
            en: "Designing for future maintenance",
            es: "Diseñar para el mantenimiento futuro",
          },
          body: {
            en: "The system was documented and structured so future teams could update audio content, understand the electronics and maintain the installation without depending on the original developers.",
            es: "El sistema se documentó y estructuró para que futuros equipos pudieran actualizar el contenido sonoro, entender la electrónica y mantener la instalación sin depender de quienes la desarrollamos originalmente.",
          },
        },
      ],
    },
    {
      kind: "sideimage",
      orientation: "image-right",
      title: { en: "The interactive system", es: "El sistema interactivo" },
      body: {
        en: "The dome runs on a Raspberry Pi that reads ten photoelectric sensors, controls ten vibration motors, handles a physical start/reset button, updates an LED status indicator and plays the corresponding audio. Each constellation is mapped to a sensor, an audio file and a haptic response, creating a direct relationship between touch and feedback.",
        es: "La cúpula funciona con una Raspberry Pi que lee diez sensores fotoeléctricos, controla diez motores de vibración, gestiona un botón físico de inicio y reinicio, actualiza un indicador LED de estado y reproduce el audio correspondiente. Cada constelación está asociada a un sensor, un archivo de audio y una respuesta háptica, creando una relación directa entre el tacto y la respuesta.",
      },
      image: {
        kind: "placeholder",
        label: {
          en: "ELECTRONIC COMPONENTS DISPLAYED ON THE DOME",
          es: "COMPONENTES ELECTRÓNICOS DISPUESTOS EN LA CÚPULA",
        },
        tone: "bone",
        src: img2,
        alt: {
          en: "Electronic components displayed on the dome",
          es: "Componentes electrónicos dispuestos en la cúpula",
        },
      },
      caption: {
        en: "The system connects tactile exploration with audio and haptic feedback.",
        es: "El sistema conecta la exploración táctil con la respuesta sonora y háptica.",
      },
    },
    {
      kind: "steps",
      title: { en: "Interaction flow", es: "Flujo de interacción" },
      items: [
        {
          date: "01",
          title: { en: "Standby", es: "En espera" },
          body: {
            en: "The dome waits in an idle state while the LED uses a breathing pattern to indicate that the system is ready.",
            es: "La cúpula permanece en reposo mientras el LED usa un patrón de respiración para indicar que el sistema está listo.",
          },
        },
        {
          date: "02",
          title: { en: "Intro", es: "Introducción" },
          body: {
            en: "A short press on the physical button starts the introductory audio and prepares the visitor for the experience.",
            es: "Una pulsación corta del botón físico inicia el audio de introducción y prepara a la persona para la experiencia.",
          },
        },
        {
          date: "03",
          title: { en: "Exploration", es: "Exploración" },
          body: {
            en: "The visitor explores the constellations in relief. When a sensor confirms interaction, the corresponding audio plays and the associated vibration motor turns on.",
            es: "La persona explora las constelaciones en relieve. Cuando un sensor confirma la interacción, suena el audio correspondiente y se activa el motor de vibración asociado.",
          },
        },
        {
          date: "04",
          title: { en: "Reset", es: "Reinicio" },
          body: {
            en: "A long press stops the audio, turns off the motors and returns the system to standby.",
            es: "Una pulsación larga detiene el audio, apaga los motores y devuelve el sistema al estado de espera.",
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
            en: "Sensor testing / hardware detail",
            es: "Pruebas de sensores / detalle de hardware",
          },
          tone: "paper",
          src: img3,
          alt: {
            en: "Sensor testing and hardware detail",
            es: "Pruebas de sensores y detalle de hardware",
          },
        },
        {
          kind: "placeholder",
          label: {
            en: "Wiring process / cables and components",
            es: "Proceso de cableado / cables y componentes",
          },
          tone: "bone",
          src: img4,
          alt: {
            en: "Wiring process — cables and components",
            es: "Proceso de cableado — cables y componentes",
          },
        },
        {
          kind: "placeholder",
          label: {
            en: "Electronics mounted on the dome",
            es: "Electrónica montada en la cúpula",
          },
          tone: "dark",
          src: img5,
          alt: {
            en: "Electronics mounted on the dome",
            es: "Electrónica montada en la cúpula",
          },
        },
      ],
      caption: {
        en: "The process moved constantly between code, electronics and the physical object.",
        es: "El proceso se movió constantemente entre código, electrónica y objeto físico.",
      },
    },
    {
      kind: "highlight",
      text: {
        en: "Learning should not depend on a single sense. Sometimes listening is not an alternative - it is an advantage.",
        es: "Aprender no debería depender de un solo sentido. A veces escuchar no es una alternativa: es una ventaja.",
      },
    },
    {
      kind: "image",
      ratio: "32/9",
      image: {
        kind: "placeholder",
        label: {
          en: "Audio recording session at a university studio.",
          es: "Sesión de grabación de audio en un estudio universitario.",
        },
        tone: "paper",
        src: img6,
        alt: {
          en: "Audio recording session at a university studio",
          es: "Sesión de grabación de audio en un estudio universitario",
        },
      },
    },
    {
      kind: "longtext",
      title: {
        en: "Writing for touch and listening",
        es: "Escribir para el tacto y la escucha",
      },
      paragraphs: [
        {
          en: "The audio layer was not just an explanation added to the dome. It was part of the interaction itself. Each constellation needed a script that could guide a person through tactile exploration while also introducing astronomical and mythological context.",
          es: "La capa sonora no fue una explicación añadida a la cúpula. Era parte de la interacción en sí. Cada constelación necesitaba un guion que acompañara la exploración táctil y, al mismo tiempo, introdujera contexto astronómico y mitológico.",
        },
        {
          en: "Writing these scripts required thinking from the perspective of someone who might never have seen a constellation, a diagram or the visual shape of the sky. Directions, metaphors, rhythm and spatial references had to be tested and rewritten until they made sense through touch and listening.",
          es: "Escribir estos guiones implicó pensar desde la perspectiva de alguien que tal vez nunca haya visto una constelación, un diagrama o la forma visual del cielo. Direcciones, metáforas, ritmo y referencias espaciales debían probarse y reescribirse hasta tener sentido a través del tacto y la escucha.",
        },
        {
          en: "I worked directly on the physical dome to adjust the scripts, recorded temporary versions, tested them with a blind user and iterated based on real feedback.",
          es: "Trabajé directamente sobre la cúpula física para ajustar los guiones, grabé versiones provisionales, las probé con un usuario ciego e iteré a partir de la retroalimentación real.",
        },
      ],
    },
    {
      kind: "sideimage",
      orientation: "image-left",
      title: { en: "Documenting for handoff", es: "Documentar para el traspaso" },
      body: {
        en: "Because Arathe was designed to keep growing beyond the academic context, I created a technical manual for the interactive dome. The manual documents the hardware architecture, wiring diagrams, software structure, operating states, diagnostic modes, audio synchronisation and Raspberry Pi access. This made documentation part of the product: the installation had to be transferable, not just functional.",
        es: "Como Arathe estaba pensado para seguir creciendo más allá del contexto académico, creé un manual técnico para la cúpula interactiva. El manual documenta la arquitectura de hardware, los diagramas de cableado, la estructura de software, los estados de operación, los modos de diagnóstico, la sincronización de audio y el acceso a la Raspberry Pi. Así, la documentación pasó a ser parte del producto: la instalación tenía que poder transferirse, no solo funcionar.",
      },
      image: {
        kind: "placeholder",
        label: {
          en: "Technical manual cover / manual spread",
          es: "Portada del manual técnico / doble página del manual",
        },
        tone: "dark",
        src: img7,
        alt: {
          en: "Technical manual cover and spread",
          es: "Portada y doble página del manual técnico",
        },
      },
      caption: {
        en: "The manual was designed for technicians, educators, museum teams and exhibition staff.",
        es: "El manual se diseñó para técnicos, educadores, equipos de museo y personal de exhibición.",
      },
    },
    {
      kind: "longtext",
      title: {
        en: "Extending the experience through an interactive blog",
        es: "Extender la experiencia con un blog interactivo",
      },
      paragraphs: [
        {
          en: "Arathe also extends beyond the physical dome through an interactive educational blog. The first article, focused on Kepler’s Laws, was built in Framer with Rive animations and uses scrollytelling, motion graphics, interactive sections and narrated audio to explain astronomical concepts in a more accessible and engaging way.",
          es: "Arathe también se extiende más allá de la cúpula física a través de un blog educativo interactivo. El primer artículo, dedicado a las Leyes de Kepler, se construyó en Framer con animaciones de Rive y combina scrollytelling, motion graphics, secciones interactivas y audio narrado para explicar conceptos astronómicos de forma más accesible y atractiva.",
        },
      ],
    },
    {
      kind: "fullimage",
      image: {
        kind: "placeholder",
        label: {
          en: "Screen recording of the interactive blog.",
          es: "Captura de pantalla del blog interactivo.",
        },
        tone: "bone",
        src: img8,
        alt: {
          en: "Screen recording of the interactive blog",
          es: "Captura de pantalla del blog interactivo",
        },
      },
    },
    {
      kind: "tools",
      title: { en: "Press & media", es: "Prensa y medios" },
      items: [
        {
          name: "Subrayado",
          note: {
            en: "TV news feature · Uruguay",
            es: "Cobertura informativa TV · Uruguay",
          },
          href: "https://www.instagram.com/reel/DWKdy93jiey/",
        },
        {
          name: "8AM",
          note: {
            en: "Morning TV show · Uruguay",
            es: "Programa matutino TV · Uruguay",
          },
          href: "https://www.instagram.com/reel/DWOjevIjYPc/",
        },
        {
          name: "La diaria",
          note: {
            en: "Feature article · Uruguay",
            es: "Reportaje · Uruguay",
          },
          href: "https://ladiaria.com.uy/futuro/articulo/2026/3/estudiantes-uruguayas-crean-cupula-inclusiva-para-que-personas-ciegas-puedan-disfrutar-del-planetario/",
        },
        {
          name: "Revista Galería",
          note: {
            en: "Magazine feature · Búsqueda, Uruguay",
            es: "Reportaje en revista · Búsqueda, Uruguay",
          },
          href: "https://www.busqueda.com.uy/bienestar/las-estrellas-al-alcance-todos-una-cupula-tactil-y-sonora-que-permite-ciegos-ver-el-cielo-n5411468",
        },
        {
          name: "La mañana en casa",
          note: {
            en: "Morning TV show · Uruguay",
            es: "Programa matutino TV · Uruguay",
          },
          href: "https://www.instagram.com/reel/DWguY2Ejoug/",
        },
        {
          name: "Infobae",
          note: {
            en: "International news feature",
            es: "Cobertura internacional",
          },
          href: "https://www.infobae.com/america/agencias/2026/04/01/jovenes-uruguayas-crean-primera-experiencia-astronomica-interactiva-y-accesible/",
        },
        {
          name: "Swissinfo",
          note: {
            en: "International news feature · Switzerland",
            es: "Cobertura internacional · Suiza",
          },
          href: "https://www.swissinfo.ch/spa/j%C3%B3venes-uruguayas-crean-primera-experiencia-astron%C3%B3mica-interactiva-y-accesible/91196432",
        },
        {
          name: "Diario ABC",
          note: {
            en: "Newspaper feature · Spain",
            es: "Reportaje en diario · España",
          },
          href: "https://www.abc.es/ciencia/jovenes-uruguayas-crean-primera-experiencia-astronomica-interactiva-20260401172137-nt.html",
        },
        {
          name: "Semanario La Prensa",
          note: {
            en: "Weekly newspaper feature",
            es: "Reportaje semanal en diario",
          },
          href: "https://semanariolaprensa.com/tocar-el-cielo-con-las-manos-uruguayas-crean-la-primera-experiencia-astronomica-interactiva-para-personas-ciegas/",
        },
        {
          name: "El Informador",
          note: {
            en: "Newspaper feature · Colombia",
            es: "Reportaje en diario · Colombia",
          },
          href: "https://www.elinformador.com.co/index.php/opinion/38-opinion-grafica/349988-primera-experiencia-astronomica-interactiva-y-accesible",
        },
        {
          name: "FIX",
          note: {
            en: "Cultural coverage · Instagram reel",
            es: "Cobertura cultural · reel de Instagram",
          },
          href: "https://www.instagram.com/reel/DXXEZfLk6pD/",
        },
        {
          name: "A+V",
          note: {
            en: "Video interview · YouTube",
            es: "Entrevista en video · YouTube",
          },
          href: "https://youtu.be/Qi1laRR9E0w",
        },
      ],
    },
    {
      kind: "gallery3",
      images: [
        {
          kind: "placeholder",
          label: {
            en: "TV interview still",
            es: "Captura de entrevista en TV",
          },
          tone: "dark",
          src: img9,
          alt: {
            en: "TV interview still",
            es: "Captura de entrevista en TV",
          },
        },
        {
          kind: "placeholder",
          label: {
            en: "Magazine article screenshot",
            es: "Captura del artículo de revista",
          },
          tone: "paper",
          src: img10,
          alt: {
            en: "Magazine article screenshot",
            es: "Captura del artículo de revista",
          },
        },
        {
          kind: "placeholder",
          label: { en: "Newspaper feature", es: "Reportaje en diario" },
          tone: "bone",
          src: img11,
          alt: { en: "Newspaper feature", es: "Reportaje en diario" },
        },
      ],
      caption: {
        en: "Arathe reached public audiences through interviews, articles and cultural coverage.",
        es: "Arathe llegó al público general a través de entrevistas, artículos y cobertura cultural.",
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
          en: "Accessibility changes the whole design process when it is treated as a starting point instead of an adjustment.",
          es: "La accesibilidad cambia todo el proceso de diseño cuando se aborda como punto de partida y no como un ajuste posterior.",
        },
        {
          en: "Technology is strongest when it becomes invisible: the system can be complex, but the experience should feel simple, intuitive and human.",
          es: "La tecnología es más fuerte cuando se vuelve invisible: el sistema puede ser complejo, pero la experiencia debe sentirse simple, intuitiva y humana.",
        },
        {
          en: "A working prototype is not enough if no one else can operate, repair or evolve it. Documentation is part of the product.",
          es: "Un prototipo que funciona no alcanza si nadie más puede operarlo, repararlo o hacerlo crecer. La documentación es parte del producto.",
        },
        {
          en: "Physical computing forces every decision to become real: cable length, sensor angle, maintenance, transport, comfort and safety all become design constraints.",
          es: "La computación física obliga a que cada decisión se vuelva real: la longitud del cable, el ángulo del sensor, el mantenimiento, el transporte, la comodidad y la seguridad pasan a ser restricciones de diseño.",
        },
        {
          en: "Multimedia design can connect worlds that often feel separate: programming, industrial design, graphic design, pedagogy, astronomy, accessibility, sound and communication.",
          es: "El diseño multimedia puede conectar mundos que suelen sentirse aparte: programación, diseño industrial, diseño gráfico, pedagogía, astronomía, accesibilidad, sonido y comunicación.",
        },
      ],
    },
    {
      kind: "closing",
      title: {
        en: "A process that became a direction",
        es: "Un proceso que se volvió una dirección",
      },
      body: {
        en: "Arathe reaffirmed the kind of work I want to keep doing: projects where technology, design and purpose move together. It allowed me to connect my technical background with my sensitivity as a designer, my interest in education and my desire to create experiences with social impact. What began as a final degree project became a living process, a growing network and a possible future.",
        es: "Arathe reafirmó el tipo de trabajo que quiero seguir haciendo: proyectos donde la tecnología, el diseño y el propósito caminan juntos. Me permitió conectar mi base técnica con mi sensibilidad como diseñadora, mi interés por la educación y mi deseo de crear experiencias con impacto social. Lo que empezó como un proyecto final de carrera se convirtió en un proceso vivo, una red creciente y un futuro posible.",
      },
    },
  ],
  archive: {
    title: { en: "Visual process archive", es: "Archivo visual del proceso" },
    note: {
      en: "Fragments from the making-of: electronics, sketches, tests, scripts, prototypes and the physical dome coming together.",
      es: "Fragmentos del making-of: electrónica, bocetos, pruebas, guiones, prototipos y la cúpula física tomando forma.",
    },
    items: [
      {
        kind: "placeholder",
        tone: "bone",
        label: { en: "hardware comparison", es: "comparación de hardware" },
        date: { en: "early process", es: "proceso temprano" },
        note: { en: "architecture research", es: "investigación de arquitectura" },
        src: img12,
        alt: {
          en: "Hardware comparison — architecture research",
          es: "Comparación de hardware — investigación de arquitectura",
        },
      },
      {
        kind: "placeholder",
        tone: "paper",
        label: { en: "sensor tests", es: "pruebas de sensores" },
        date: { en: "prototype", es: "prototipo" },
        note: {
          en: "testing detection through material",
          es: "probando la detección a través del material",
        },
        src: img13,
        alt: {
          en: "Sensor tests — testing detection through material",
          es: "Pruebas de sensores — probando la detección a través del material",
        },
      },
      {
        kind: "placeholder",
        tone: "dark",
        label: { en: "wiring diagram", es: "diagrama de cableado" },
        date: { en: "build", es: "construcción" },
        note: { en: "system architecture", es: "arquitectura del sistema" },
        src: img14,
        alt: {
          en: "Wiring diagram — system architecture",
          es: "Diagrama de cableado — arquitectura del sistema",
        },
      },
      {
        kind: "placeholder",
        tone: "bone",
        label: { en: "cable assembly", es: "armado de cableado" },
        date: { en: "build", es: "construcción" },
        note: {
          en: "more than function, maintainability",
          es: "más allá de la función, mantenibilidad",
        },
        src: img15,
        alt: {
          en: "Cable assembly — built for maintainability",
          es: "Armado de cableado — pensado para el mantenimiento",
        },
      },
      {
        kind: "placeholder",
        tone: "paper",
        label: { en: "audio scripts", es: "guiones de audio" },
        date: { en: "narrative", es: "narrativa" },
        note: {
          en: "writing for tactile exploration",
          es: "escribir para la exploración táctil",
        },
        src: img16,
        alt: {
          en: "Audio scripts — writing for tactile exploration",
          es: "Guiones de audio — escribir para la exploración táctil",
        },
      },
      {
        kind: "placeholder",
        tone: "dark",
        label: { en: "Kepler blog", es: "blog de Kepler" },
        date: { en: "digital extension", es: "extensión digital" },
        note: {
          en: "Framer and Rive scrollytelling",
          es: "scrollytelling con Framer y Rive",
        },
        src: img17,
        alt: {
          en: "Kepler blog — Framer and Rive scrollytelling",
          es: "Blog de Kepler — scrollytelling con Framer y Rive",
        },
      },
    ],
  },
  neighbours: {
    prev: {
      name: "The Winged Chariot",
      slug: "winged-chariot-allegory",
      kind: { en: "Motion · Visual metaphor", es: "Motion · Metáfora visual" },
    },
    next: {
      name: "Portfolio Video",
      slug: "portfolio-video",
      kind: { en: "AI · Motion · Process", es: "IA · Motion · Proceso" },
    },
  },
};
