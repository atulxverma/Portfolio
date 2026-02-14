import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "../../lib/utils";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];


export function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);


  return (

    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-purple-500/5"
          : "bg-transparent"
      )}
    >

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
        >

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-purple-500/30">
            <Code2 size={20} />
          </div>

          <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-white via-purple-300 to-purple-500 text-transparent bg-clip-text">
            Atul.dev
          </span>

        </Link>



        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => {

            const isActive = location.pathname === link.path;

            return (

              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >

                {link.name}

                {/* Animated underline */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-purple-400 to-pink-500"
                  />
                )}

              </Link>

            );

          })}



          {/* Resume Button */}
          <Link
            to="/resume"
            className="relative px-5 py-2 rounded-full text-sm font-medium border border-purple-500/30 hover:border-purple-400 transition-all duration-300 overflow-hidden group"
          >

            <span className="relative z-10">
              Resume
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

          </Link>

        </div>



        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>


      </div>



      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >

            <div className="flex flex-col p-6 gap-4">

              {navLinks.map((link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    location.pathname === link.path
                      ? "text-purple-400"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>

              ))}


              <Link
                to="/resume"
                className="mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center rounded-lg font-bold"
              >
                Download Resume
              </Link>


            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>

  );
}
