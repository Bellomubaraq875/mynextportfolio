"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Palette, MonitorSmartphone, Cpu, Zap } from "lucide-react";

const AboutSection = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const cards = [
        {
            title: "Frontend Engineering",
            icon: <Code2 className="w-5 h-5 text-port-sky" />,
            desc: "4+ years of experience building scalable applications using React and Next.js. I specialize in reusable component architecture and high-performance logic.",
        },
        {
            title: "UI/UX & Visual Design",
            icon: <Palette className="w-5 h-5 text-purple-400" />,
            desc: "Blending technical precision with my background in graphic design to create user-focused interfaces that are both beautiful and functional.",
        },
        {
            title: "Responsive Web Systems",
            icon: <MonitorSmartphone className="w-5 h-5 text-pink-400" />,
            desc: "Developing mobile-first systems that ensure accessibility and performance across all screen sizes and device types.",
        },
        {
            title: "Modern Tooling & Logic",
            icon: <Cpu className="w-5 h-5 text-port-sky" />,
            desc: "Expertise in TypeScript, RESTful API integration, and performance optimization in remote, agile-driven team environments.",
        },
    ];

    return (
        <section
            onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
            className="relative py-32 px-6 flex flex-col items-center bg-[#050505] overflow-hidden"
        >
            {/* --- BACKGROUND ARCHITECTURE --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* Atmosphere Blobs */}
                <div className="absolute top-[10%] left-[-5%] w-[60vw] h-[60vw] bg-purple-900/20 rounded-full blur-[140px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-indigo-900/15 rounded-full blur-[140px]" />

                {/* Dynamic Cursor Torch */}
                <div
                    className="absolute inset-0 opacity-40 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(56, 189, 248, 0.06), transparent 40%)`
                    }}
                />
            </div>

            {/* --- CONTENT --- */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-[1200px]">

                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-port-sky text-[10px] tracking-[0.5em] uppercase mb-4 font-bold"
                >
                    Professional Profile /&gt;
                </motion.span>

                <h2 className="text-4xl md:text-7xl font-bold text-white mb-12 tracking-tighter text-center">
                    Engineering <br className="md:hidden" /> with Intent
                </h2>

                <div className="flex flex-col md:flex-row gap-12 mb-32 items-center">
                    {/* Summary Card */}
                    <div className="md:w-1/2 p-8 md:p-12 rounded-3xl border border-white/5 bg-white/[0.01] backdrop-blur-xl">
                        <div className="w-10 h-10 bg-port-sky/10 rounded-xl flex items-center justify-center mb-6">
                            <Zap className="text-port-sky w-5 h-5 fill-current" />
                        </div>
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed font-sans italic">
                            "I am a Frontend Developer with 4+ years of experience building responsive and high-performance web applications. I specialize in bridging the gap between aesthetics and functionality."
                        </p>
                    </div>

                    <div className="md:w-1/2 flex flex-col gap-6">
                        <div className="h-[1px] w-12 bg-port-sky" />
                        <p className="text-white/40 text-sm md:text-base leading-relaxed">
                            Experienced working in remote agile teams, collaborating with designers and backend engineers to deliver accessible and user-focused digital products. Skilled in designing reusable component architectures and integrating complex RESTful APIs.
                        </p>
                    </div>
                </div>

                {/* --- CAPABILITIES GRID --- */}
                <div className="relative w-full">
                    {/* Vertical Divider */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative p-10 group"
                            >
                                {/* Hover background effect */}
                                <div className="absolute inset-0 bg-white/[0.02] rounded-3xl border border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />

                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-port-sky group-hover:bg-port-sky/5 flex-shrink-0">
                                        {card.icon}
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-bold text-white uppercase tracking-widest group-hover:text-port-sky transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-white/40 font-light text-sm leading-relaxed leading-relaxed">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;