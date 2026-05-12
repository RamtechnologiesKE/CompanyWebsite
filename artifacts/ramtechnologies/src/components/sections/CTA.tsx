import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "@/context/DemoModalContext";

export function CTA() {
  const { openModal } = useDemoModal();

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
    <section className="py-24 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-primary z-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]" />
      </div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-8 leading-tight">
            Ready to Transform Your Organization with Technology?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let Ramtechnologies help you streamline operations, improve communication, and grow with modern digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white h-14 px-8 text-base rounded-full shadow-[0_8px_30px_rgb(249,115,22,0.3)]"
              onClick={openModal}
              data-testid="button-request-demo-cta"
            >
              Request Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent hover:bg-white/10 text-white border-white/30 h-14 px-8 text-base rounded-full"
              onClick={() => scrollTo("contact")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
