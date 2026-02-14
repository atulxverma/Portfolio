import { SectionWrapper } from "../components/ui/SectionWrapper";
import { SkillsMarquee } from "../components/ui/SkillsMarquee";
import { LogoSphere } from "../components/3d/LogoSphere";
import { motion } from "framer-motion";
import { Code2, Database, Server, Globe } from "lucide-react";

export function Skills() {

  return (

    <div className="pt-24 min-h-screen bg-black text-white relative">

      <SectionWrapper>


        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >

          <h1 className="text-5xl md:text-6xl font-bold mb-4">

            My <span className="text-purple-400">Skills</span>

          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">

            Technologies and tools I use to build modern,
            scalable, and high-performance web applications.

          </p>

        </motion.div>


        {/* MARQUEE */}
        <div className="mb-20">

          <SkillsMarquee />

        </div>


        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">


          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >


            {/* CARD 1 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-xl p-6 backdrop-blur-md hover:border-purple-500 transition-all">

              <Code2 className="text-purple-400 mb-3" />

              <h3 className="text-xl font-bold mb-2">
                Frontend Development
              </h3>

              <p className="text-gray-400">
                React, Next.js, TypeScript, Tailwind CSS,
                Framer Motion, Three.js
              </p>

            </div>


            {/* CARD 2 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-xl p-6 backdrop-blur-md hover:border-purple-500 transition-all">

              <Server className="text-purple-400 mb-3" />

              <h3 className="text-xl font-bold mb-2">
                Backend Development
              </h3>

              <p className="text-gray-400">
                Node.js, Express.js, Prisma, REST APIs,
                Authentication, Server Architecture
              </p>

            </div>


            {/* CARD 3 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-xl p-6 backdrop-blur-md hover:border-purple-500 transition-all">

              <Database className="text-purple-400 mb-3" />

              <h3 className="text-xl font-bold mb-2">
                Database
              </h3>

              <p className="text-gray-400">
                SQL, PostgreSQL, MongoDB, Supabase
              </p>

            </div>


            {/* CARD 4 */}
            <div className="bg-white/5 border border-purple-500/30 rounded-xl p-6 backdrop-blur-md hover:border-purple-500 transition-all">

              <Globe className="text-purple-400 mb-3" />

              <h3 className="text-xl font-bold mb-2">
                Tools & Others
              </h3>

              <p className="text-gray-400">
                Git, GitHub, Postman, VS Code,
                Deployment, Debugging
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-[500px] w-full flex items-center justify-center"
          >
            
            <LogoSphere />
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );

}
