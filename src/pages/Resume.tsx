import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap } from "lucide-react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { AnimatedButton } from "../components/ui/AnimatedButton";

export function Resume() {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <SectionWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            My <span className="text-purple-400">Resume</span>
          </motion.h1>
          
          <AnimatedButton 
            onClick={() => window.print()}
            variant="primary"
            className="flex items-center gap-2"
          >
            Download PDF <Download size={18} />
          </AnimatedButton>
        </div>

        <div className="bg-white text-black p-8 md:p-16 rounded-xl shadow-2xl max-w-4xl mx-auto">
          {/* Header */}
          <div className="border-b-2 border-gray-200 pb-8 mb-8 flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Alex Dev</h1>
              <p className="text-xl text-purple-600 font-medium">Senior Frontend Architect</p>
            </div>
            <div className="text-right text-gray-600">
              <p>San Francisco, CA</p>
              <p>hello@devportfolio.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
              Professional Summary
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Award-winning Creative Developer with 5+ years of experience in building high-performance web applications. 
              Specialized in React, Next.js, and 3D web graphics. Proven track record of delivering scalable solutions 
              for enterprise clients and startups. Passionate about user experience, accessibility, and modern design trends.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-6 border-b border-gray-200 pb-2 flex items-center gap-2">
              <Briefcase size={20} /> Experience
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Senior Frontend Engineer</h4>
                  <span className="text-gray-600 font-medium">2023 - Present</span>
                </div>
                <p className="text-purple-600 font-medium mb-2">TechNova Solutions</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Lead frontend architecture for enterprise-scale SaaS applications serving 1M+ users.</li>
                  <li>Implemented micro-frontend architecture reducing build times by 40%.</li>
                  <li>Mentored junior developers and established code quality standards.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-xl font-bold text-gray-900">Full Stack Developer</h4>
                  <span className="text-gray-600 font-medium">2021 - 2023</span>
                </div>
                <p className="text-purple-600 font-medium mb-2">Creative Pulse Agency</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Developed award-winning marketing sites with WebGL animations using Three.js.</li>
                  <li>Built custom CMS solutions using Node.js and React.</li>
                  <li>Collaborated with designers to implement pixel-perfect UIs.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
              <FileText size={20} /> Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>
                <span className="font-bold block mb-1">Frontend:</span>
                React, Next.js, TypeScript, Tailwind CSS, Three.js, Framer Motion
              </div>
              <div>
                <span className="font-bold block mb-1">Backend:</span>
                Node.js, Express, PostgreSQL, GraphQL, Firebase, AWS
              </div>
              <div>
                <span className="font-bold block mb-1">Tools:</span>
                Git, Docker, Webpack, Vite, Figma, Jest
              </div>
              <div>
                <span className="font-bold block mb-1">Soft Skills:</span>
                Leadership, Mentoring, Agile Methodology, Communication
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
              <GraduationCap size={20} /> Education
            </h3>
            <div>
              <div className="flex justify-between items-baseline">
                <h4 className="text-lg font-bold text-gray-900">BS Computer Science</h4>
                <span className="text-gray-600">2015 - 2019</span>
              </div>
              <p className="text-purple-600">University of Technology</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
