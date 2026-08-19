export type Lang = 'es' | 'en'

export type Project = {
  name: string
  impact: string
  stack: string
  live?: string
  repo?: string
}

export type CvCopy = {
  skip: string
  role: string
  location: string
  oneLiner: string
  pdfLabel: string
  printLabel: string
  themeToLight: string
  themeToDark: string
  langToEn: string
  langToEs: string
  aboutTitle: string
  aboutPrintTitle: string
  about: string
  experienceTitle: string
  jobTitle: string
  jobDates: string
  jobPlace: string
  bullets: string[]
  workTitle: string
  workPrintTitle: string
  workRole: string
  live: string
  repo: string
  stackTitle: string
  stackPrintTitle: string
  stackGroups: { label: string; items: string }[]
  contactTitle: string
  contactBody: string
  photoAlt: string
  projects: Project[]
}

export type ContactLink = {
  id: 'email' | 'phone' | 'github' | 'site'
  href: string
  display: string
}

export const profile = {
  given: 'Adonis',
  family: 'González',
  name: 'Adonis González',
  startYear: '2020',
  photo: 'adonis.png',
} as const

export const contacts: ContactLink[] = [
  {
    id: 'email',
    href: 'mailto:gonzalezadonis16@gmail.com',
    display: 'gonzalezadonis16@gmail.com',
  },
  {
    id: 'phone',
    href: 'tel:+584241224783',
    display: '+58 424 122 4783',
  },
  {
    id: 'github',
    href: 'https://github.com/adonis386',
    display: 'github.com/adonis386',
  },
  {
    id: 'site',
    href: 'https://portfolio.informaticagonzalez.com',
    display: 'portfolio.informaticagonzalez.com',
  },
]

const projectsEs: Project[] = [
  {
    name: 'LogiTrack',
    impact:
      'Construí el panel operativo de una plataforma logística: envíos, rutas y control del día a día.',
    stack: 'Next.js, TypeScript, Vercel',
    live: 'https://logitrack-gold.vercel.app',
  },
  {
    name: 'Legacy Cargo',
    impact:
      'Publiqué tracking web + app conectado a Firebase y Odoo, con una sola fuente de verdad para operación y cliente.',
    stack: 'Firebase, Odoo, tracking',
    live: 'https://www.legacycargove.com/',
  },
  {
    name: 'Soluciones CGT',
    impact:
      'Armé un e-commerce de hardware con asesoramiento por IA para armar PCs y elegir equipo.',
    stack: 'Next.js, e-commerce, IA',
    live: 'https://www.solucionescgt.com/',
  },
  {
    name: 'Laboratorio Hemodinamia HCC',
    impact:
      'Publiqué el sitio institucional de cardiología intervencionista: procedimientos, staff y contacto.',
    stack: 'Next.js, React',
    live: 'https://laboratoriohemodinamia.vercel.app',
  },
  {
    name: 'Mundialito 2026',
    impact:
      'Publiqué una quiniela del Mundial con ligas privadas y ranking en vivo.',
    stack: 'Next.js, TypeScript, Supabase',
    live: 'https://mundial-futbol.vercel.app',
  },
]

const projectsEn: Project[] = [
  {
    name: 'LogiTrack',
    impact:
      'Built the ops panel for a logistics platform: shipments, routes, and day-to-day control.',
    stack: 'Next.js, TypeScript, Vercel',
    live: 'https://logitrack-gold.vercel.app',
  },
  {
    name: 'Legacy Cargo',
    impact:
      'Shipped web + app tracking wired to Firebase and Odoo, one source of truth for ops and customers.',
    stack: 'Firebase, Odoo, tracking',
    live: 'https://www.legacycargove.com/',
  },
  {
    name: 'Soluciones CGT',
    impact:
      'Built a hardware storefront with an AI advisor for PC builds and gear selection.',
    stack: 'Next.js, e-commerce, AI',
    live: 'https://www.solucionescgt.com/',
  },
  {
    name: 'Laboratorio Hemodinamia HCC',
    impact:
      'Shipped the institutional site for interventional cardiology: procedures, staff, contact.',
    stack: 'Next.js, React',
    live: 'https://laboratoriohemodinamia.vercel.app',
  },
  {
    name: 'Mundialito 2026',
    impact:
      'Shipped a World Cup pool app with private leagues and a live ranking.',
    stack: 'Next.js, TypeScript, Supabase',
    live: 'https://mundial-futbol.vercel.app',
  },
]

