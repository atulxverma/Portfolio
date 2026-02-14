import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">DevPortfolio</h3>
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
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-purple-600 transition-colors text-white">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-500 transition-colors text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-700 transition-colors text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-red-500 transition-colors text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 DevPortfolio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
