"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, MonitorSmartphone, Cpu } from "lucide-react";

const AboutSection = () => {
    const cards = [
        {
            title: "Frontend Engineering",
            icon: <Code2 className="w-4 h-4 text-port-sky" />,
            desc: "Building scalable and high-performance applications using React, Next.js, and modern JavaScript (ES6+). Strong focus on clean architecture and maintainable codebases.",
        },
        {
            title: "UI/UX & Visual Design",
            icon: <Palette className="w-4 h-4 text-purple-400" />,
            desc: "Leveraging a solid background in graphic design to craft visually compelling, user-focused interfaces that enhance usability and engagement.",
        },
        {
            title: "Responsive Web Systems",
            icon: <MonitorSmartphone className="w-4 h-4 text-pink-400" />,
            desc: "Developing fully responsive, mobile-first web applications that deliver seamless experiences across devices and screen sizes.",
        },
        {
            title: "Modern Tooling & Workflow",
            icon: <Cpu className="w-4 h-4 text-port-sky" />,
            desc: "Experienced with Tailwind CSS, Git, and component-driven development, ensuring efficient workflows and consistent UI systems.",
        },
    ];

    return (
        <section className="relative py-32 px-6 flex flex-col items-center bg-[#0a0a0a] overflow-hidden">

            {/* --- CENTERED POLYGON GRADIENT BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30">
                <svg
                    viewBox="0 0 1000 1000"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[120%] h-[120%] md:w-[80%] md:h-[80%]"
                >
                    <defs>
                        <radialGradient id="center-poly-grad" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#7a3af5" stopOpacity="0.5" />
                            <stop offset="40%" stopColor="#d63384" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    {/* Centered Polygon Path */}
                    <path
                        d="M500,200 L800,400 L700,800 L300,800 L200,400 Z"
                        fill="url(#center-poly-grad)"
                        className="animate-pulse-slow"
                    />
                </svg>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center w-full">
                {/* Section Label */}
                <span className="text-port-sky text-sm tracking-[0.4em] uppercase mb-3 font-medium">
                    About Me
                </span>

                {/* Heading */}
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-10  tracking-tighter">
                    Who I Am
                </h2>

                {/* Description */}
                <p className="max-w-2xl text-center text-white/40 font-light leading-relaxed mb-24 text-sm md:text-base font-sans">
                    I’m Mubaraq Bello, a Frontend Engineer with a strong foundation in both development and visual design.
                    I specialize in building sleek, performant, and user-friendly web applications that bridge
                    the gap between aesthetics and functionality.
                </p>

                {/* Grid Section */}
                <div className="relative w-full max-w-5xl">
                    {/* Vertical Divider Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-port-sky/30 to-transparent hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                        {cards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{
                                    x: idx % 2 === 0 ? -8 : 8,
                                    borderColor: "rgba(255, 255, 255, 0.1)"
                                }}
                                className="glass-panel p-10 rounded-2xl border border-white/5 relative group bg-white/[0.01] transition-all duration-500"
                            >
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-5 tracking-wider uppercase ">
                                    {card.title}
                                </h3>

                                <p className="text-white/40 font-light text-sm md:text-base leading-relaxed mb-4">
                                    {card.desc}
                                </p>

                                {/* --- ICON INSIDE THE CIRCULAR DECORATION --- */}
                                <div className="absolute bottom-6 right-6">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-port-sky group-hover:bg-port-sky/5 shadow-lg">
                                        <div className="opacity-40 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-500">
                                            {card.icon}
                                        </div>
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