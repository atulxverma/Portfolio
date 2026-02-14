import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Calendar, Layers, Code2 } from "lucide-react";
import { projects } from "../lib/data";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { AnimatedButton } from "../components/ui/AnimatedButton";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-purple-400 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-black text-white pb-20">
      <SectionWrapper>
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Projects
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <AnimatedButton href={project.link} variant="primary">
                Live Demo <ExternalLink size={18} />
              </AnimatedButton>
              <AnimatedButton href={project.github} variant="outline">
                Source Code <Github size={18} />
              </AnimatedButton>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Calendar size={14} /> Year
                </h3>
                <p className="text-lg font-medium">2024</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Layers size={14} /> Role
                </h3>
                <p className="text-lg font-medium">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold">Project Overview</h2>
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="text-lg leading-relaxed">{project.longDescription}</p>
              <p className="text-lg leading-relaxed mt-4">
                The challenge was to create a seamless user experience while handling complex data structures.
                By leveraging modern web technologies, we were able to achieve sub-second load times and
                smooth interactions across all devices.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Real-time data synchronization", 
                  "Responsive mobile-first design", 
                  "Dark mode support", 
                  "Optimized performance (Lighthouse 90+)",
                  "Secure authentication flow",
                  "Interactive data visualization"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 bg-white/5 p-4 rounded-lg border border-white/5">
                    <div className="mt-1 w-2 h-2 rounded-full bg-purple-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="text-purple-400" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 bg-black/50 border border-white/10 rounded-lg text-sm text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
