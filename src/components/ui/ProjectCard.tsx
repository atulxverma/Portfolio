import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { type Project } from "../../lib/data";
import { Link } from "react-router-dom";
import { useRef } from "react";


interface ProjectCardProps {
  project: Project;
  index: number;
}


export function ProjectCard({ project, index }: ProjectCardProps) {

  const cardRef = useRef<HTMLDivElement>(null);


  // tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  };


  const handleMouseLeave = () => {

    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };


  return (

    <motion.div

      ref={cardRef}

      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}

      transition={{
        delay: index * 0.1,
        duration: 0.5,
      }}

      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

      className="
      group
      relative
      bg-gradient-to-br
      from-white/5
      to-white/0
      border
      border-white/10
      rounded-2xl
      overflow-hidden
      transition-all
      duration-300
      hover:border-purple-500/60
      hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
      "

    >


      {/* glow overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-xl" />

      </div>



      {/* image */}
      <div className="aspect-video overflow-hidden relative">

        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />


        <div className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/80
        via-black/20
        to-transparent
        opacity-70
        group-hover:opacity-40
        transition-opacity
        " />

      </div>



      {/* content */}
      <div className="p-6 relative flex flex-col h-full">


        {/* title */}
        <h3 className="
        text-2xl
        font-bold
        text-white
        mb-2
        group-hover:text-purple-400
        transition-colors
        ">
          {project.title}
        </h3>


        {/* description */}
        <p className="text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>



        {/* tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="
              text-xs
              px-3
              py-1
              rounded-full
              bg-white/5
              border
              border-white/10
              text-gray-300
              hover:border-purple-500/50
              transition-all
              "
            >
              {tech}
            </span>

          ))}

        </div>



        {/* footer */}
        <div className="flex items-center justify-between mt-auto">


          {/* icons */}
          <div className="flex gap-4">

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-gray-400
              hover:text-purple-400
              transition-colors
              "
            >
              <Github size={20} />
            </a>


            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
              text-gray-400
              hover:text-purple-400
              transition-colors
              "
            >
              <ExternalLink size={20} />
            </a>

          </div>



          {/* details link */}
          <Link
            to={`/projects/${project.id}`}
            className="
          
glass
rounded-xl
p-6
hover:glow-blue
transition-all
duration-300
"

          >

            Details

            <ArrowRight size={16} />

          </Link>


        </div>

      </div>

    </motion.div>

  );
}
