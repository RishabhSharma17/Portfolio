import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  Sponsica,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  fastapi,
  docker,
  Nextjs,
  devflow,
  python,
  postgresql,
  truefeedback,
  nimbus,
  mediom,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Applications",
    icon: mobile,
  },
  {
    title: "UI/UX & Interactions",
    icon: backend,
  },
  {
    title: "Authentication & Security",
    icon: creator,
  },
  {
    title: "Deployment & Scalability",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: Nextjs
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Sponsica",
    icon: Sponsica,
    iconBg: "#383E56",
    date: "March 2025 - August 2025",
    points: [
      "Built responsive Next.js/TypeScript applications, improving client-side rendering and load performance.",
      "Designed interactive UI flows with Framer Motion, enhancing user engagement and retention.",
      "Engineered modular, ShadCN-based components aligned with modern UX standards, reducing redesign overhead.",
      "Adapted to diverse libraries and frameworks quickly, ensuring project flexibility and timely delivery."
    ],
  },
];


const projects = [
  {
    name: "DevFlow",
    description:
    "A full-stack task and project management web app built with Next.js, FastAPI, and MongoDB. Implemented JWT-based authentication with RBAC, optimized MongoDB queries using compound indexes (40% faster retrieval), enforced clean architecture principles, ensured atomic task updates, and containerized services with Docker for consistent deployments.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
    ],
    image: devflow,
    source_code_link: "https://github.com/RishabhSharma17/Devflow",
    live_link: "https://devflow-ecru.vercel.app/",
  },
  {
    name: "TrueFeedback",
    description:
      "An anonymous messaging platform enabling private communication with 50+ active users. Integrated secure NextAuth authentication, optimized MongoDB queries for faster retrieval, and added Resend-based email notifications. Designed with ShadCN UI for a responsive experience across mobile and desktop.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "orange-text-gradient",
      },
    ],
    image: truefeedback,
    source_code_link: "https://github.com/RishabhSharma17/TrueFeedback",
    live_link: "https://true-feedback-17.vercel.app",
  },
  {
    name: "Nimbus",
    description:
      "A full-stack file storage application allowing users to upload, manage, and organize files. Implemented Clerk authentication, Drizzle ORM with Neon PostgreSQL, and ImageKit for optimized media handling. UI built with HeroUI + Tailwind CSS, deployed on Vercel for scalability.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "orange-text-gradient",
      },
    ],
    image: nimbus,
    source_code_link: "https://github.com/RishabhSharma17/Nimbus",
    live_link: "https://nimbus-khaki-six.vercel.app/",
  }, 
  {
    name: "Mediom",
    description:
      "A blog-sharing platform where users can create and read blog posts, handling 100+ test blogs. Powered by Cloudflare Workers for serverless backend logic and PostgreSQL with Prisma ORM for efficient storage. Features JWT authentication and a responsive React + TypeScript frontend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "cloudflare-workers",
        color: "orange-text-gradient",
      },
    ],
    image: mediom,
    source_code_link: "https://github.com/RishabhSharma17/Mediom",
    live_link: "https://mediom-six.vercel.app/",
  },
];


export { services, technologies, experiences, projects };