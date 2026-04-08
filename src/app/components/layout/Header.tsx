"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Effect to handle scroll background changes
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-6 transition-all duration-500">
      <nav
        className={`flex items-center justify-between w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px] px-6 py-3 rounded-2xl border transition-all duration-500 ${scrolled
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

        {/* CENTRAL NAVIGATION */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative text-[9px] font-bold text-white/40 uppercase tracking-[0.4em] hover:text-white transition-all duration-300 group"
              >
                {item.name}
                {/* Minimal line indicator */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-port-sky transition-all duration-500 group-hover:w-1/2" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-[10px] tracking-[0.3em] font-black uppercase hover:bg-port-sky hover:text-white hover:border-port-sky transition-all duration-500 cursor-pointer shadow-lg shadow-black/20"
          >
            Hire Me
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export default Header;