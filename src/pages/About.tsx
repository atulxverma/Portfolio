import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { experiences } from "../lib/data";

export function About() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              More Than Just <br />
              <span className="text-purple-400">Lines of Code</span>
            </h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I'm a passionate creative developer with a keen eye for design and a drive for perfection. 
              My journey began 5 years ago when I first discovered the power of web technologies to bring ideas to life.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Since then, I've worked with startups and established companies to build scalable, 
              high-performance applications that users love. I specialize in the React ecosystem 
              but I'm always exploring new technologies to stay ahead of the curve.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-1">5+</h3>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-1">50+</h3>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative z-10 border-2 border-white/10">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Profile" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-purple-500/30 rounded-2xl z-0" />
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-white/10 rounded-2xl z-0" />
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-purple-400" /> Experience
          </h2>
          
          <div className="space-y-8 relative border-l-2 border-white/10 ml-3 pl-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-black border-4 border-purple-500" />
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-purple-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-mono mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Education & Certs */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="text-purple-400" /> Education
            </h2>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-lg font-bold text-white">BS Computer Science</h3>
              <p className="text-purple-400 mb-2">University of Technology</p>
              <p className="text-sm text-gray-500">2015 - 2019</p>
              <p className="mt-4 text-gray-400">
                Specialized in Software Engineering and Human-Computer Interaction.
                Graduated with Honors.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-purple-400" /> Awards
            </h2>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-300">Awwwards Site of the Day</span>
                  <span className="text-sm text-purple-400">2023</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-300">CSS Design Awards Winner</span>
                  <span className="text-sm text-purple-400">2022</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-300">Best UI/UX - Hackathon</span>
                  <span className="text-sm text-purple-400">2021</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
