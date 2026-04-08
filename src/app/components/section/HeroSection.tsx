"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 
import { ArrowDownRight, Globe, Zap, MousePointer2 } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const HeroSection = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    return (
        <section
            onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
            className="relative min-h-screen flex items-center justify-center px-6 bg-[#050505] overflow-hidden pt-10 mt-10"
        >
            {/* 1. ATMOSPHERIC BACKGROUND SYSTEM */}
            <div className="absolute inset-0 z-0 pointer-events-none">

                <div className="absolute inset-0 opacity-[0.05] text-white/10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="wavy-lines" patternUnits="userSpaceOnUse" width="100" height="200" viewBox="0 0 100 200">
                                <path
                                    d="M0 50 C 30 0, 70 0, 100 50 C 130 100, 170 100, 200 50"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    fill="none"
                                />
                                <path
                                    d="M0 150 C 30 100, 70 100, 100 150 C 130 200, 170 200, 200 150"
                                    stroke="currentColor"
                                    strokeWidth="0.5"
                                    fill="none"
                                    transform="translate(0, 20)"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#wavy-lines)" />
                    </svg>
                </div>

                {/* Dynamic Torch Light */}
                <div
                    className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(56, 189, 248, 0.08), transparent 45%)`
                    }}
                />

                {/* Ambient Nebula Blobs */}
                <div className="absolute top-[10%] left-[-5%] w-[60vw] h-[60vw] bg-purple-900/15 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-port-sky/10 rounded-full blur-[140px]" />
            </div>

            {/* 2. MAIN CONTENT (80% Pattern) */}
            <div className="relative z-10 w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* LEFT: TEXT BLOCK */}
                <div className="flex flex-col items-start order-2 lg:order-1">
                    {/* Status Badge */}
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

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-8">
                            Mubarak <br />
                            <span className="text-port-sky italic">Adeyemi.</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-6 max-w-md border-l border-white/10 pl-8"
                    >
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                            Frontend Engineer with <span className="text-white font-medium">4+ years</span> of experience crafting high-performance, visually refined digital products.
                        </p>
                    </motion.div>

                    {/* CTA Group */}
                    <div className="mt-12 flex flex-wrap gap-6">
                        <MagneticButton>
                            <a
                                href="#projects"
                                className="group px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-port-sky hover:text-white transition-all duration-500 flex items-center gap-3 shadow-2xl shadow-white/5"
                            >
                                Selected Works <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
                            </a>
                        </MagneticButton>

                        <MagneticButton>
                            <a
                                href="#contact"
                                className="px-10 py-5 border border-white/10 rounded-2xl text-white/40 hover:text-white hover:border-white/30 text-xs font-black uppercase tracking-widest transition-all duration-500"
                            >
                                Let’s talk
                            </a>
                        </MagneticButton>
                    </div>
                </div>

                {/* RIGHT: VISUAL COMPOSITION */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                >
                    {/* Glass Card Composition */}
                    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] group">
                        {/* The "Shield" / Focal Card */}
                        <div className="absolute inset-0 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl rotate-[-6deg] transition-all duration-700 group-hover:rotate-0 group-hover:border-port-sky/30">
                            {/* Inner wavy texture inside card */}
                            <div className="absolute inset-0 opacity-[0.05] bg-white text-white/10 rounded-[3rem]">
                                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                    <pattern id="card-wavy" patternUnits="userSpaceOnUse" width="50" height="50" viewBox="0 0 50 50">
                                        <path d="M0 10 C 15 -5, 35 -5, 50 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#card-wavy)" />
                                </svg>
                            </div>

                            {/* Branding / Floating Icons */}
                            <div className="absolute top-12 left-12">
                                <Globe className="text-port-sky w-10 h-10 opacity-50" />
                            </div>
                            <div className="absolute bottom-12 right-12">
                                <Zap className="text-purple-500 w-10 h-10 opacity-50" />
                            </div>
                        </div>

                        {/* --- UPDATE: FLOATING CARD WITH TECHSPACE IMAGE --- */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-12 w-48 h-48 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-3xl flex items-center justify-center rotate-12 overflow-hidden shadow-2xl shadow-port-sky/10"
                        >
                            {/* The Workspace Vignette */}
                            <Image
                                src="/images/unnamed.jpg"
                                alt="Mubarack's Workspace Visual"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                quality={90}
                            />

                            {/* Subtle light hit on the glass */}
                            <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] bg-white/20 rounded-full blur-[4px] pointer-events-none" />
                        </motion.div>

                        {/* Bottom Glow */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-1/4 bg-port-sky/20 blur-[60px] rounded-full opacity-50" />
                    </div>
                </motion.div>
            </div>

            {/* 3. SCROLL PROGRESS INDICATOR */}
            <div className="absolute bottom-12 flex flex-col items-center gap-4">
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