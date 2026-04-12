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
    Lock,
    Zap,
    Target,
} from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const projects = [

    {
        title: "SproutNova",
        type: "Agri-Tech Decision Support",
        desc: "AI-driven Decision Support System for Nigerian agriculture featuring real-time disease detection.",
        tech: ["Next.js", "TypeScript", "Zustand", "AI"],
        challenge: "Optimizing high-fidelity AI detection for low-bandwidth rural connections in remote farming areas.",
        solution: "Implemented client-side image compression and intelligent caching, reducing server round-trips by 60%.",
        image: "/images/sproutnova.png",
        live: "https://sproutnova.vercel.app/",
        github: "https://github.com/Bellomubaraq875/sproutnova",
        featured: true,
    },
    {
        title: "TLH School Management",
        type: "FullStack SaaS",
        desc: "Robust school management system handling student data, grading, and complex administrative workflows.",
        tech: ["Docker", "PostgreSQL", "Next.js", "D3.js"],
        challenge: "Architecting a secure, containerized environment for complex relational student data and real-time grading.",
        solution: "Optimized PostgreSQL indexing and implemented Dockerized microservices to ensure 99.9% system availability.",
        image: "/images/LMS-tlh.png",
        live: "#",
        github: "https://github.com/Bellomubaraq87next-school-dashboard",
        featured: true,
    },
    {
        title: "Faydoh",
        type: "FullStack Inheritance",
        desc: "Precise mathematical engine for calculating complex Islamic inheritance distributions.",
        tech: ["Next.js", "PostgreSQL", "Tailwind", "Math.js"],
        challenge: "Translating intricate, non-linear inheritance laws into a bug-free, reactive computational engine.",
        solution: "Developed a recursive calculation algorithm with 100% unit test coverage to ensure mathematical absolute accuracy.",
        image: "/images/faydoh.png",
        live: "https://faydoh.com/",
        github: "#", 
        featured: true,
    },
    {
        title: "LAB Foundation",
        type: "NGO / Community Platform",
        desc: "A digital hub for a non-governmental organization focused on community outreach and medical services.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
        challenge: "Creating an engaging, fast-loading way to showcase humanitarian impact and medical mission updates.",
        solution: "Implemented a dynamic CMS-driven architecture (Contentful) with optimized asset loading for high-traffic NGO events.",
        image: "/images/lab.png",
        live: "https://labfoundation.netlify.app/",
        github: "#", 
        featured: true
    },
    {
        title: "Africa Digital Institute",
        type: "EdTech / Learning Management",
        desc: "A bi-lingual platform designed to provide and manage digital skills training across the continent.",
        tech: ["React", "TypeScript", "Node.js", "Django"],
        challenge: "Developing a structured, scalable interface to manage diverse digital curricula and localized student tracking.",
        solution: "Built a robust component-driven dashboard and optimized relational data handling for high-volume student enrollments.",
        image: "/images/adi.png",
        live: "https://adifront.netlify.app/",
        github: "#", 
        featured: false
    },
    {
        title: "Anonymous Crime Report",
        type: "FullStack Privacy",
        desc: "Privacy-focused application for secure, location-aware incident reporting with zero data tracing.",
        tech: ["Neon", "PostgreSQL", "Next.js", "Prisma"],
        challenge: "Ensuring end-to-end anonymity while preventing spam via cryptographic location verification.",
        solution: "Utilized Neon serverless DB and Prisma for type-safe, trace-free data handling in sensitive contexts.",
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
        challenge: "Syncing large data streams between the hub and external product management APIs.",
        solution: "Implemented React Query for real-time updates and persistent state synchronization.",
        image: "/images/pyvotale.png",
        live: "https://pyvotalehub.netlify.app/",
        github: "#", 
        featured: false,
    },
    {
        title: "Xerv",
        type: "FinTech UI",
        desc: "High-performance frontend implementation for a modern financial technology platform.",
        tech: ["React", "Netlify", "Tailwind", "Framer Motion"],
        challenge: "Translating complex financial data into a fluid, 60fps user interface with complex animations.",
        solution: "Engineered an advanced CSS-in-JS architecture and animation specs optimized for mobile browser performance.",
        image: "/images/xerv.png",
        live: "https://Xerv.netlify.app",
        github: "#", 
        featured: false,
    },
    {
        title: "Bright Crypto Tracker",
        type: "FinTech Data",
        desc: "Real-time crypto asset tracker with live market trends and historical technical charts.",
        tech: ["Redux", "React Query", "Tailwind"],
        challenge: "Syncing multiple high-frequency API streams without degrading client performance.",
        solution: "Used React Query for background polling and smart caching to maintain 100% data freshness.",
        image: "/images/crypto.png",
        live: "https://crypto-plum-phi.vercel.app/",
        github: "https://github.com/Bellomubaraq875/crypto",
        featured: false,
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
            onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
            className="relative py-32 px-6 bg-[#050505] flex flex-col items-center overflow-hidden"
        >
            {/* Background Glows */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-30"
                style={{
                    background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(56,189,248,0.08), transparent 45%)`,
                }}
            />
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-pink-600/10 rounded-full blur-[120px]" />

            <div className="relative z-10 w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px] flex flex-col items-center">

                <span className="text-port-sky text-[10px] tracking-[0.5em] uppercase mb-4 font-bold">
                    Portfolio /&gt;
                </span>

                <h2 className="text-4xl md:text-7xl font-bold text-white mb-20 tracking-tighter">
                    Selected Works
                </h2>

                {/* PROJECT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, idx) => {
                            const isPrivate = project.github === "#";

                            return (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="group relative rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden hover:border-white/10 transition-all duration-500"
                                >
                                    {/* Image Container */}
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 space-y-4 relative">
                                        <span className="text-[9px] text-port-sky uppercase font-black tracking-widest">{project.type}</span>
                                        <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                                        <p className="text-sm text-white/40 leading-relaxed line-clamp-2 font-sans">{project.desc}</p>

                                        {/* Tech Stack Bubbles */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-[9px] px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white/30 uppercase font-bold">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Actions Area */}
                                        <div className="flex justify-between items-center pt-8 mt-4 border-t border-white/5">
                                            <div className="flex gap-3">
                                                {/* Live Link */}
                                                <MagneticButton>
                                                    <a
                                                        href={project.live} target="_blank"
                                                        className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-port-sky hover:border-port-sky/50 transition-all duration-300"
                                                    >
                                                        <ExternalLink size={18} />
                                                    </a>
                                                </MagneticButton>

                                                {/* Github Link / Private Handle */}
                                                <div className="relative group/tooltip">
                                                    <MagneticButton>
                                                        <a
                                                            href={isPrivate ? undefined : project.github}
                                                            target="_blank"
                                                            className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${isPrivate ? 'opacity-30 cursor-not-allowed' : 'text-white/40 hover:text-white hover:border-white/40'}`}
                                                        >
                                                            {isPrivate ? <Lock size={18} /> : <Github size={18} />}
                                                        </a>
                                                    </MagneticButton>
                                                    {isPrivate && (
                                                        <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[8px] font-black uppercase tracking-tighter rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                                            Private Repository
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Case Study Trigger */}
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-port-sky transition-colors cursor-pointer"
                                            >
                                                <Info size={14} /> Details
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Load More Toggle */}
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="mt-20 group flex flex-col items-center gap-4 cursor-pointer"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 group-hover:text-port-sky transition-colors">
                        {showAll ? "Collapse" : "Explore More"}
                    </span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-port-sky group-hover:border-port-sky/50"
                    >
                        {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </motion.div>
                </button>

                {/* CASE STUDY DRAWER */}
                <AnimatePresence>
                    {selectedProject && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-crosshair"
                            />
                            <motion.div
                                initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 h-full w-full md:w-[550px] bg-[#080808] border-l border-white/5 z-[101] p-8 md:p-12 overflow-y-auto"
                            >
                                <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors cursor-pointer"><X size={32} /></button>

                                <div className="mt-12 space-y-12">
                                    <div>
                                        <span className="text-port-sky text-[10px] font-black uppercase tracking-[0.4em]">{selectedProject.type}</span>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mt-4 leading-none">{selectedProject.title}</h2>
                                    </div>

                                    {/* Image in Drawer */}
                                    <div className="relative h-64 rounded-3xl overflow-hidden border border-white/5">
                                        <Image src={selectedProject.image} alt="Cover" fill className="object-cover" />
                                    </div>

                                    {/* Two-Column Details */}
                                    <div className="grid grid-cols-1 gap-10">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-port-sky">
                                                <Target size={16} />
                                                <h4 className="text-[11px] font-black uppercase tracking-widest">The Challenge</h4>
                                            </div>
                                            <p className="text-white/50 font-sans leading-relaxed text-sm md:text-base">{selectedProject.challenge}</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-purple-400">
                                                <Zap size={16} />
                                                <h4 className="text-[11px] font-black uppercase tracking-widest">The Solution</h4>
                                            </div>
                                            <p className="text-white/50 font-sans leading-relaxed text-sm md:text-base">{selectedProject.solution}</p>
                                        </div>
                                    </div>

                                    {/* Tech Stack in Drawer */}
                                    <div className="pt-10 border-t border-white/5">
                                        <h4 className="text-[10px] font-black uppercase text-white/20 tracking-widest mb-6">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedProject.tech.map((t: string) => (
                                                <span key={t} className="px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-white/60 text-xs font-medium">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default ProjectsSection;