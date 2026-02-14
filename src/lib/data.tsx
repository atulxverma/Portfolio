import { type LucideIcon, Code2, Database, Layout, Server, Terminal, Globe, Cloud, Palette, GitBranch } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  link: string;
  github: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
  category: "frontend" | "backend" | "tools" | "design";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Nebula Dashboard",
    description: "AI-powered analytics dashboard with real-time data visualization.",
    longDescription: "A comprehensive analytics platform leveraging machine learning to provide predictive insights. Built with a focus on performance and data visualization, Nebula offers real-time updates via WebSockets and interactive charts powered by D3.js wrapped in React components.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tech: ["React", "TypeScript", "D3.js", "Node.js", "Socket.io"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: "2",
    title: "Ethereal Commerce",
    description: "Next-gen e-commerce experience with 3D product previews.",
    longDescription: "Redefining online shopping with immersive 3D product interactions. Ethereal Commerce utilizes WebGL to allow customers to view products from every angle. The backend is built on a scalable microservices architecture ensuring high availability during peak traffic.",
    image: "https://images.pexels.com/photos/509803/pexels-photo-509803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tech: ["Next.js", "Three.js", "Tailwind", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: "3",
    title: "Chronos Task Manager",
    description: "Minimalist productivity tool with drag-and-drop kanban boards.",
    longDescription: "Chronos simplifies project management with an intuitive drag-and-drop interface. It features offline support via PWA capabilities, real-time collaboration, and smart notifications. The clean UI is designed to minimize distraction and maximize focus.",
    image: "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tech: ["Vue.js", "Firebase", "PWA", "Tailwind"],
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: "4",
    title: "Aether Social",
    description: "Decentralized social media platform built on Web3 technologies.",
    longDescription: "A privacy-first social network giving users full control over their data. Aether Social uses IPFS for content storage and Ethereum smart contracts for identity management. It features a sleek, modern interface that abstracts away the complexity of blockchain technology.",
    image: "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tech: ["React", "Solidity", "IPFS", "Web3.js"],
    link: "#",
    github: "#",
    featured: false
  }
];

export const skills: Skill[] = [
  { name: "React / Next.js", level: 95, icon: Code2, category: "frontend" },
  { name: "TypeScript", level: 90, icon: Terminal, category: "frontend" },
  { name: "Three.js / R3F", level: 85, icon: Globe, category: "frontend" },
  { name: "Tailwind CSS", level: 95, icon: Palette, category: "design" },
  { name: "Node.js", level: 80, icon: Server, category: "backend" },
  { name: "PostgreSQL", level: 75, icon: Database, category: "backend" },
  { name: "GraphQL", level: 80, icon: Cloud, category: "backend" },
  { name: "Docker", level: 70, icon: Server, category: "tools" },
  { name: "Git", level: 90, icon: GitBranch, category: "tools" },
  { name: "Figma", level: 85, icon: Layout, category: "design" },
];

// Removed helper function


export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "TechNova Solutions",
    period: "2023 - Present",
    description: [
      "Lead frontend architecture for enterprise-scale SaaS applications.",
      "Implemented micro-frontend architecture reducing build times by 40%.",
      "Mentored junior developers and established code quality standards."
    ]
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Creative Pulse Agency",
    period: "2021 - 2023",
    description: [
      "Developed award-winning marketing sites with WebGL animations.",
      "Built custom CMS solutions using Node.js and React.",
      "Collaborated with designers to implement pixel-perfect UIs."
    ]
  },
  {
    id: "3",
    role: "Frontend Developer",
    company: "StartUp Inc.",
    period: "2019 - 2021",
    description: [
      "Key member of the founding engineering team.",
      "Built the MVP from scratch using React and Firebase.",
      "Optimized application performance achieving 98+ Lighthouse scores."
    ]
  }
];
