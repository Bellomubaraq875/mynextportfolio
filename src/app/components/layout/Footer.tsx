"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const Footer = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <footer
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
      className="relative px-6 pt-32 pb-10 bg-[#050505] flex flex-col items-center overflow-hidden"
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(56, 189, 248, 0.05), transparent 45%)`
          }}
        />
        <div className="absolute top-0 left-[10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-[10%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px] flex flex-col gap-24">

        {/* BIG CTA SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
              Ready to bring your <br /> ideas to life?
            </h2>
            <div className="flex flex-wrap gap-4 text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">
              <span className="flex items-center gap-2"><MapPin size={12} className="text-port-sky" /> Ibadan, Nigeria</span>
              <span>•</span>
              <span>Available for Freelance</span>
            </div>
          </div>

          <MagneticButton>
            <a
              href="#contact"
              className="group flex items-center gap-4 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-port-sky hover:text-white transition-all duration-500 text-xs uppercase tracking-widest shadow-2xl shadow-white/5"
            >
              Start a Project <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
            </a>
          </MagneticButton>
        </div>

        {/* MAIN FOOTER LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-20 border-t border-white/5">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tighter">Bello M. Adeyemi</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs font-sans font-light italic">
              "Crafting high-performance digital products with a focus on precision, speed, and visual elegance."
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-black opacity-30">Menu</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-white/50 hover:text-port-sky transition-colors w-fit">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-6">
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-black opacity-30">Socials</h4>
            <div className="flex gap-3">
              {[
                { icon: <Github size={18} />, href: "https://github.com/Bellomubaraq875", color: "hover:bg-white hover:text-black" },
                { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/mubarak-bello-213b8110b", color: "hover:bg-[#0077b5] hover:text-white" },
                { icon: <Mail size={18} />, href: "mailto:bellomubaraq875@gmail.com", color: "hover:bg-port-sky hover:text-white" }
              ].map((social, i) => (
                <MagneticButton key={i}>
                  <a
                    href={social.href}
                    target="_blank"
                    className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 transition-all duration-300 ${social.color} hover:border-transparent`}
                  >
                    {social.icon}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT AREA */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold text-white/20">
          <p>© {new Date().getFullYear()} BELLO MUBARAK ADEYEMI</p>
          <div className="flex items-center gap-8">
            <span className="hover:text-white transition-colors cursor-default">Next.js 14</span>
            <span className="hover:text-white transition-colors cursor-default">Framer Motion</span>
            <span className="hover:text-white transition-colors cursor-default">Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;