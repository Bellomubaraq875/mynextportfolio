"use client";

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-16 flex items-center justify-between backdrop-blur-sm">
      {/* 1. Space for Logo */}
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center">
          {/* LOGO SPACE: Replace with your <Image /> or SVG */}
          <div className="text-white font-bold text-2xl border-2 border-port-sky p-1 rounded-lg">
            MB
          </div>
        </div>
      </div>

      {/* 2. Symmetrical Menu */}
      <div className="hidden md:flex items-center gap-10">
        {['Home', 'About', 'Works', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white/60 hover:text-white transition-colors text-sm font-medium tracking-widest font-sans"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* 3. Hire Me CTA (Pink/Purple Gradient) */}
      <button className="px-8 py-2.5 bg-gradient-to-r from-[#7a3af5] to-[#d63384] text-white rounded-md text-sm font-bold shadow-lg hover:brightness-110 transition-all">
        Hire Me
      </button>
    </nav>
  );
};

export default Header;