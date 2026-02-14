import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects } from "../lib/data";
import { ProjectCard } from "../components/ui/ProjectCard";
import { SectionWrapper } from "../components/ui/SectionWrapper";

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.tech.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const allTech = Array.from(new Set(projects.flatMap((p) => p.tech)));

  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <SectionWrapper>
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            My <span className="text-purple-400">Projects</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my recent work, side projects, and experiments.
            Each project is built with a focus on performance, accessibility, and user experience.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            <input 
              type="text" 
              placeholder="Search projects..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-purple-500 transition-colors text-white placeholder-gray-500"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            <button 
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === "all" ? "bg-purple-600 text-white" : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              All
            </button>
            {allTech.map((tech) => (
              <button 
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === tech ? "bg-purple-600 text-white" : "bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              No projects found matching your criteria.
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
