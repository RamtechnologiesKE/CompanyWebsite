import { motion } from "framer-motion";
import aboutImg from "@/assets/images/about-business.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-square lg:aspect-[4/3]">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
              <img 
                src={aboutImg} 
                alt="Business professionals collaborating" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-slate-50 rounded-3xl -z-10 border border-slate-100"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-50 rounded-full -z-10"></div>
            
            {/* Overlay stat card */}
            <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:block">
              <div className="text-4xl font-bold text-primary font-heading mb-1">10+</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
              Driving Digital Transformation in Kenya
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Ramtechnologies is a Kenya-based ICT and software solutions company focused on helping institutions and businesses embrace digital transformation.
              </p>
              <p>
                We specialize in providing end-to-end technology infrastructure. Whether it's robust School Systems, precise Payroll solutions, far-reaching Bulk SMS platforms, secure Hosting services, expert ICT consultancy, or responsive Technical support, we build the foundation that lets you build your business.
              </p>
              
              <div className="p-6 bg-slate-50 border-l-4 border-accent rounded-r-2xl my-8">
                <p className="font-medium text-primary italic">
                  "Our mission is to deliver innovative, reliable, and affordable technology solutions that help organizations operate more efficiently and effectively."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "School Systems", "Payroll Solutions",
                  "Bulk SMS Platforms", "Hosting Services",
                  "ICT Consultancy", "Technical Support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-sm font-medium text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-accent mr-3"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
