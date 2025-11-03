export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Experiencia',
    href: '/experience',
  },
  {
    label: 'Proyectos',
    href: '/projects',
  },
  {
    label: 'Contacto',
    href: '/contact',
  },
]

export const EDUCATION_ITEMS = {
  es: [
    {
      school: 'Escuela Da Vinci',
      title: 'Técnico superior en desarrollo y diseño web',
      date: 'Marzo de 2022 - Diciembre 2023 (2 años)',
      description: 'Promedio de 9,52. Formación técnica orientada al desarrollo Full-stack, diseño responsivo, creación de contenido digital y tecnologías web modernas.',
    },
    {
      school: 'Aprendé programando',
      title: 'Curso de Desarrollo web (Frontend y Backend)',
      date: 'Marzo de 2021 (1 mes)',
      description: 'Formación en desarrollo web Frontend y Backend, creación de contenido digital y tecnologías web modernas.',
    },
    {
      school: 'New Way Institute',
      title: 'Pre-intermediate',
      date: 'Marzo 2010 - 2018 (8 años)',
      description: 'Formación en desarrollo web Frontend y Backend, creación de contenido digital y tecnologías web modernas.',
    },
    {
      school: 'Instituto San Rafael',
      title: 'Bachiller en Economía y Administración',
      date: 'Marzo de 2017 - Diciembre 2021 (5 años)',
      description: 'Formación en desarrollo web Frontend y Backend, creación de contenido digital y tecnologías web modernas.',
    },
  ],
  en: [
    {
      school: 'Da Vinci School',
      title: 'Technical superior in web development and design',
      date: 'March 2022 to December 2023',
      description: 'Average of 9.52. Technical training oriented to Full-stack development, responsive design, digital content creation and modern web technologies.',
    },
    {
      school: 'Aprendé programando',
      title: 'Curso de Desarrollo web (Frontend y Backend)',
      date: 'March 2021 (1 month)',
      description: 'Formation in web development Frontend and Backend, digital content creation and modern web technologies.',
    },
    {
      school: 'New Way Institute',
      title: 'Pre-intermediate',
      date: 'March 2010 - 2018 (8 years)',
      description: 'Formation in web development Frontend and Backend, digital content creation and modern web technologies.',
    },
    {
      school: 'Instituto San Rafael',
      title: 'Bachelor in Economics and Administration',
      date: 'March 2017 - December 2021 (5 years)',
      description: 'Formation in web development Frontend and Backend, digital content creation and modern web technologies.',
    },
  ],
}

export const EXPERIENCE_ITEMS = {
  es: [
    {
      company: 'Pulpou',
      title: 'Desarrollador Full Stack',
      date: 'Septiembre 2024 - Septiembre 2025 (1 año y 1 mes)',
      description: 'Creación y mantenimiento de una plataforma de Brand Protection para grandes empresas, con funcionalidades que detectan infracciones de propiedad intelectual en marketplaces. Desarrollo Full Stack de una SPA con filtros dinámicos, renderizado condicional y gestión de estado en tiempo real + UI responsiva en Bootstrap y Atomizer para facilitar la auditoría y gestión masiva.',
      skills: ['React', 'Node', 'SQL', 'AI', 'Bootstrap', 'Atomizer'],
    },
  ],
  en: [
    {
      company: 'Pulpou',
      title: 'Full Stack Developer',
      date: 'September 2024 - September 2025 (1 year and 1 month)',
      description: 'Creation and maintenance of a Brand Protection platform for large companies, with features that detect intellectual property infringements in marketplaces. Full Stack development of a SPA with dynamic filters, conditional rendering and real-time state management + responsive UI in Bootstrap and Atomizer to facilitate audit and mass management.',
      skills: ['React', 'Node', 'SQL', 'AI', 'Bootstrap', 'Atomizer'],
    },
  ],
}

