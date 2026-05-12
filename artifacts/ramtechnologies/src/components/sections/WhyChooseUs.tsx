import { motion } from "framer-motion";
import { HeadphonesIcon, Trophy, Coins, Settings, Cpu } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <HeadphonesIcon className="w-6 h-6 text-white" />,
      title: "Reliable Support",
      desc: "We provide timely and dependable technical assistance whenever you need it."
    },
    {
      icon: <Trophy className="w-6 h-6 text-white" />,
      title: "Industry Experience",
      desc: "With years of ICT and software support experience, we understand real organizational challenges."
    },
    {
      icon: <Coins className="w-6 h-6 text-white" />,
      title: "Affordable Solutions",
      desc: "We offer cost-effective solutions tailored for schools and growing businesses."
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Customized Systems",
      desc: "Our solutions are designed around your unique operational needs."
    },
    {
      icon: <Cpu className="w-6 h-6 text-white" />,
      title: "Modern Technology",
      desc: "We leverage modern systems and integrations to improve efficiency and communication."
    }
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">Why Ramtechnologies</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading mb-8 leading-tight">
              A Partner You Can Trust With Your Technology
            </h3>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We don't just sell software; we build long-term relationships with our clients. 
              Our commitment is to ensure your technology works seamlessly so you can focus 
              on running your institution.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold font-heading text-white mb-2">500+</div>
                <div className="text-sm text-slate-400">Institutions Served</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading text-white mb-2">99%</div>
                <div className="text-sm text-slate-400">Uptime Reliability</div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading text-white mb-2">24/7</div>
                <div className="text-sm text-slate-400">Technical Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {reasons.map((reason, i) => (
              <div key={i} className="flex bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 mr-6 shadow-lg shadow-accent/20">
                  {reason.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold font-heading mb-2">{reason.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
