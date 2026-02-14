import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiPostman,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiCplusplus,
  SiBootstrap,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";





// EXACT SKILLS LIKE SCREENSHOT
const skills = [

  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Python", icon: FaPython, color: "#FFD43B" },
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "VS Code", icon: VscVscode, color: "#007ACC" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "Git", icon: FaGitAlt, color: "#F1502F" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },

  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "React.js", icon: FaReact, color: "#61DBFB" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Firebase", icon: SiFirebase, color: "#FFA611" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Prisma", icon: SiPrisma, color: "#00e599" },
  { name: "Node.js", icon: FaNodeJs, color: "#3C873A" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },

];


// PILL CARD
function SkillPill({ skill }: any) {

  const Icon = skill.icon;

  return (

    <div
      className="
      flex items-center gap-3
      px-6 py-3
      rounded-full

      border border-purple-500
      bg-purple-900/20

      hover:bg-purple-900/30
      hover:border-purple-400

      shadow-[0_0_10px_rgba(168,85,247,0.5)]
      hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]

      transition-all duration-300

      whitespace-nowrap
      "
    >

      <Icon size={22} color={skill.color} />

      <span className="text-gray-200 font-medium">
        {skill.name}
      </span>

    </div>

  );

}


// MAIN COMPONENT
export function SkillsMarquee() {

  return (

    <div className="overflow-hidden space-y-6">


      {/* LINE 1 */}
      <div className="flex animate-marquee gap-6 w-max">

        {[...skills, ...skills].map((skill, i) => (

          <SkillPill key={i} skill={skill} />

        ))}

      </div>


      {/* LINE 2 */}
      <div className="flex animate-marquee-reverse gap-6 w-max">

        {[...skills, ...skills].map((skill, i) => (

          <SkillPill key={i} skill={skill} />

        ))}

      </div>


    </div>

  );

}