export const FREELANCE_ITEMS = {
  es: [
    {
      company: 'Igrowker',
      title: 'Desarrollador Front-end',
      date: 'Septiembre 2024 - Octubre 2024 (2 meses)',
      description: 'Desarrollo de Web App para conductores con eventos, usando Next.js, TypeScript y TailwindCSS. Implementé componentes reutilizables y optimicé la interfaz móvil.',
      skills: ['Next.js', 'TypeScript', 'TailwindCSS'],
    },
    {
      company: 'No Country',
      title: 'Desarrollador Full-stack',
      date: 'Agosto 2024 - Septiembre 2024 (2 meses)',
      description: 'Plataforma Web que conecta cuidadores y dueños de mascotas. Desarrollé Front-end con React, Tailwind y Redux, y Back-end con autenticación y reservas.',
      skills: ['React', 'Tailwind', 'Redux'],
    },
    {
      company: 'Astrobel',
      title: 'Desarrollador Front-end',
      date: 'Mayo 2024 - Julio 2024 (3 meses)',
      description: 'Mantenimiento y desarrollo de sitio web de servicios astrológicos con UX/UI completo en Next.js, TypeScript y TailwindCSS. Integración de contacto vía WhatsApp.',
      skills: ['Next.js', 'TypeScript', 'TailwindCSS'],
    },
  ],
  en: [
    {
      company: 'Igrowker',
      title: 'Front-end Developer',
      date: 'September 2024 - October 2024 (2 months)',
      description: 'Developed a driver Web App with event views using Next.js, TypeScript, and TailwindCSS. Built reusable components and optimized the mobile interface.',
      skills: ['Next.js', 'TypeScript', 'TailwindCSS'],
    },
    {
      company: 'No Country',
      title: 'Full-stack Developer',
      date: 'August 2024 - September 2024 (2 months)',
      description: 'Built a Web App connecting pet owners and caretakers. Developed Front-end with React, Tailwind, and Redux, and Back-end with authentication and booking flow.',
      skills: ['React', 'Tailwind', 'Redux'],
    },
    {
      company: 'Astrobel',
      title: 'Front-end Developer',
      date: 'May 2024 - July 2024 (3 months)',
      description: 'Developed and maintained astrology service website with full UX/UI using Next.js, TypeScript, and TailwindCSS. Added direct contact via WhatsApp.',
      skills: ['Next.js', 'TypeScript', 'TailwindCSS'],
    },
  ],

}

interface Project {
  title: string
  imageSrc: `/images/${string}`
  type: string
  typeEnglish: string
  description: string
  descriptionEnlgish: string
  technologies: Technologies[]
  projectLink: string
  codeLink: string
}

export type Technologies = 'Next' | 'React' | 'TypeScript' | 'React native' | 'Node' | 'Mongo Db' | 'Axios' | 'Jwt' | 'Socket.io' | 'SCSS' | 'Tailwind' | 'Three.js' | 'HTML' | 'CSS' | 'Javascript' | 'PWA' | 'API' | 'Bootstrap' | 'PHP' | 'MySql' | 'Vue' | 'Firebase' | 'Prisma' | 'Zod' | 'Chart.Js' | 'MercadoPago' | 'Zustand' | 'React-hook-forms' | 'WhatsApp' | 'Rollup' | 'Npm' | 'VS Code Extension' | 'Figma Extension'

