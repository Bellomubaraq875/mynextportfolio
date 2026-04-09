"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    ExternalLink,
    Github,
    Info,
    X,
    ChevronDown,
    ChevronUp,
    Database,
    Globe,
    Zap,
} from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const projects = [
    {
        title: "SproutNova",
        type: "Agri-Tech Decision Support",
        desc: "Decision Support System for Nigerian agriculture featuring AI disease detection.",
        tech: ["Next.js", "TypeScript", "Zustand", "AI"],
        challenge: "Optimizing AI detection for low-bandwidth rural connections.",
        solution: "Client-side image compression reduced server round-trips by 60%.",
        image: "/images/sproutnova.png",
        live: "#",
        github: "https://github.com/Bellomubaraq875/sproutnova",
        featured: true,
    },
    {
        title: "TLH School Management",
        type: "FullStack SaaS",
        desc: "Robust school system handling student data, grading, and administrative workflows.",
        tech: ["Docker", "PostgreSQL", "Next.js", "D3.js"],
        challenge: "Architecting a secure, containerized environment for complex relational data.",
        solution: "Optimized PostgreSQL indexing and Dockerized microservices for high availability.",
        image: "/images/LMS-tlh.png",
        live: "#",
        github: "https://github.com/Bellomubaraq87next-school-dashboard",
        featured: true,
    },
    {
        title: "Faydoh",
        type: "FullStack Inheritance",
        desc: "Precise mathematical engine for calculating Islamic inheritance distributions.",
        tech: ["Next.js", "PostgreSQL", "Tailwind", "Math.js"],
        challenge: "Translating intricate inheritance laws into a bug-free computational engine.",
        solution: "Recursive calculation algorithm with comprehensive unit testing for accuracy.",
        image: "/images/faydoh.png",
        live: "https://faydoh.com/",
        // github: "#",
        featured: true,
    },
    {
        title: "Anonymous Crime Report",
        type: "FullStack Privacy",
        desc: "Privacy-focused application for secure, location-aware incident reporting.",
        tech: ["Neon", "PostgreSQL", "Next.js", "Prisma"],
        challenge: "Ensuring end-to-end anonymity while preventing spam via location verification.",
        solution: "Utilized Neon serverless DB and Prisma for type-safe, trace-free data handling.",
        image: "/images/crime-report.jpg",
        live: "#",
        github: "https://github.com/Bellomubaraq875/my-app",
        featured: false,
    },
    {
        title: "Pyvotale Hub",
        type: "Product & Dev Hub",
        desc: "Dynamic platform for software engineering and product lifecycle management.",
        tech: ["Next.js", "REST API", "Framer Motion"],
        challenge: "Syncing large data streams between hub and external product APIs.",
        solution: "Implemented React Query for real-time updates and state persistence.",
        image: "/images/pyvotale.png",
        live: "https://pyvotalehub.netlify.app/",
        // github: "#",
        featured: false,
    },
    {
        title: "Xerv",
        type: "FinTech UI",
        desc: "High-performance frontend implementation for a modern financial technology platform.",
        tech: ["React", "Netlify", "Tailwind", "Framer Motion"],
        challenge: "Translating complex financial dashboards into a fluid, 60fps user interface.",
        solution: "Advanced CSS architecture and animation specs optimized for mobile performance.",
        image: "/images/xerv.png",
        live: "https://Xerv.netlify.app",
        // github: "#",
        featured: false,
    },

    {
        title: "Bright Crypto Tracker",
        latency: "8ms",
        desc: "Real-time crypto asset tracker with live market trends and historical charts.",
        tech: ["Redux", "React Query", "Tailwind"],
        challenge: "Syncing multiple API streams with high-frequency updates.",
        solution: "Used React Query for smart caching and background polling to keep data fresh without overloading the client.",
        image: "/images/crypto.png",
        live: "https://crypto-plum-phi.vercel.app/",
        github: "https://github.com/Bellomubaraq875/crypto",
        featured: false,
    },
    {
        "title": "LAB Foundation",
        "type": "NGO / Community Platform",
        "desc": "A digital hub for a non-governmental organization focused on community outreach and medical services in Ibadan.",
        "tech": ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
        "challenge": "Creating an engaging way to showcase humanitarian impact and blog updates for local outreach programs.",
        "solution": "Implemented a dynamic CMS-driven blog and a sleek, responsive landing page with high-performance asset loading.",
        "image": "/images/lab.png",
        "live": "https://labfoundation.netlify.app/",
        "github": "#",
        "featured": false
    },
    {
        "title": "Africa Digital Institute",
        "type": "EdTech / Learning Management",
        "desc": "A bi-lingual comprehensive platform designed to provide and manage digital skills training across the continent.",
        "tech": ["React", "TypeScript", "Node.js", "Django"],
        "challenge": "Developing a structured, scalable interface to manage diverse digital curricula and student tracking.",
        "solution": "Built a robust component-driven dashboard and optimized relational data handling for student enrollments.",
        "image": "/images/adi.png",
        "live": "https://adifront.netlify.app/",
        "github": "#",
        "featured": false
    }
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [showAll, setShowAll] = useState(false);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    const visibleProjects = showAll ? projects : projects.filter(p => p.featured);

    return (
        <section
            id="projects"
            onMouseMove={(e) =>
                setMouse({
                    x: e.clientX,
                    y: e.clientY,
                })
            }
            className="relative py-32 px-6 bg-[#050505] flex flex-col items-center overflow-hidden"
        >

            {/* 🔥 Dynamic Cursor Light */}
            <div
                className="pointer-events-none absolute inset-0 z-0"
                style={{
                    background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(56,189,248,0.12), transparent 40%)`,
                }}
            />

            {/* Grid Lines */}
            {/* <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" /> */}

            {/* Glow Blobs */}
            <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px]" />
            <div className="absolute -bottom-[10%] -left-[10%] w-[40vw] h-[40vw] bg-pink-600/20 rounded-full blur-[120px]" />

            <div className="relative z-10 w-[90%] lg:w-[80%] max-w-[1200px] flex flex-col items-center">

                <span className="text-port-sky text-[10px] tracking-[0.5em] uppercase mb-4 font-bold">
                    Selected Works /&gt;
                </span>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 tracking-tight">
                    Featured Projects
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <AnimatePresence>
                        {visibleProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500"
                            >

                                {/* 3D Tilt Effect */}
                                <motion.div
                                    className="absolute inset-0 z-10"
                                    whileHover={{
                                        rotateX: 5,
                                        rotateY: -5,
                                    }}
                                />

                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    <p className="text-[9px] text-port-sky uppercase tracking-widest">
                                        {project.type}
                                    </p>

                                    <h3 className="text-xl font-bold text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-white/40 line-clamp-3">
                                        {project.desc}
                                    </p>

                                    {/* Tech */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-[10px] px-2 py-1 bg-white/5 rounded border border-white/10 text-white/40"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex justify-between items-center pt-5 border-t border-white/10">

                                        <div className="flex gap-4">

                                            {/* LIVE BUTTON */}
                                            <MagneticButton>
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    className="group/icon relative w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/10 text-port-sky 
        hover:bg-port-sky hover:text-white hover:border-port-sky/50 hover:shadow-[0_0_20px_rgba(2,179,233,0.3)]
        transition-all duration-300 cursor-pointer overflow-hidden"
                                                >
                                                    <ExternalLink size={18} className="relative z-10" />
                                                    {/* Subtle inner glow sweep */}
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                                                </a>
                                            </MagneticButton>

                                            {/* GITHUB BUTTON */}
                                            <MagneticButton>
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    className="group/icon relative w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white/50 
        hover:bg-white hover:text-black hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]
        transition-all duration-300 cursor-pointer overflow-hidden"
                                                >
                                                    <Github size={18} className="relative z-10" />
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                                                </a>
                                            </MagneticButton>

                                        </div>

                                        {/* CASE STUDY BUTTON */}
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="group/case text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-port-sky cursor-pointer flex items-center gap-2 transition-all duration-300"
                                        >
                                            <Info size={14} className="group-hover/case:scale-110 transition-transform" />
                                            Case Study
                                        </button>

                                    </div>
                                </div>

                                {/* Glow Sweep */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent,rgba(56,189,248,0.15),transparent)] transition duration-500 pointer-events-none" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Toggle */}
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-20 flex flex-col items-center gap-3 group"
                >
                    <span className="text-xs tracking-widest text-white/30 group-hover:text-port-sky">
                        {showAll ? "View Less" : "View More"}
                    </span>

                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-port-sky"
                    >
                        {showAll ? <ChevronUp /> : <ChevronDown />}
                    </motion.div>
                </button>

                {/* Drawer */}
                <AnimatePresence>
                    {selectedProject && (
                        <>
                            <motion.div
                                className="fixed inset-0 bg-black/90 z-50"
                                onClick={() => setSelectedProject(null)}
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-[#080808] z-50 p-10"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6"
                                >
                                    <X />
                                </button>

                                <h2 className="text-3xl text-white mb-6">
                                    {selectedProject.title}
                                </h2>

                                <p className="text-white/40 mb-4">
                                    {selectedProject.challenge}
                                </p>
                                <p className="text-white/40">
                                    {selectedProject.solution}
                                </p>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default ProjectsSection;