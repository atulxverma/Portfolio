import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { SectionWrapper } from "../components/ui/SectionWrapper";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
      
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      <SectionWrapper>
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let's <span className="text-purple-400">Connect</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? 
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Email Me</h4>
                    <a href="mailto:hello@devportfolio.com" className="text-gray-400 hover:text-white transition-colors">
                      hello@devportfolio.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Location</h4>
                    <p className="text-gray-400">San Francisco, CA (Remote available)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Call Me</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Looking for a Freelancer?</h3>
              <p className="text-gray-400 mb-6">
                I'm currently available for freelance projects. 
                If you have a project that needs some creative touch, let's talk.
              </p>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-green-400 font-medium">Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSent}
                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                  isSent 
                    ? "bg-green-600 text-white cursor-default" 
                    : "bg-white text-black hover:bg-gray-200"
                } ${isSubmitting ? "opacity-70 cursor-wait" : ""}`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : isSent ? (
                  "Message Sent!"
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </SectionWrapper>
    </div>
  );
}