export const PROJECTS_ITEMS: Project[] = [
  {
    title: 'Clear All Console log',
    imageSrc: '/images/clear-console-extension.jpg',
    type: 'Extensión',
    typeEnglish: 'Extension',
    description: 'Clear All Console Log es una extensión de Visual Studio Code diseñada para limpiar tu código eliminando todas los "logs" tus proyectos o archivos actuales.',
    descriptionEnlgish: 'Clear All Console Log is a Visual Studio Code extension designed to clean up your code by removing all "logs" from your project or current file.',
    technologies: ['VS Code Extension'],
    projectLink: 'https://marketplace.visualstudio.com/items?itemName=nicolasAguero99.clear-all-console-log',
    codeLink: 'https://github.com/nicolasAguero99/clear-all-console-log'
  },
  {
    title: 'Multiple font resizer',
    imageSrc: '/images/multiple-font-resizer.jpg',
    type: 'Extensión',
    typeEnglish: 'Extension',
    description: 'Este plugin te permite ajustar el tamaño de los textos seleccionados al mismo tiempo.',
    descriptionEnlgish: 'This plugin allows you to easily adjust the size of selected text elements at the same time.',
    technologies: ['Figma Extension'],
    projectLink: 'https://www.figma.com/community/plugin/1428012531856017015/multiple-font-resizer',
    codeLink: ''
  },
  {
    title: 'Astrobel',
    imageSrc: '/images/Astrobel.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto freelance. Es una tienda que ofrece lecturas de cartas astrales que contienen diferentes objetivos e información, además de contar con una carta astral personalizada.',
    descriptionEnlgish: 'Freelance project. It is a store that offers astral chart readings that contain different objectives and information, as well as having a personalized astral chart.',
    technologies: ['Next', 'TypeScript', 'WhatsApp', 'Tailwind'],
    projectLink: 'https://astrobel-store.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/astrobel-store'
  },
  {
    title: 'Post It Library',
    imageSrc: '/images/post-it-library.jpg',
    type: 'Librería',
    typeEnglish: 'Library',
    description: 'Librería. Te permite crear y gestionar notas adhesivas de forma fácil y personalizable. Con funciones como mover, editar, personalizar y eliminar fácilmente.',
    descriptionEnlgish: 'Library. Allows you to create and manage sticky notes easily and customizable. With features like easily move, edit, customize and delete',
    technologies: ['React', 'TypeScript', 'Rollup', 'Npm'],
    projectLink: 'https://post-it-library.vercel.app',
    codeLink: 'https://github.com/nicolasAguero99/post-it-library'
  },
  {
    title: 'All in one',
    imageSrc: '/images/All-In-One.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto personal. Es una página web que ofrece diferentes servicios como: acortar URL, subir archivos a la nube y generar codigos QR',
    descriptionEnlgish: 'Personal project. It is a website that offers different services such as: shortening URLs, uploading files to the cloud and generating QR codes.',
    technologies: ['Next', 'TypeScript', 'Firebase', 'MercadoPago', 'Zustand', 'React-hook-forms', 'Zod', 'Tailwind'],
    projectLink: 'https://all-in-one-sooty.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/all-in-one'
  },
  {
    title: 'Entreprise platform',
    imageSrc: '/images/Entreprise-Platform.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto personal. Es un administrador de empresas/compañías en el cual podrás tener un registro de las operaciones económicas',
    descriptionEnlgish: 'Personal project. It is a business/company administrator in which you can have a record of economic operations.',
    technologies: ['Next', 'TypeScript', 'Prisma', 'Zod', 'Chart.Js', 'Tailwind'],
    projectLink: 'https://entreprise-platform-project.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/entreprise-platform-project'
  },
  {
    title: 'Ready',
    imageSrc: '/images/Ready.jpg',
    type: 'Tesis',
    typeEnglish: 'Thesis',
    description: 'Proyecto académico (tesis). Es una plataforma de gestión de tareas y gamificación para empresas',
    descriptionEnlgish: 'Academic project (thesis). It is a task management and gamification platform for companies.',
    technologies: ['React', 'Node', 'Mongo Db', 'Axios', 'Jwt', 'Socket.io'],
    projectLink: 'https://ready-app-gamma.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/Ready-project'
  },
  {
    title: 'Nowly',
    imageSrc: '/images/Nowly.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto personal (en proceso) de una aplicación de organización, meditaciones y música para estudio y día a día.',
    descriptionEnlgish: 'Personal project (in progress) of an organization, meditations and music application for study and day to day.',
    technologies: ['React native'],
    projectLink: '',
    codeLink: 'https://github.com/nicolasAguero99/Nowly-project'
  },
  {
    title: 'Task list',
    imageSrc: '/images/TaskList.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto personal en el que consiste en una app de lista de tareas o también llamadas "task list" o "todo list".',
    descriptionEnlgish: 'Personal project that consists of a task list app or also called "task list" or "todo list".',
    technologies: ['React', 'SCSS'],
    projectLink: 'https://task-list-project-chi.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/TaskList-project'
  },
  {
    title: 'Sneak-er',
    imageSrc: '/images/SneakEr.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto personal de un sitio web de una zapatería la cual ofrece calzado de diferentes marcas.',
    descriptionEnlgish: 'Personal project of a shoe store website which offers footwear from different brands',
    technologies: ['React', 'Tailwind', 'Three.js'],
    projectLink: 'https://sneak-er.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/SneakEr-project'
  },
  {
    title: 'Fly X',
    imageSrc: '/images/FlyX.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto académico de un sitio de viajes. Es una PWA (donde se utilizó ServiceWorker y Manifest),  basada en una API y un Json local.',
    descriptionEnlgish: 'Academic project for a travel site. It is a PWA (where ServiceWorker and Manifest were used), based on an API and a local Json',
    technologies: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'PWA', 'API'],
    projectLink: 'https://nicolasaguero99.github.io/FlyX-project/',
    codeLink: 'https://github.com/nicolasAguero99/FlyX-project'
  },
  {
    title: 'Tienda LevelUp',
    imageSrc: '/images/LevelUp.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto académico de una tienda de juegos, que cuenta con una base de datos, sección para administradores, usuarios, login/register y carrito.',
    descriptionEnlgish: 'Academic project of a game store, which has a database, section for administrators, users, login/register and cart',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'MySql'],
    projectLink: 'http://level-up.rf.gd/',
    codeLink: 'https://github.com/nicolasAguero99/LevelUp-project'
  },
  {
    title: 'Creatimoon',
    imageSrc: '/images/Creatimoon.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto académico de un sitio que ofrece servicios digitales tanto de programación como de diseño. Cuenta con mensajería de atención al cliente y un panel de administrador.',
    descriptionEnlgish: 'Academic project of a site that offers digital services in both programming and design. It has customer service messaging and an administrator panel',
    technologies: ['Vue', 'Firebase'],
    projectLink: 'https://creatimoon-project.vercel.app/',
    codeLink: 'https://github.com/nicolasAguero99/Creatimoon-project'
  },
  {
    title: 'Flixplay',
    imageSrc: '/images/Flixplay.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto académico de una plataforma de películas con buscador, y poder ver los detalles de un filme en específico empleando una API.',
    descriptionEnlgish: 'Academic project of a movie platform with a search engine, and being able to see the details of a specific film using an API',
    technologies: ['Vue', 'API'],
    projectLink: 'https://nicolasaguero99.github.io/Flixplay-project/',
    codeLink: 'https://github.com/nicolasAguero99/Flixplay-project'
  },
  {
    title: 'To Do App',
    imageSrc: '/images/TodoApp.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto académico que consiste en realizar una “ToDo app” que cuenta con su buscador de tareas y sus funciones típicas de agregar, editar y borrar.',
    descriptionEnlgish: 'Academic project that consists of creating a “ToDo app” that has its task search engine and its typical functions of adding, editing and deleting',
    technologies: ['Vue'],
    projectLink: 'https://nicolasaguero99.github.io/TodoApp-project/',
    codeLink: 'https://github.com/nicolasAguero99/TodoApp-project'
  },
  {
    title: 'Urban Hell',
    imageSrc: '/images/Urban-Hell.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto académico para una tienda de ropa, con su catálogo de productos y carrito de compras funcional.',
    descriptionEnlgish: 'Academic project for a clothing store, with its product catalog and functional shopping cart',
    technologies: ['HTML', 'CSS', 'Javascript', 'PWA', 'API'],
    projectLink: 'https://nicolasaguero99.github.io/UrbanHell-project/',
    codeLink: 'https://github.com/nicolasAguero99/UrbanHell-project'
  },
  {
    title: 'Starbucks landing page',
    imageSrc: '/images/Starbucks.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto académico que consiste en realizar una landing page promocionando la famosa empresa de Starbucks, a su vez contando con una PWA.',
    descriptionEnlgish: 'Academic project that consists of creating a landing page promoting the famous Starbucks company, in turn having a PWA',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'PWA'],
    projectLink: 'https://nicolasaguero99.github.io/Starbucks-project/',
    codeLink: 'https://github.com/nicolasAguero99/Starbucks-project'
  },
  {
    title: 'Havanna landing page',
    imageSrc: '/images/Havanna.jpg',
    type: 'Proyecto',
    typeEnglish: 'Project',
    description: 'Proyecto académico que consiste en realizar una landing page promocionando la famosa empresa Argentina de Havanna.',
    descriptionEnlgish: 'Academic project that consists of creating a landing page promoting the famous Argentine company Havanna.',
    technologies: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
    projectLink: 'https://nicolasaguero99.github.io/Havanna-project/',
    codeLink: 'https://github.com/nicolasAguero99/Havanna-project'
  }
]