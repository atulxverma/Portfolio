import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";

import { HeroCanvas } from "../components/3d/HeroCanvas";
import { AnimatedButton } from "../components/ui/AnimatedButton";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { ProjectCard } from "../components/ui/ProjectCard";

import { projects } from "../lib/data";


export function Home() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };


  return (

    <div className="bg-black text-white overflow-hidden">


      {/* ================= HERO SECTION ================= */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">


        {/* 3D Background */}
        <HeroCanvas />


        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-[1]" />


        {/* Hero Content */}
        <div
          className="
          relative 
          z-10 

          max-w-4xl 
          mx-auto 

          px-6 

          text-center 

          bg-black/40
          backdrop-blur-md

          border border-white/10

          rounded-2xl

          p-8

          shadow-[0_0_50px_rgba(0,0,0,0.6)]
          "
        >

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >


            {/* Subtitle */}
            <motion.h2
              variants={item}
              className="
              text-purple-400 
              font-medium 
              tracking-widest 
              mb-4 
              uppercase 
              text-sm md:text-base
              "
            >
              Frontend Architect & Creative Developer
            </motion.h2>



            {/* Heading */}
            <motion.h1
              variants={item}
              className="
              text-5xl md:text-7xl lg:text-8xl 
              font-bold 
              mb-6 
              leading-tight
              "
            >

              <span
                className="
                text-white
                drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]
                "
              >
                Building Digital
              </span>

              <br />

              <span
                className="
                bg-gradient-to-r
                from-purple-400
                via-pink-400
                to-purple-500

                text-transparent
                bg-clip-text

                drop-shadow-[0_0_25px_rgba(168,85,247,0.9)]
                "
              >
                Masterpieces
              </span>

            </motion.h1>



            {/* Description */}
            <motion.p
              variants={item}
              className="
              text-gray-200
              text-lg md:text-xl 
              max-w-2xl 
              mx-auto 
              mb-10 
              leading-relaxed

              drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]
              "
            >
              I craft immersive, high-performance web experiences using modern
              technologies, 3D graphics, and creative engineering to deliver
              stunning digital products.
            </motion.p>



            {/* Buttons */}
            <motion.div
              variants={item}
              className="
              flex 
              flex-col md:flex-row 
              gap-4 
              justify-center 
              items-center
              "
            >

              <AnimatedButton href="/projects" variant="primary">
                View Projects <ArrowRight size={18} />
              </AnimatedButton>


              <AnimatedButton href="/resume" variant="outline">
                Download CV <Download size={18} />
              </AnimatedButton>


            </motion.div>


          </motion.div>


        </div>



        {/* Scroll indicator */}
        <motion.div
          className="
          absolute 
          bottom-10 
          left-1/2 
          -translate-x-1/2 
          z-10 
          text-white/40
          "
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <ChevronDown size={32} />
        </motion.div>


      </section>



      {/* ================= PROJECT SECTION ================= */}

      <SectionWrapper className="bg-black/40 relative z-10 backdrop-blur-sm">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >


          <div className="flex justify-between items-end mb-12">


            <div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Work
              </h2>

              <p className="text-gray-400 max-w-lg">
                A curated selection of projects demonstrating my expertise in
                modern web technologies and interactive design.
              </p>

            </div>


            <AnimatedButton
              href="/projects"
              variant="outline"
              className="hidden md:flex"
            >
              View All Projects
            </AnimatedButton>


          </div>


        </motion.div>



        <div className="grid md:grid-cols-2 gap-8">

          {projects
            .filter((p) => p.featured)
            .map((project, index) => (

              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />

            ))}

        </div>



      </SectionWrapper>



      {/* ================= TECH STACK ================= */}

      <div className="
      py-20 
      bg-gradient-to-b 
      from-black 
      to-purple-900/20 

      border-y 
      border-white/5
      ">


        <div className="
        max-w-7xl 
        mx-auto 
        px-6 
        text-center 
        mb-12
        ">

          <h2 className="
          text-2xl 
          font-bold 
          text-gray-400 
          uppercase 
          tracking-widest
          ">
            Tech Stack
          </h2>

        </div>



        <div className="
        relative 
        flex 
        overflow-x-hidden
        ">


          <div className="
          animate-marquee 
          whitespace-nowrap 
          flex 
          gap-16 
          py-4
          ">


            {[
              "React",
              "Next.js",
              "TypeScript",
              "Three.js",
              "Tailwind",
              "Node.js",
              "GraphQL",
              "PostgreSQL",
              "AWS",
              "Docker",
            ].map((skill) => (

              <span
                key={skill}
                className="
                text-4xl md:text-6xl 
                font-bold 
                text-white/10 
                hover:text-purple-400 
                transition-all
                "
              >
                {skill}
              </span>

            ))}


          </div>


        </div>


      </div>



    </div>

  );
}
