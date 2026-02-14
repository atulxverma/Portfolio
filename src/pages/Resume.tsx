import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Briefcase,
  GraduationCap,
  Folder
} from "lucide-react";

import { SectionWrapper } from "../components/ui/SectionWrapper";
import { AnimatedButton } from "../components/ui/AnimatedButton";

export function Resume() {

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Atul_Verma_Resume.pdf";
    link.download = "Atul_Verma_Resume.pdf";
    link.click();
  };



  return (

    <div className="pt-24 min-h-screen bg-black text-white">

      <SectionWrapper>


        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            My <span className="text-purple-400">Resume</span>
          </motion.h1>


          <AnimatedButton
            onClick={downloadResume}
            variant="primary"
          >
            Download PDF
          </AnimatedButton>


        </div>



        {/* Resume Container */}
        <div className="
        bg-white 
        text-black 
        p-8 md:p-16 
        rounded-xl 
        shadow-2xl 
        max-w-4xl 
        mx-auto
        ">



          {/* Profile */}
          <div className="border-b pb-8 mb-8 flex justify-between">

            <div>

              <h1 className="text-4xl font-bold">
                Atul Verma
              </h1>

              <p className="text-purple-600 font-medium">
                Frontend Developer | Next.js Developer
              </p>

            </div>


            <div className="text-right text-gray-600">

              <p>Moradabad, Uttar Pradesh</p>

              <p>atulv9926@gmail.com</p>

              <p>+91 9528148549</p>

            </div>


          </div>



          {/* Summary */}
          <div className="mb-8">

            <h3 className="font-bold uppercase mb-3 flex items-center gap-2">
              <FileText size={18} /> Summary
            </h3>

            <p className="text-gray-700">

              Passionate Frontend Developer specializing in React and Next.js.
              Experienced in building modern, scalable web applications with
              clean UI and optimized performance. Strong foundation in full-stack
              development using Prisma, GraphQL, and modern frontend tools.

            </p>

          </div>



          {/* Experience */}
          <div className="mb-8">

            <h3 className="font-bold uppercase mb-3 flex items-center gap-2">
              <Briefcase size={18} /> Experience
            </h3>


            <div>

              <div className="flex justify-between">

                <h4 className="font-bold">
                  Web Development Intern
                </h4>

                <span className="text-gray-600">
                  July 2025 – Aug 2025
                </span>

              </div>


              <p className="text-purple-600">
                Explorin
              </p>


              <ul className="list-disc list-inside text-gray-700">

                <li>
                  Worked with Next.js, Prisma, and GraphQL.
                </li>

                <li>
                  Built APIs and integrated frontend with backend.
                </li>

                <li>
                  Learned production-level architecture and optimization.
                </li>

              </ul>


            </div>


          </div>



          {/* Projects */}
          <div className="mb-8">

            <h3 className="font-bold uppercase mb-3 flex items-center gap-2">
              <Folder size={18} /> Projects
            </h3>


            <div className="space-y-4">


              <div>

                <h4 className="font-bold">
                  Job Finder App
                </h4>

                <p className="text-gray-700">
                  Built using Next.js, Prisma, and Tailwind CSS with dynamic routing and real-time search.
                </p>

              </div>


              <div>

                <h4 className="font-bold">
                  Aurora E-Commerce Store
                </h4>

                <p className="text-gray-700">
                  Full-stack e-commerce platform with seller dashboard built using Next.js and Prisma.
                </p>

              </div>


              <div>

                <h4 className="font-bold">
                  HealthStats AI
                </h4>

                <p className="text-gray-700">
                  AI-powered health tracking dashboard using React, Zustand, and Supabase.
                </p>

              </div>


              <div>

                <h4 className="font-bold">
                  Amazon Clone
                </h4>

                <p className="text-gray-700">
                  Built scalable Amazon UI using React and Tailwind CSS with reusable components.
                </p>

              </div>


            </div>


          </div>



          {/* Skills */}
          <div className="mb-8">

            <h3 className="font-bold uppercase mb-3">
              Technical Skills
            </h3>


            <p>
              <b>Frontend:</b>
              React, Next.js, TypeScript, Tailwind CSS
            </p>


            <p>
              <b>Backend:</b>
              Node.js, Prisma, GraphQL
            </p>


            <p>
              <b>Tools:</b>
              Git, GitHub, VS Code
            </p>


          </div>



          {/* Education */}
          <div>

            <h3 className="font-bold uppercase mb-3 flex items-center gap-2">
              <GraduationCap size={18} /> Education
            </h3>


            <div>

              <div className="flex justify-between">

                <h4 className="font-bold">
                  B.Tech Computer Science (IoT)
                </h4>

                <span>
                  2022 – 2026
                </span>

              </div>


              <p className="text-purple-600">
                Moradabad Institute of Technology
              </p>


              <p>
                CGPA: 8.0
              </p>


            </div>


          </div>


        </div>


      </SectionWrapper>


    </div>

  );
}
