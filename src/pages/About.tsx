import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { experiences } from "../lib/data";

export function About() {

  return (

    <div className="pt-24 min-h-screen bg-black text-white">

      <SectionWrapper>


        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">


          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-4xl md:text-5xl font-bold mb-6">

              About Me

            </h1>


            <p className="text-gray-400 text-lg mb-6 leading-relaxed">

              I am a passionate Frontend Developer specializing in React and Next.js.
              I enjoy building modern, scalable, and high-performance web applications
              with clean UI and optimized architecture.

            </p>


            <p className="text-gray-400 text-lg mb-8 leading-relaxed">

              Currently pursuing B.Tech in Computer Science (IoT) from Moradabad Institute
              of Technology. I have hands-on experience with modern technologies like
              Next.js, Prisma, GraphQL, Tailwind CSS, Express.js, SQL, and full-stack development.

            </p>



            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">

              <div className="p-4 bg-white/5 rounded-xl border border-white/10">

                <h3 className="text-3xl font-bold text-white mb-1">
                  10+
                </h3>

                <p className="text-sm text-gray-400">
                  Projects Built
                </p>

              </div>


              <div className="p-4 bg-white/5 rounded-xl border border-white/10">

                <h3 className="text-3xl font-bold text-white mb-1">
                  1+
                </h3>

                <p className="text-sm text-gray-400">
                  Internship Experience
                </p>

              </div>


            </div>


          </motion.div>



          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >


            {/* SAME BIG CONTAINER */}
            <div className="
            aspect-square
            rounded-2xl
            overflow-hidden
            relative
            z-10
            border-2
            border-white/10
            ">

              <img
                src="/atul.jpeg"
                alt="Atul Verma"
                className="
                w-full
                h-full
                object-cover
                object-top
                scale-[1.05]
                hover:scale-[1.08]
                transition-transform
                duration-500
                "
              />

            </div>


            {/* BORDER EFFECTS */}
            <div className="
            absolute
            -bottom-6
            -right-6
            w-full
            h-full
            border-2
            border-purple-500/30
            rounded-2xl
            z-0
            " />

            <div className="
            absolute
            -top-6
            -left-6
            w-full
            h-full
            border-2
            border-white/10
            rounded-2xl
            z-0
            " />

          </motion.div>


        </div>



        {/* EXPERIENCE */}
        <div className="mb-20">


          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">

            <Briefcase className="text-purple-400" />

            Experience

          </h2>


          <div className="space-y-8 relative border-l-2 border-white/10 ml-3 pl-8">


            {experiences.map((exp, index) => (

              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >

                <div className="
                bg-white/5
                p-6
                rounded-xl
                border
                border-white/10
                ">

                  <h3 className="text-xl font-bold text-white">

                    {exp.role}

                  </h3>


                  <p className="text-purple-400">

                    {exp.company}

                  </p>


                  <p className="text-sm text-gray-500 mb-3">

                    {exp.period}

                  </p>


                  <ul className="list-disc list-inside text-gray-400">

                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}

                  </ul>


                </div>


              </motion.div>

            ))}


          </div>


        </div>



        {/* EDUCATION + CERTIFICATIONS */}
        <div className="grid md:grid-cols-2 gap-8">


          {/* EDUCATION */}
          <div>


            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">

              <GraduationCap className="text-purple-400" />

              Education

            </h2>


            <div className="
            bg-white/5
            p-6
            rounded-xl
            border
            border-white/10
            ">

              <h3 className="text-lg font-bold text-white">

                B.Tech Computer Science (IoT)

              </h3>


              <p className="text-purple-400 mb-2">

                Moradabad Institute of Technology

              </p>


              <p className="text-sm text-gray-500">

                2022 - 2026

              </p>


              <p className="mt-4 text-gray-400">

                Focused on Full Stack Development, Backend Development,
                Database Management, and modern web technologies.

              </p>


            </div>


          </div>



          {/* CERTIFICATIONS */}
          <div>

            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">

              <Award className="text-purple-400" />

              Certifications

            </h2>


            <div className="
  bg-white/5
  p-6
  rounded-xl
  border
  border-white/10
  space-y-6
  ">


              {/* Python */}
              <div>

                <h3 className="font-semibold text-white">

                  PCAP: Programming Essentials in Python

                </h3>

                <p className="text-sm text-purple-400">

                  Cisco Networking Academy & OpenEDG Python Institute • Oct 2023

                </p>

                <p className="text-sm text-gray-400 mt-2">

                  Learned Python fundamentals including data structures, functions,
                  OOP, file handling, and debugging real-world programs.

                </p>

              </div>



              {/* IoT */}
              <div>

                <h3 className="font-semibold text-white">

                  What is IoT?

                </h3>

                <p className="text-sm text-purple-400">

                  Great Learning Academy • 2023

                </p>

                <p className="text-sm text-gray-400 mt-2">

                  Understood IoT architecture, applications, smart systems,
                  and real-world industry use cases.

                </p>

              </div>



              {/* Arduino */}
              <div>

                <h3 className="font-semibold text-white">

                  Arduino Training

                </h3>

                <p className="text-sm text-purple-400">

                  IIT Bombay Spoken Tutorial • Nov 2024

                </p>

                <p className="text-sm text-gray-400 mt-2">

                  Worked with Arduino microcontrollers, electronics,
                  circuit design, and hardware interfacing.

                </p>

              </div>


            </div>

          </div>

        </div>
      </SectionWrapper>
    </div>

  );
}
