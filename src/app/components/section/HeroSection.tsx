"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#050505]">

            {/* Background Image (The Setup) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/images/14960493_5532919.jpg"
                    alt="Workspace Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
            </div>

            {/* Matrix/Binary Background Layer (Faint) */}
            <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none font-mono text-[8px] text-port-sky break-all leading-none">
                {Array(40).fill("01101001 10101101 01101111 00110101").join(" ")}
            </div>

            <div className="relative z-20 flex flex-col items-center text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white/80 text-xl md:text-3xl font-light mb-4 font-sans tracking-wide"
                >
                    Hi This Is
                </motion.p>

                {/* Orbitron Name - Main Focus */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl lg:text-9xl  font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7a3af5] via-white to-[#d63384] uppercase tracking-tighter leading-none"
                >
                    Mubarak Bello
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-6 mt-6 text-white/30 text-xs md:text-sm tracking-[0.4em] uppercase font-sans"
                >
                    <span>Software Developer</span>
                    <span className="text-port-sky">•</span>
                    <span>UI/UX Designer</span>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-14 px-12 py-4 bg-gradient-to-r from-[#7a3af5] to-[#d63384] rounded-lg text-white font-bold tracking-[0.2em] text-xs shadow-2xl"
                >
                    VISIT MY WORK
                </motion.button>
            </div>
        </section>
    );
};

export default HeroSection;