import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { type Project } from "../../lib/data";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors duration-500"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>
      
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
            <p className="text-gray-400 line-clamp-2">{project.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-medium px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          </div>
          <Link 
            to={`/projects/${project.id}`}
            className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            Details <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
