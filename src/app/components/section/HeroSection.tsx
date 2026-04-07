"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]">

            {/* Binary/Matrix Background Effect (Approximation) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none select-none font-mono text-[10px] leading-none text-port-sky overflow-hidden break-all">
                {Array(50).fill("01101001 01101111 10101010 00110101").join(" ")}
            </div>

            {/* Purple Ambient Glow */}
            <div className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[120px]" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white text-lg md:text-2xl font-light mb-2 font-sans"
                >
                    Hi This Is
                </motion.p>

                {/* Large Gradient Name */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl lg:text-9xl font-[--font-orbitron] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7a3af5] via-white to-[#d63384] uppercase tracking-tighter"
                >
                    MUBARAK BELLO
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-6 mt-4 text-white/40 text-xs md:text-sm tracking-[0.3em] uppercase font-sans"
                >
                    <span>Software Developer</span>
                    <span>•</span>
                    <span>UI/UX Designer</span>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-12 px-10 py-4 bg-gradient-to-r from-[#7a3af5] to-[#d63384] rounded-lg text-white font-bold tracking-widest text-sm shadow-2xl"
                >
                    VISIT MY WORK
                </motion.button>
            </div>

            {/* Scroll Indicator Circle */}
            <div className="absolute bottom-10 flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 text-xs">
                    1
                </div>
            </div>
        </section>
    );
};

export default HeroSection;