export const copy: Record<Lang, CvCopy> = {
  es: {
    skip: 'Saltar al contenido',
    role: 'Independent developer',
    location: 'Nacionalidad: Venezolano · Fecha de nacimiento: 27/04/1998 · Caracas, Venezuela · remoto',
    oneLiner: 'Full-stack engineer',
    pdfLabel: 'PDF',
    printLabel: 'Imprimir / PDF',
    themeToLight: 'Activar modo claro',
    themeToDark: 'Activar modo oscuro',
    langToEn: 'Switch to English',
    langToEs: 'Cambiar a español',
    aboutTitle: 'About',
    aboutPrintTitle: 'Summary',
    about:
      'Construyo productos en producción para clientes directos: webs, apps y sistemas. Cuando IA acorta el camino, la uso (agentes, MCP, Claude, Cursor). Diseño, API, datos y deploy los llevo yo. Stack diario: TypeScript, React, Next.js, Node, SQL y NoSQL.',
    experienceTitle: 'Experience',
    jobTitle: 'Independent Software Developer',
    jobDates: '2020 — Presente',
    jobPlace: 'Freelance / contrato por proyecto · remoto',
    bullets: [
      'Tomo el producto de punta a punta: diseño, API, modelo de datos y deploy, sin pasarlo a otro equipo.',
      'Uso agentes, MCP, Claude y Cursor para acortar el tramo de un sistema usable a código en producción.',
      'Elijo SQL o NoSQL según el problema — PostgreSQL, MongoDB, Firebase, Supabase — y dejo el sistema operable.',
      'Publico en Vercel o AWS, con Docker y Git como base de trabajo, no como demo.',
    ],
    workTitle: 'Selected work',
    workPrintTitle: 'Projects',
    workRole: 'Independent developer',
    live: 'Live',
    repo: 'Repo',
    stackTitle: 'Stack',
    stackPrintTitle: 'Technical Skills',
    stackGroups: [
      {
        label: 'Daily',
        items: 'TypeScript · React · Next.js · Node.js · Git',
      },
      {
        label: 'Solid',
        items: 'PostgreSQL · MongoDB · Firebase · Supabase · Docker · Vercel · AWS',
      },
      {
        label: 'AI tooling',
        items: 'Agents · MCP · Claude · Cursor · Antigravity',
      },
    ],
    contactTitle: 'Contact',
    contactBody: 'Disponible para contratos por proyecto.',
    photoAlt: 'Retrato de Adonis González',
    projects: projectsEs,
  },
  en: {
    skip: 'Skip to content',
    role: 'Independent developer',
    location: 'Nationality: Venezuelan · Date of birth: 27 Apr 1998 · Caracas, Venezuela · remote OK',
    oneLiner: 'Full-stack engineer',
    pdfLabel: 'PDF',
    printLabel: 'Print / PDF',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    langToEn: 'Switch to English',
    langToEs: 'Switch to Spanish',
    aboutTitle: 'About',
    aboutPrintTitle: 'Summary',
    about:
      'I build production software for direct clients: websites, apps, and systems. I use AI when it shortens the path (agents, MCP, Claude, Cursor). Design, API, data, and deploy stay with me. Daily stack: TypeScript, React, Next.js, Node, SQL and NoSQL.',
    experienceTitle: 'Experience',
    jobTitle: 'Independent Software Developer',
    jobDates: '2020 — Present',
    jobPlace: 'Freelance / project contractor · remote',
    bullets: [
      'Own the product end to end: UI, API, data model, and deploy — no hand-off to another team.',
      'Use agents, MCP, Claude, and Cursor to shorten the path from a working system to production code.',
      'Pick SQL or NoSQL for the problem — PostgreSQL, MongoDB, Firebase, Supabase — and leave the system operable.',
      'Ship on Vercel or AWS, with Docker and Git as the working baseline, not a demo.',
    ],
    workTitle: 'Selected work',
    workPrintTitle: 'Projects',
    workRole: 'Independent developer',
    live: 'Live',
    repo: 'Repo',
    stackTitle: 'Stack',
    stackPrintTitle: 'Technical Skills',
    stackGroups: [
      {
        label: 'Daily',
        items: 'TypeScript · React · Next.js · Node.js · Git',
      },
      {
        label: 'Solid',
        items: 'PostgreSQL · MongoDB · Firebase · Supabase · Docker · Vercel · AWS',
      },
      {
        label: 'AI tooling',
        items: 'Agents · MCP · Claude · Cursor · Antigravity',
      },
    ],
    contactTitle: 'Contact',
    contactBody: 'Open to project contracts.',
    photoAlt: 'Portrait of Adonis González',
    projects: projectsEn,
  },
}
