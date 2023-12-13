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

import sheba from "../assets/projects/sheba.png";
import starttech from "../assets/projects/starttech.png";
import Anonna from "../assets/projects/anonna.png";
import bookify from "../assets/projects/bookify.png";
import papertrail from "../assets/projects/papertrail.png";
import plx from "../assets/projects/plx.png";
import Postman from "../assets/projects/postman.jpg";
import websmasher from "../assets/projects/websmasher.png";
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
    name: "PC Builder",
    description:
      "Web application that features Computer hardwares and a medium to add products in cart. Uses Nextjs, Redux and Mongodb",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: starttech,
    github_link_client: "https://github.com/nayem9b/PC-Builder-Client",
    github_link_server: "https://github.com/nayem9b/PC-Builder-Server",
    live_link: "https://pcbuilderhub.vercel.app/",
  },
  {
    name: "Sheba xyz",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "Ant Design",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
    ],
    image: sheba,
    github_link_client: "https://github.com/nayem9b/Sheba.xyz-frontend",
    github_link_server: "https://github.com/nayem9b/Sheba.xyz-backend",
    live_link: "https://shebaxyz-gt23ec1s0-nayem9b.vercel.app/",
  },
  {
    name: "Anonna's Kitchen",
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
    image: anonna,
    github_link_client:
      "https://github.com/nayem9b/Anonna-s-Kitchen-clientside",
    github_link_server:
      "https://github.com/nayem9b/Anonna-s-Kitchen-serverside",
    live_link: "https://anonna-s-kitchen.web.app/",
  },
  {
    name: "Web Smasher",
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
    image: websmasher,
    github_link_client: "https://github.com/nayem9b/Web-Smasher-clientside",
    github_link_server: "https://github.com/nayem9b/Web-Smasher-serverside",
    live_link: "https://web-smasher.web.app/",
  },
  {
    name: "Paper Trails",
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
    image: papertrail,
    github_link_client: "https://github.com/nayem9b/Paper-Trail-Clientside",
    github_link_server: "https://github.com/nayem9b/Paper-Trail-Serverside",
    live_link: "https://imaginative-parfait-c0d693.netlify.app/",
  },
  {
    name: "Bookify",
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
    image: bookify,
    github_link_client: "https://github.com/nayem9b/Bookify-clientside",
    github_link_server: "https://github.com/nayem9b/Paper-Trail-Serverside",
    live_link: "https://bookify-a39cf.web.app/",
  },
  {
    name: "PLX",
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
    image: plx,
    github_link_client: "https://github.com/nayem9b/PLX-clientside",
    github_link_server: "https://github.com/nayem9b/PLX-serverside",
    live_link: "https://plx-exchange.web.app/",
  },
  {
    name: "Cow Hut",
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
    image: postman,
    github_link_client: "https://github.com/nayem9b/PLX-clientside",
    github_link_server: "https://github.com/nayem9b/PLX-serverside",
    live_link: "https://documenter.getpostman.com/view/24754089/2s9YkjCjUt",
  },
  {
    name: "University Management System",
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
    image: postman,
    github_link_client: "https://github.com/nayem9b/PLX-clientside",
    github_link_server: "https://github.com/nayem9b/PLX-serverside",
    live_link: "https://documenter.getpostman.com/view/24754089/2s9YkjCjUu",
  },
];

export { services, technologies, experiences, testimonials, projects };
