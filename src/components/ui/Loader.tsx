import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />

      {/* Loader content */}
      <div className="relative flex flex-col items-center gap-8">

        {/* Logo / Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-4xl md:text-5xl font-bold
            bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600
            bg-clip-text text-transparent
            tracking-widest
          "
        >
          ATUL VERMA
        </motion.h1>

        {/* Animated bar */}
        <div className="w-64 h-[3px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
            className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-purple-300 blur-[1px]"
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-gray-400 tracking-widest text-sm"
        >
          LOADING EXPERIENCE
        </motion.p>

      </div>

    </div>
  );
}
