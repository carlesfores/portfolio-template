import { type Job, type Skill } from "../interfaces";

import html5Icon from "../assets/html5.svg";
import css3Icon from "../assets/css3.svg";
import jsIcon from "../assets/js.svg";
import vuejsIcon from "../assets/vuejs.svg";
import reactIcon from "../assets/react.svg";
import typescriptIcon from "../assets/typescript.svg";
import sassIcon from "../assets/sass.svg";
import viteIcon from "../assets/vitejs.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import storybookIcon from "../assets/storybook.svg";
import nextjsIcon from "../assets/nextjs.svg";
import webpackIcon from "../assets/webpack.svg";

export const JOBS: Job[] = [
  {
    title: "Desarrollador front-end",
    company: "Inari.io",
    dates: "2023 - 2026",
    tasks: [
      "Desarrollé funcionalidades en Vue 3 para un workbench de underwriting orientado a datos: formularios, tablas, listados con filtros y vistas de gráficas.",
      "Integré el front-end con APIs REST y GraphQL.",
      "Lideré el desarrollo del módulo de visualización de KPIs con ApexCharts, con gráficas interactivas preparadas para grandes volúmenes de datos."
    ]
  },
  {
    title: "Desarrollador front-end",
    company: "Cathedral software",
    dates: "2022 - 2023",
    tasks: [
      "Desarrollé y mantuve aplicaciones de comparación de tarifas y servicios energéticos con Vue 2, Vue 3, React y TypeScript.",
      "Creé y mantuve una librería de componentes reutilizables documentada en Storybook."
    ]
  },
  {
    title: "Team lead y desarrollador front-end",
    company: "Zitro",
    dates: "2020 - 2022",
    tasks: [
      "Lideré el equipo front-end, coordinando con QA, arte y backend.",
      "Desarrollé juegos para casinos online e integré los productos en plataformas de terceros.",
      "Creé el catálogo digital de juegos con React.",
      "Gestioné los procesos de certificación internacional en múltiples mercados."
    ]
  },
  {
    title: "Desarrollador front-end",
    company: "Basetis",
    dates: "2016 - 2020",
    tasks: [
      "Desarrollé aplicaciones web para clientes de distintos sectores con AngularJS, React y Laravel.",
      "Desarrollé aplicaciones híbridas con Apache Cordova.",
      "Participé en la definición técnica y funcional de las soluciones junto a los clientes.",
    ]
  },
  {
    title: "Desarrollador front-end y back-end",
    company: "Consultia IT",
    dates: "2016 - 2020",
    tasks: [
      "Desarrollé módulos para plataformas basadas en Salesforce.",
      "Mantuve la web corporativa en Liferay con HTML, CSS y jQuery.",
    ]
  },
  {
    title: "Técnico de Sistemas (Prácticas)",
    company: "IES Eugeni d’Ors",
    dates: "2010 - 2011",
    tasks: []
  },
]

export const SKILLS: Skill[] = [
  { name: "JavaScript", icon: jsIcon, alt: "JavaScript" },
  { name: "TypeScript", icon: typescriptIcon, alt: "TypeScript" },
  { name: "HTML5", icon: html5Icon, alt: "HTML5" },
  { name: "CSS3", icon: css3Icon, alt: "CSS3" },
  { name: "Vue.js", icon: vuejsIcon, alt: "Vue.js" },
  { name: "React", icon: reactIcon, alt: "React" },
  { name: "Next.js", icon: nextjsIcon, alt: "Next.js" },
  { name: "Sass", icon: sassIcon, alt: "Sass" },
  { name: "Tailwind CSS", icon: tailwindIcon, alt: "Tailwind CSS" },
  { name: "Storybook", icon: storybookIcon, alt: "Storybook" },
  { name: "Vite", icon: viteIcon, alt: "Vite" },
  { name: "Webpack", icon: webpackIcon, alt: "Webpack" },


];