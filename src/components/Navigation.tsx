"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`w-full fixed top-0 z-100 transition-all duration-300 ${
        isScrolled ? " backdrop-blur  shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl font-bold text-white"
          >
            Mahesh Kumar Jena
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-[#9F7AEA] hover:text-[#6B46C1] transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-40 fixed right-3 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#9F7AEA] transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#9F7AEA] transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#9F7AEA] transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sticky top-0 right-0 w-full h-screen z-30 backdrop-filter backdrop-blur-lg flex flex-col items-center justify-center"
          >
            {/* Toggle Button Inside Mobile Menu */}
            {/* <button
              className="absolute top-4 right-4 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className="w-full h-0.5 bg-white transform rotate-45 translate-y-2" />
                <span className="w-full h-0.5 bg-white opacity-0" />
                <span className="w-full h-0.5 bg-white transform -rotate-45 -translate-y-2" />
              </div>
            </button> */}

            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item) => (
               <button
               key={item.name}
               onClick={() => scrollToSection(item.href)}
               className="text-2xl font-semibold text-[#9F7AEA] hover:text-[#6B46C1] transition-colors duration-300 border border-[#9F7AEA] hover:border-[#6B46C1] rounded-full px-6 py-2 bg-transparent"
               style={{ fontFamily: 'Montserrat, sans-serif' }}
             >
               {item.name}
             </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}