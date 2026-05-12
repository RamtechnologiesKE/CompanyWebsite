import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ["home", "services", "about", "contact"];
      let current = "";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4 border-b" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className={`text-2xl font-bold font-heading tracking-tight ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}>
              Ram<span className="text-accent">technologies</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === link.id 
                      ? "text-accent" 
                      : isScrolled ? "text-slate-600" : "text-white/90"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollTo("contact")}
              className={`rounded-full px-6 font-medium ${
                isScrolled 
                  ? "bg-accent hover:bg-accent/90 text-white" 
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Get Started <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-md ${isScrolled ? "text-primary" : "text-primary"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-border py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-left text-lg font-medium py-2 border-b border-border/50 ${
                activeSection === link.id ? "text-accent" : "text-slate-700"
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollTo("contact")}
            className="w-full bg-accent hover:bg-accent/90 text-white rounded-md mt-4"
          >
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
