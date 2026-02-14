import { motion } from "framer-motion";
import { skills } from "../lib/data";
import { SectionWrapper } from "../components/ui/SectionWrapper";

export function Skills() {
  const categories = ["frontend", "backend", "tools", "design"];

  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <SectionWrapper>
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Technical <span className="text-purple-400">Arsenal</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated list of technologies I use to build robust and scalable applications.
            Always learning, always evolving.
          </p>
        </div>

        <div className="grid gap-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(s => s.category === category);
            
            if (categorySkills.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="text-2xl font-bold mb-6 capitalize flex items-center gap-3 border-b border-white/10 pb-4">
                  {category} <span className="text-sm font-normal text-gray-500 ml-auto">{categorySkills.length} skills</span>
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-black/50 rounded-lg text-purple-400 group-hover:text-white transition-colors">
                          <skill.icon size={24} />
                        </div>
                        <h3 className="font-bold text-lg">{skill.name}</h3>
                      </div>
                      
                      <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
                        />
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-gray-500">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
