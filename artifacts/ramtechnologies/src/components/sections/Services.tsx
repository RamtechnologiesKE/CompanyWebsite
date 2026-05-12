import { motion } from "framer-motion";
import { GraduationCap, MessageSquare, Calculator, Globe, MonitorCog, Fingerprint, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "School Management Solutions",
    description: "Comprehensive software to manage all aspects of school administration digitally.",
    features: [
      "Student management",
      "Fee balance tracking",
      "Report cards & results",
      "Attendance management",
      "Parent communication",
      "SMS notifications",
      "Timetable management"
    ]
  },
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: "Bulk SMS Services",
    description: "Reliable and fast bulk messaging platform for institutions and businesses.",
    features: [
      "Bulk SMS campaigns",
      "Fee reminders",
      "Alerts & notifications",
      "Marketing messages",
      "Custom sender IDs",
      "Ideal for: Schools, SACCOs, SMEs"
    ]
  },
  {
    icon: <Calculator className="w-10 h-10" />,
    title: "Payroll & HR Systems",
    description: "Automated payroll processing and human resource management.",
    features: [
      "Payslip generation",
      "Leave management",
      "PAYE/NSSF/NHIF calculations",
      "Attendance integration",
      "Employee records",
      "Payroll reports"
    ]
  },
  {
    icon: <Globe className="w-10 h-10" />,
    title: "Website Design & Hosting",
    description: "Professional web presence with reliable hosting infrastructure.",
    features: [
      "Company & School websites",
      "Domain registration",
      "Web hosting",
      "Email hosting",
      "Website maintenance",
      "Secure SSL certificates"
    ]
  },
  {
    icon: <MonitorCog className="w-10 h-10" />,
    title: "ICT Support & Consultancy",
    description: "Expert technical assistance and strategic technology guidance.",
    features: [
      "Computer maintenance",
      "Network setup",
      "Software installation",
      "Data backup solutions",
      "Printer support",
      "Cybersecurity support",
      "ICT consultancy"
    ]
  },
  {
    icon: <Fingerprint className="w-10 h-10" />,
    title: "Biometric & Attendance",
    description: "Modern physical security and precise time tracking hardware.",
    features: [
      "Staff attendance systems",
      "Student attendance systems",
      "Fingerprint integration",
      "Attendance reporting",
      "Device setup & support",
      "Access control"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">Comprehensive Technology Solutions</h3>
          <p className="text-lg text-slate-600">
            We provide a full suite of software and hardware services designed specifically to solve the operational challenges of Kenyan institutions.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white group overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-heading text-slate-900 leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
