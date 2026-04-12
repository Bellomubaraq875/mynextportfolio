"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Globe, Zap, Terminal } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const HeroSection = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const codeSnippet = [
        "const developer = {",
        '  name: "Mubarak Adeyemi",',
        '  role: "Frontend Engineer",',
        "  skills: ['NextJS', 'TypeScript'],",
        "  experience: '4+ Years',",
        "  passion: 'Scalable Architecture',",
        "  focus: 'Visual Precision',",
        "  status: 'Ready to Build',",
        "};",
        "",
        "function createImpact() {",
        "  return code.transform(ideas);",
        "}",
    ];

    return (
        <section
            id="home"
            onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
            className="relative min-h-screen flex items-center justify-center px-6 bg-[#050505] overflow-hidden "
        >
            {/* 1. ATMOSPHERIC BACKGROUND SYSTEM */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* --- STARFIELD LAYER --- */}
                <div className="absolute inset-0 z-0 opacity-30">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                <circle cx="10" cy="10" r="0.5" fill="white" />
                                <circle cx="50" cy="80" r="0.7" fill="white" />
                                <circle cx="90" cy="40" r="0.5" fill="white" />
                                <rect x="30" y="30" width="1" height="1" fill="white">
                                    <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                                </rect>
                                <rect x="70" y="70" width="1" height="1" fill="white">
                                    <animate attributeName="opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
                                </rect>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#stars)" />
                    </svg>
                </div>

                {/* --- WAVY LINES --- */}
                <div className="absolute inset-0 opacity-[0.05] text-white/10 z-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="wavy-lines" patternUnits="userSpaceOnUse" width="100" height="200" viewBox="0 0 100 200">
                                <path d="M0 50 C 30 0, 70 0, 100 50 C 130 100, 170 100, 200 50" stroke="currentColor" strokeWidth="0.5" fill="none" />
                                <path d="M0 150 C 30 100, 70 100, 100 150 C 130 200, 170 200, 200 150" stroke="currentColor" strokeWidth="0.5" fill="none" transform="translate(0, 20)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#wavy-lines)" />
                    </svg>
                </div>

                {/* --- GALAXY NEBULAS --- */}
                <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-port-sky/10 rounded-full blur-[140px] mix-blend-overlay" />

                {/* Dynamic Torch Light */}
                <div
                    className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(2, 179, 233, 0.12), transparent 45%)`
                    }}
                />
            </div>

            {/* 2. MAIN CONTENT */}
            <div className="relative z-20 w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* LEFT: TEXT BLOCK */}
                <div className="flex flex-col items-start order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 mb-8 px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md"
                    >
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        <span className="text-white/40 text-[10px] uppercase font-black tracking-[0.3em]">
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.85] mb-8">
                            Mubarak <br />
                            <span className="text-port-sky italic">Adeyemi.</span>
                        </h1>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-start gap-6 max-w-md border-l border-white/10 pl-8">
                        <p className="text-white/40 text-lg font-light leading-relaxed font-sans">
                            Frontend Engineer with <span className="text-white font-medium">4+ years</span> of experience crafting high-performance, visually refined digital products.
                        </p>
                    </motion.div>

                    <div className="mt-12 flex flex-wrap gap-6">
                        <MagneticButton>
                            <a href="#projects" className="group px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-port-sky hover:text-white transition-all duration-500 flex items-center gap-3 shadow-2xl shadow-white/5">
                                Selected Works <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
                            </a>
                        </MagneticButton>

                        <MagneticButton>
                            <a href="#contact" className="px-10 py-5 border border-white/10 rounded-2xl text-white/40 hover:text-white hover:border-white/30 text-xs font-black uppercase tracking-widest transition-all duration-500">
                                Let’s talk
                            </a>
                        </MagneticButton>
                    </div>
                </div>

                {/* RIGHT: VISUAL COMPOSITION (CODE CORE) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    <div className="relative w-[300px] h-[380px] md:w-[420px] md:h-[520px] group">

                        {/* MAIN CARD - Scrollable Code Core */}
                        <div className="absolute inset-0 rounded-[4rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl rotate-[-6deg] transition-all duration-700 group-hover:rotate-0 group-hover:border-port-sky/30 overflow-hidden shadow-2xl flex flex-col p-12">

                            {/* Top Bar */}
                            <div className="flex justify-between items-center mb-10 opacity-40">
                                <div className="flex gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                </div>
                                <span className="text-[10px] font-mono tracking-widest uppercase">portfolio.ts</span>
                            </div>

                            {/* Scrolling Code Snippets */}
                            <div className="relative flex-1 font-mono text-[11px] md:text-[13px] leading-relaxed overflow-hidden">
                                <motion.div
                                    animate={{ y: [0, -150, 0] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="space-y-1"
                                >
                                    {codeSnippet.map((line, i) => (
                                        <div key={i} className="whitespace-nowrap">
                                            <span className="text-white/20 mr-4 select-none">{(i + 1).toString().padStart(2, '0')}</span>
                                            <span className={`${line.includes('const') || line.includes('function') || line.includes('return') ? 'text-purple-400' :
                                                    line.includes(':') ? 'text-port-sky' :
                                                        line.includes("'") ? 'text-green-400' : 'text-white/60'
                                                }`}>
                                                {line}
                                            </span>
                                        </div>
                                    ))}
                                    {/* Duplicate for seamless loop */}
                                    {codeSnippet.map((line, i) => (
                                        <div key={`dup-${i}`} className="whitespace-nowrap opacity-50">
                                            <span className="text-white/20 mr-4 select-none">{(i + 14).toString().padStart(2, '0')}</span>
                                            <span className="text-white/60">{line}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Bottom Corner Icons */}
                            <div className="absolute bottom-10 right-10 z-20 opacity-20 group-hover:opacity-50 transition-opacity">
                                <Globe size={24} className="text-port-sky" />
                            </div>
                        </div>

                        {/* FLOATING MINI-CONSOLE (Vignette) */}
                        <motion.div
                            animate={{ y: [0, -25, 0], rotate: [12, 15, 12] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-16 -right-16 w-48 h-48 rounded-[3rem] border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl z-30 flex flex-col p-6 overflow-hidden"
                        >
                            <div className="flex gap-1.5 mb-4">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="h-full w-1/3 bg-port-sky/40"
                                    />
                                </div>
                                <div className="h-1.5 w-3/4 bg-white/5 rounded-full" />
                                <div className="h-1.5 w-1/2 bg-white/5 rounded-full" />
                            </div>
                            <div className="mt-auto flex justify-between items-end">
                                <Terminal size={16} className="text-white/20" />
                                <span className="text-[8px] font-mono text-port-sky/40">v14.2.0</span>
                            </div>
                        </motion.div>

                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-1/4 bg-port-sky/20 blur-[80px] rounded-full opacity-50" />
                    </div>
                </motion.div>
            </div>

            {/* 3. SCROLL INDICATOR */}
            <div className="absolute bottom-12 z-20 flex flex-col items-center gap-4">
                <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">
                    Scroll
                </span>
                <motion.div
                    animate={{ height: [0, 60, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-[1px] bg-gradient-to-b from-port-sky to-transparent"
                />
            </div>
        </section>
    );
};

export default HeroSection;