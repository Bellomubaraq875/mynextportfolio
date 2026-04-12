"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#recommendations" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section for highlighing
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-6 transition-all duration-500">
      <nav
        className={`flex items-center justify-between w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px] px-6 py-3 rounded-2xl border transition-all duration-500 ${scrolled || mobileMenuOpen
            ? "bg-[#050505]/80 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/50"
            : "bg-transparent border-transparent"
          }`}
      >
        {/* LOGO SECTION */}
        <Link href="#hero" className="flex items-center gap-4 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-port-sky/50 transition-all duration-500">
            <Image
              src="/logo/logo.png"
              alt="Mubarak Bello"
              fill
              className="object-contain p-1.5 opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-none">Mubarak</span>
            <span className="text-port-sky text-[10px] font-black uppercase tracking-[0.2em] mt-1">Adeyemi</span>
          </div>
        </Link>

        {/* CENTRAL NAVIGATION (Desktop) */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative text-[9px] font-bold uppercase tracking-[0.4em] transition-all duration-300 group ${activeSection === item.href.substring(1) ? "text-white" : "text-white/40 hover:text-white"
                  }`}
              >
                {item.name}
                {/* Active/Hover line indicator */}
                <motion.span
                  className={`absolute -bottom-1 left-0 h-[1.5px] bg-port-sky transition-all duration-500 ${activeSection === item.href.substring(1) ? "w-full" : "w-0 group-hover:w-1/2"
                    }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION: SOCIALS + CTA + MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          {/* Social Quick Links (Desktop) */}
          <div className="hidden md:flex items-center gap-4 mr-4 border-r border-white/10 pr-4">
            <a href="https://github.com/Bellomubaraq875" target="_blank" className="text-white/20 hover:text-port-sky transition-colors">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/mubarak-bello-213b8110b" target="_blank" className="text-white/20 hover:text-port-sky transition-colors">
              <Linkedin size={16} />
            </a>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:block px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-[10px] tracking-[0.3em] font-black uppercase hover:bg-port-sky hover:text-white hover:border-port-sky transition-all duration-500 cursor-pointer shadow-lg shadow-black/20"
          >
            Hire Me
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 py-8 flex flex-col items-center gap-6 lg:hidden bg-[#050505]/95 backdrop-blur-3xl border-b border-white/5 shadow-2xl"
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs font-black uppercase tracking-[0.5em] ${activeSection === item.href.substring(1) ? "text-port-sky" : "text-white/40"
                    }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="h-[1px] w-12 bg-white/10 my-2" />
            <div className="flex gap-8">
              <a href="https://github.com/Bellomubaraq875" className="text-white/40 hover:text-port-sky"><Github size={20} /></a>
              <a href="https://linkedin.com/in/mubarak-bello-213b8110b" className="text-white/40 hover:text-port-sky"><Linkedin size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;