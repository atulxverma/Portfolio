import { Mail, Heart, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Atul's Portfolio</h3>
            <p className="text-gray-400 max-w-xs">
              Crafting digital experiences with code and creativity.
              Building the future one pixel at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/projects" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="/resume" className="text-gray-400 hover:text-purple-400 transition-colors">Resume</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">

              <a
                href="https://github.com/atulxverma"
                target="_blank"
                className="p-2 bg-white/5 rounded-full hover:bg-purple-600 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/atulxverma"
                target="_blank"
                className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:atulv9926@gmail.com"
                className="p-2 bg-white/5 rounded-full hover:bg-red-500 transition"
              >
                <Mail size={20} />
              </a>

            </div>

          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Atul's Portfolio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
