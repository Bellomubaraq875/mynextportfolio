"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, ExternalLink, Github, Sprout } from "lucide-react";

const projects = [
    {
        title: "SproutNova",
        desc: "A production-grade Smart Farming Decision Support System. Features AI-powered disease detection, soil data analysis, and crop recommendations for Nigerian farmers.",
        tech: ["Next.js", "TypeScript", "Zustand", "Tailwind"],
        image: "/images/sproutnova.png", // Ensure you have this image
        live: "#",
        github: "#",
        featured: true,
    },
    {
        title: "TLH School Management System",
        desc: "A comprehensive dashboard for managing students, grades, and school administrative tasks with real-time data visualization via D3.js and Chart.js.",
        tech: ["Next.js", "D3.js", "Chart.js", "Tailwind"],
        image: "/images/project1.png",
        live: "#",
        github: "#",
        featured: true,
    },
    {
        title: "Anonymous Crime Reporting",
        desc: "A secure, privacy-focused application allowing users to report incidents anonymously with location detection and image uploads.",
        tech: ["React", "TypeScript", "Prisma", "Next.js"],
        image: "/images/project2.png",
        live: "#",
        github: "#",
        featured: true,
    },
    {
        title: "Bright Crypto Tracker",
        desc: "A real-time cryptocurrency tracking app featuring live price updates, market trends, and historical data charts using Redux Toolkit.",
        tech: ["React", "Redux Toolkit", "React Query", "Tailwind"],
        image: "/images/project3.png",
        live: "#",
        github: "#",
        featured: false,
    },
    {
        title: "ADI Digital Skills Platform",
        desc: "An educational platform designed for Africa Digital Institute to teach digital skills to thousands of students across the continent.",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
        image: "/images/project4.png",
        live: "#",
        github: "#",
        featured: false,
    },
    {
        title: "LAB Foundation NGO",
        desc: "A non-governmental organization web portal featuring a blog system, event tracking, and donation integration.",
        tech: ["Next.js", "JavaScript", "CSS"],
        image: "/images/project6.png",
        live: "#",
        github: "#",
        featured: false,
    },
];

const ProjectsSection = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.filter(p => p.featured);

    return (
        <section className="relative py-24 px-6 bg-[#050505] flex flex-col items-center overflow-hidden">

            {/* Background Ambient Glow */}
            <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-port-sky/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Section Label */}
            <span className="text-port-sky text-sm tracking-[0.4em] uppercase mb-4 font-medium">
                Selected Works
            </span>

            {/* Heading */}
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 tracking-tighter">
                Featured Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                <AnimatePresence mode="wait">
                    {visibleProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] backdrop-blur-xl transition-all duration-500 hover:border-port-sky/30"
                        >
                            <div className="relative w-full h-56 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Special Tag for SproutNova */}
                                {project.title === "SproutNova" && (
                                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-green-500/20 border border-green-500/30 backdrop-blur-md rounded-full flex items-center gap-2">
                                        <Sprout size={12} className="text-green-400" />
                                        <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Agri-Tech</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />
                            </div>

                            <div className="p-8 flex flex-col gap-5">
                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-white/40 leading-relaxed font-light font-sans">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/50">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6 mt-6 pt-4 border-t border-white/5">
                                    <a href={project.live} target="_blank" className="flex items-center gap-2 text-xs font-bold text-port-sky hover:text-white transition-colors uppercase tracking-widest">
                                        <ExternalLink size={14} /> Live
                                    </a>
                                    <a href={project.github} target="_blank" className="flex items-center gap-2 text-xs font-bold text-white/40 hover:text-white transition-colors uppercase tracking-widest">
                                        <Github size={14} /> Source
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Reveal More Button */}
            {!showAll && (
                <motion.button
                    onClick={() => setShowAll(true)}
                    className="mt-20 flex flex-col items-center gap-4 group cursor-pointer"
                >
                    <span className="text-xs uppercase tracking-[0.5em] text-white/40 group-hover:text-port-sky transition-colors font-bold">
                        View More Projects
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-port-sky group-hover:border-port-sky transition-all"
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </motion.button>
            )}

            {/* Section Indicator */}
            <div className="mt-32 w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-white/10 text-[10px] font-bold tracking-widest">
                03
            </div>
        </section>
    );
};

export default ProjectsSection;