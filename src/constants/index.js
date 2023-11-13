/* eslint-disable no-unused-vars */
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  jwt,
  ubuntu,
  antd,
  firebase,
  aws,
  bootstrap,
  c,
  cpp,
  graphql,
  jest,
  kubernates,
  nextjs,
  nginx,
  postgresql,
  postman,
  prisma,
  redis,
  rtl,
  supabase,
  vitest,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  capitall,
  carrent,
  jobit,
  tripguide,
  anonna,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

export const frontEnd = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "antd",
    icon: antd,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];
export const cloudDevOpsTestting = [
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "jest",
    icon: jest,
  },
  {
    name: "kubernates",
    icon: kubernates,
  },
  {
    name: "nginx",
    icon: nginx,
  },
  {
    name: "vitest",
    icon: vitest,
  },
  {
    name: "rtl",
    icon: rtl,
  },
];
export const languages = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
];
export const Backend = [
  {
    name: "Node JS",
    icon: nodejs,
  },
];
export const databasesORM = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "redis",
    icon: redis,
  },
  {
    name: "prisma",
    icon: prisma,
  },
  {
    name: "supabase",
    icon: supabase,
  },
];

export const others = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "jwt",
    icon: jwt,
  },
  {
    name: "ubuntu",
    icon: ubuntu,
  },
];

const technologies = [];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Capitall",
    icon: capitall,
    iconBg: "#383E56",
    date: "February 2023 - Present",
    points: [
      "Achieved optimization in API response time, leveraging expertise in implementing in-memory caching in AWS, resulting in a reduction of up to 30%",
      "Collaboratively led a team of 3 members to successfully develop and deploy a Payment Gateway within a challenging 1-week sprint.",
      "Achieved a significant increase of 20% in user engagement for campaigns and organic reach by implementing effective SEO strategies.",
      "Collaborated with stakeholders to understand requirements and developed a robust dashboard capable of displaying key investment metrics, trends, and performance indicators.",
      "Employed debugging tools to diagnose issues, collaborating with the development team to implement bug fixes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: anonna,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
