import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { HeroCanvas } from "../components/3d/HeroCanvas";
import { AnimatedButton } from "../components/ui/AnimatedButton";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { ProjectCard } from "../components/ui/ProjectCard";
import { projects } from "../lib/data";

export function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroCanvas />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-purple-400 font-medium tracking-wider mb-4 uppercase text-sm md:text-base">
              Frontend Architect & Creative Developer
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
              Building Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Masterpieces
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              I craft immersive web experiences that blend art, technology, and performance. 
              Transforming complex problems into elegant, interactive solutions.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <AnimatedButton href="/projects" variant="primary">
                View Projects <ArrowRight size={18} />
              </AnimatedButton>
              <AnimatedButton href="/resume" variant="outline">
                Download CV <Download size={18} />
              </AnimatedButton>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <SectionWrapper className="bg-black/50 relative z-10 backdrop-blur-sm">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-lg">
              A selection of projects that showcase my passion for design and development.
            </p>
          </div>
          <AnimatedButton href="/projects" variant="outline" className="hidden md:flex">
            View All Projects
          </AnimatedButton>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-8 md:hidden flex justify-center">
          <AnimatedButton href="/projects" variant="outline">
            View All Projects
          </AnimatedButton>
        </div>
      </SectionWrapper>

      {/* Skills Marquee (Simplified for now) */}
      <div className="py-20 bg-gradient-to-b from-black to-purple-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Tech Stack</h2>
        </div>
        
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex gap-16 py-4">
            {["React", "Next.js", "TypeScript", "Three.js", "Tailwind", "Node.js", "GraphQL", "PostgreSQL", "AWS", "Docker"].map((skill) => (
              <span key={skill} className="text-4xl md:text-6xl font-bold text-white/10 hover:text-white/30 transition-colors cursor-default">
                {skill}
              </span>
            ))}
            {["React", "Next.js", "TypeScript", "Three.js", "Tailwind", "Node.js", "GraphQL", "PostgreSQL", "AWS", "Docker"].map((skill) => (
              <span key={`${skill}-dup`} className="text-4xl md:text-6xl font-bold text-white/10 hover:text-white/30 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
