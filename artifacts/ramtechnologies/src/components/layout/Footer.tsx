import { Link } from "wouter";
import { Mail, Phone, MapPin, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
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
    <footer className="bg-primary text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <span className="text-2xl font-bold font-heading tracking-tight text-white block">
              Ram<span className="text-accent">technologies</span>
            </span>
            <p className="text-sm leading-relaxed text-slate-400 pr-4">
              Smart ICT & Software Solutions for Schools and Businesses. We make complex technology simple, reliable, and accessible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "About Us", id: "about" },
                { name: "Contact", id: "contact" }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollTo(link.id)}
                    className="flex items-center text-sm hover:text-accent transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "School Management Systems",
                "Bulk SMS Services",
                "Payroll Systems",
                "Hosting Services",
                "ICT Consultancy"
              ].map((service, i) => (
                <li key={i}>
                  <button 
                    onClick={() => scrollTo("services")}
                    className="flex items-center text-sm hover:text-accent transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-3"></span>
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                <span className="text-sm">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3 shrink-0" />
                <span className="text-sm">+254 721 934 498</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3 shrink-0" />
                <span className="text-sm">info@ramtechnologies.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Ramtechnologies. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
