"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-16 flex items-center justify-between backdrop-blur-sm">
      {/* 1. Space for Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 border border-port-sky/40 rounded-lg flex items-center justify-center bg-white/5 backdrop-blur-md">
          {/* Insert your Logo Image here */}
          <span className="text-white font-bold text-xl font-[--font-orbitron]">M</span>
        </div>
      </div>

      {/* 2. Symmetrical Menu */}
      <div className="hidden md:flex items-center gap-10 glass-panel px-8 py-2.5 rounded-full border border-white/5">
        {['Home', 'About', 'Works', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white/60 hover:text-white transition-colors text-[10px] uppercase tracking-[0.3em] font-sans"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* 3. Hire Me CTA (Template Gradient) */}
      <button className="px-8 py-2.5 bg-gradient-to-r from-[#7a3af5] to-[#d63384] text-white rounded-md text-xs font-bold tracking-widest hover:scale-105 transition-transform shadow-lg shadow-purple-500/20">
        Hire Me
      </button>
    </nav>
  );
};

export default Header;