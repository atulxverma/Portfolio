import {
  type LucideIcon,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
  Globe,
  Cloud,
  Palette,
  GitBranch
} from "lucide-react";

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


// ✅ YOUR REAL PROJECTS

export const projects: Project[] = [

  {
    id: "1",
    title: "Job Finder App",
    description: "Modern job search platform with dynamic routing and real-time search.",
    longDescription:
      "Built a fully responsive job discovery platform using Next.js and Prisma. Implemented dynamic job detail pages, search functionality, and clean UI using Tailwind CSS and Shadcn UI.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "Shadcn UI"],
    link: "#",
    github: "https://github.com/atulxverma",
    featured: true
  },

  {
    id: "2",
    title: "Aurora E-Commerce Store",
    description: "Full-stack e-commerce platform with seller and buyer dashboard.",
    longDescription:
      "Developed a dual-role e-commerce platform using Next.js, Prisma, and Tailwind. Built product listing, seller dashboard, and scalable architecture.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    tech: ["Next.js", "Prisma", "Tailwind", "PostgreSQL"],
    link: "#",
    github: "https://github.com/atulxverma",
    featured: true
  },

  {
    id: "3",
    title: "HealthStats AI",
    description: "AI-powered health tracking dashboard with real-time data.",
    longDescription:
      "Created an AI-based health tracking system using React, Zustand, and Supabase. Includes BMI analysis, calorie tracking, and personalized recommendations.",
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
    tech: ["React", "Zustand", "Supabase", "Tailwind"],
    link: "#",
    github: "https://github.com/atulxverma",
    featured: true
  },

  {
    id: "4",
    title: "Amazon Clone",
    description: "Production-level Amazon UI clone using React and Tailwind.",
    longDescription:
      "Built scalable Amazon UI with reusable components and real-time product search using DummyJSON API.",
    image: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg",
    tech: ["React", "Tailwind", "API"],
    link: "#",
    github: "https://github.com/atulxverma",
    featured: false
  }

];



// ✅ YOUR REAL SKILLS

export const skills: Skill[] = [

  // FRONTEND
  {
    name: "React.js",
    level: 90,
    icon: Code2,
    category: "frontend",
  },

  {
    name: "Next.js",
    level: 90,
    icon: Globe,
    category: "frontend",
  },

  {
    name: "TypeScript",
    level: 80,
    icon: Terminal,
    category: "frontend",
  },

  {
    name: "Tailwind CSS",
    level: 95,
    icon: Palette,
    category: "frontend",
  },

  {
    name: "Framer Motion",
    level: 80,
    icon: Layout,
    category: "frontend",
  },



  // BACKEND
  {
    name: "Node.js",
    level: 80,
    icon: Server,
    category: "backend",
  },

  {
    name: "Express.js",
    level: 80,
    icon: Server,
    category: "backend",
  },

  {
    name: "Prisma",
    level: 75,
    icon: Database,
    category: "backend",
  },

  {
    name: "GraphQL",
    level: 70,
    icon: Cloud,
    category: "backend",
  },

  {
    name: "SQL",
    level: 75,
    icon: Database,
    category: "backend",
  },



  // TOOLS
  {
    name: "Git",
    level: 90,
    icon: GitBranch,
    category: "tools",
  },

  {
    name: "Postman",
    level: 85,
    icon: Terminal,
    category: "tools",
  },

  {
    name: "Docker",
    level: 65,
    icon: Server,
    category: "tools",
  },

  {
    name: "VS Code",
    level: 95,
    icon: Code2,
    category: "tools",
  },



  // DESIGN
  {
    name: "Figma",
    level: 70,
    icon: Layout,
    category: "design",
  },

];





// ✅ YOUR REAL EXPERIENCE

export const experiences: Experience[] = [

  {
    id: "1",
    role: "Web Development Intern",
    company: "Explorin",
    period: "July 2025 – Aug 2025",
    description: [
      "Worked on full-stack development using Next.js, Prisma, and GraphQL.",
      "Built APIs and integrated frontend with backend systems.",
      "Learned production-level project structure and optimization."
    ]
  }

];
