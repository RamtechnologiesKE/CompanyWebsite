import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users } from "lucide-react";

export function Welcome() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Welcome to Ramtechnologies</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-8 leading-tight">
              Simplifying operations through <span className="relative">
                <span className="relative z-10 text-accent">technology</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/20 z-0 -rotate-1"></span>
              </span>
            </h3>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-16">
              At Ramtechnologies, we help schools and businesses simplify operations through technology. 
              From ICT support and hosting services to payroll systems, bulk SMS platforms, and school 
              management solutions, we provide dependable solutions tailored to your organization's needs. 
              Our goal is to help institutions improve efficiency, communication, security, and service 
              delivery through modern and affordable technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Efficiency",
                desc: "Streamline workflows and save valuable administrative time."
              },
              {
                icon: <Users className="w-8 h-8 text-accent" />,
                title: "Communication",
                desc: "Connect seamlessly with staff, parents, and stakeholders."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-accent" />,
                title: "Security",
                desc: "Keep your institutional data safe, backed up, and accessible."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold font-heading text-primary mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
