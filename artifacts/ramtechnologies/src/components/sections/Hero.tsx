import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroBg from "@/assets/images/hero-school.jpg";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10" />
        <img 
          src={heroBg} 
          alt="Students in modern classroom" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted Technology Partner in Kenya
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Smart ICT & Software Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">Schools and Businesses</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Ramtechnologies provides reliable ICT support, software systems, bulk SMS solutions, hosting services, and digital transformation tools for schools, SMEs, SACCOs, and organizations across Kenya.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-base rounded-full shadow-[0_8px_30px_rgb(249,115,22,0.3)]"
              onClick={() => scrollTo("contact")}
            >
              Request a Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 h-14 px-8 text-base rounded-full backdrop-blur-sm"
              onClick={() => scrollTo("contact")}
            >
              Contact Us
            </Button>

            <a 
              href="https://wa.me/254721934498" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Support
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
}
