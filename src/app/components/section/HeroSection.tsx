"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden px-4 py-20">

            {/* --- BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <Image
                    src="/images/14960493_5532919.jpg"
                    alt="Deep Space"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Ambient Glows */}
            <div className="absolute top-[20%] -left-[10%] w-[60vw] h-[60vw] bg-[--port-sky] opacity-[0.1] rounded-full blur-[120px] z-10" />
            <div className="absolute bottom-[20%] -right-[10%] w-[50vw] h-[50vw] bg-[--port-yellow] opacity-[0.06] rounded-full blur-[120px] z-10" />

            {/* --- THE MAIN CONTENT CONTAINER (80% Width) --- */}
            <div className="w-[95%] md:w-[90%] lg:w-[80%] max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center z-20 relative">

                {/* --- LEFT TEXT CONTENT --- */}
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-6 md:space-y-8"
                >
                    {/* Availability Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs md:text-sm font-medium text-white/80 uppercase tracking-widest">
                            Available for Freelance
                        </span>
                    </div>

                    {/* Scaled Down Name and Title */}
                    <div className="space-y-2">
                        <h1 className="text-5xl md:text-7xl xl:text-8xl font-[--font-regina] text-white leading-[1.1] tracking-tight uppercase font-medium">
                            MUBARAK <br />
                            <span className="tracking-tighter">BELLO</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-light text-white/40 leading-snug font-sans">
                            Frontend Developer
                        </h2>
                    </div>

                    {/* Smaller Intro Text */}
                    <p className="max-w-md text-base md:text-lg text-white/40 leading-relaxed font-light font-sans">
                        Hey there! I’m a Frontend Developer and UI enthusiast creating sleek, performant, and accessible user experiences for the modern web.
                    </p>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.04, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-4 bg-white text-black font-bold rounded-full text-base shadow-xl transition-all font-sans"
                    >
                        Schedule Call
                    </motion.button>
                </motion.div>

                {/* --- RIGHT IMAGE CONTENT --- */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative group w-full"
                >
                    <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/workspace-setup.jpg"
                            alt="Mubarak's Tech Setup"
                            width={1000}
                            height={700}
                            className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/50 to-transparent pointer-events-none z-10" />
                    </div>

                    <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full z-0 opacity-50" />
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;