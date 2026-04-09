"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Frontend Team Lead",
        company: "Pyvotale",
        period: "2025 — Present",
        desc: "Leading frontend development, architecting scalable UI systems, and coordinating engineering efforts to deliver high-quality product experiences.",
    },
    {
        role: "Frontend Developer (Volunteer)",
        company: "Xerv Technologies",
        period: "June 2025 — October 2025",
        desc: "Developed scalable React + TypeScript applications using modular architecture. Integrated Redux Toolkit and REST APIs, improving state stability. Delivered pixel-perfect UI and received a formal recommendation for technical excellence.",
    },
    {
        role: "Frontend Developer",
        company: "Faydoh App",
        period: "November 2024 — June 2025",
        desc: "Built high-performance interfaces using Next.js and React Query. Designed reusable component systems and optimized data fetching, significantly improving performance for data-heavy views.",
    },
    {
        role: "Frontend Developer",
        company: "Michael Technological Services",
        period: "March 2024 — July 2024",
        desc: "Developed responsive React applications with Tailwind CSS. Improved mobile responsiveness across devices, reducing bounce rate and enhancing usability.",
    },
];

const ExperienceSection = () => {
    return (
        <section id = "experience" className="relative py-32 px-6 bg-[#0b000c] flex flex-col items-center overflow-hidden">

            {/* 🔥 ENHANCED BACKGROUND (NO GRID, MORE LIGHT) */}
            <div className="absolute inset-0 z-0 pointer-events-none">

                {/* Blue Glow */}
                <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-pink-500/20 rounded-full blur-[140px]" />

                {/* Purple Glow */}
                <div className="absolute bottom-[10%] right-[15%] w-[45vw] h-[45vw] bg-purple-600/20 rounded-full blur-[140px]" />

                {/* Center Radial Light */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_60%)]" />

                {/* Subtle Top Glow */}
                <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

            </div>

            {/* CONTENT */}
            <div className="relative z-10 w-[90%] lg:w-[80%] max-w-[1000px] flex flex-col items-center">

                {/* Header */}
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-port-sky text-[10px] tracking-[0.5em] uppercase mb-4 font-bold"
                >
                    Experience /&gt;
                </motion.span>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 tracking-tight">
                    Work Journey
                </h2>

                {/* Timeline */}
                <div className="relative w-full">

                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 hidden md:block" />

                    <div className="flex flex-col gap-16">

                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >

                                {/* Spacer */}
                                <div className="hidden md:block w-1/2" />

                                {/* Card */}
                                <div className="w-full md:w-1/2 group relative">

                                    <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:border-port-sky/30 transition-all duration-500">

                                        {/* Glow Hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_70%)]" />

                                        <div className="space-y-4">

                                            {/* Role */}
                                            <h3 className="text-xl font-bold text-white">
                                                {exp.role}
                                            </h3>

                                            {/* Company */}
                                            <div className="flex items-center gap-2 text-port-sky text-xs uppercase tracking-widest font-bold">
                                                <Briefcase size={12} />
                                                {exp.company}
                                            </div>

                                            {/* Period */}
                                            <div className="flex items-center gap-2 text-white/30 text-xs uppercase tracking-widest">
                                                <Calendar size={12} />
                                                {exp.period}
                                            </div>

                                            {/* Description */}
                                            <p className="text-sm text-white/40 leading-relaxed">
                                                {exp.desc}
                                            </p>

                                        </div>
                                    </div>

                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#050505] z-10">
                                    <div className="w-2 h-2 bg-port-sky rounded-full" />
                                </div>

                            </motion.div>
                        ))}

                    </div>
                </div>


            </div>
        </section>
    );
};

export default ExperienceSection;