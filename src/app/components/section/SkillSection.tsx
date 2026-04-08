"use client";

import React, { useState } from "react";
import SkillBubble from "../ui/SkillBubbles";
import { motion, AnimatePresence } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiJavascript, SiHtml5, SiCss, SiRedux, SiPrisma,
    SiGit, SiTestinglibrary, SiVercel, SiD3
} from "react-icons/si";

const skills = [
    /* Spread across 70% width with real brand colors */
    { name: "React", icon: <SiReact />, level: 95, years: 4, x: "40%", y: "30%", size: "150px", color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, level: 92, years: 3, x: "65%", y: "45%", size: "130px", color: "#FFFFFF" },
    { name: "TypeScript", icon: <SiTypescript />, level: 88, years: 3, x: "20%", y: "40%", size: "120px", color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript />, level: 95, years: 5, x: "80%", y: "25%", size: "110px", color: "#F7DF1E" },
    { name: "Tailwind", icon: <SiTailwindcss />, level: 98, years: 4, x: "10%", y: "65%", size: "105px", color: "#06B6D4" },
    { name: "Redux", icon: <SiRedux />, level: 85, years: 3, x: "30%", y: "15%", size: "90px", color: "#764ABC" },
    { name: "CSS3", icon: <SiCss />, level: 95, years: 5, x: "55%", y: "15%", size: "85px", color: "#1572B6" },
    { name: "HTML5", icon: <SiHtml5 />, level: 98, years: 5, x: "45%", y: "65%", size: "95px", color: "#E34F26" },
    { name: "Prisma", icon: <SiPrisma />, level: 80, years: 2, x: "85%", y: "60%", size: "90px", color: "#2D3748" },
    { name: "Git", icon: <SiGit />, level: 90, years: 4, x: "70%", y: "10%", size: "80px", color: "#F05032" },
    { name: "D3.js", icon: <SiD3 />, level: 75, years: 2, x: "25%", y: "80%", size: "90px", color: "#F9A03C" },
    { name: "Vercel", icon: <SiVercel />, level: 90, years: 3, x: "5%", y: "25%", size: "85px", color: "#FFFFFF" },
    { name: "Testing", icon: <SiTestinglibrary />, level: 70, years: 1, x: "65%", y: "75%", size: "80px", color: "#E33332" },
];

const SkillsSection = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    return (
        <section
            onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
            className="relative w-full min-h-screen bg-[#050505] flex flex-col items-center overflow-hidden py-32"
        >
            {/* 1. DEEP PURPLE BACKGROUND BLOBS */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[70vw] h-[70vw] bg-purple-900/20 rounded-full blur-[160px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-900/15 rounded-full blur-[140px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.05)_0%,transparent_70%)]" />
            </div>

            {/* Centralized Header */}
            <div className="relative z-20 flex flex-col items-center text-center mb-16 pointer-events-none">
                <motion.span
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    className="text-port-sky text-[10px] font-bold uppercase tracking-[0.8em] mb-4"
                >
                    Technical Arsenal /&gt;
                </motion.span>
                <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-6">
                    Skills & Stack
                </h2>
                <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-port-sky to-transparent" />
            </div>

            {/* Dynamic Torch Light */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-30"
                style={{ background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(139, 92, 246, 0.1), transparent 40%)` }}
            />

            {/* 2. SPREAD BUBBLE AREA */}
            <div className="relative w-[90vw] lg:w-[75vw] h-[600px] md:h-[700px] mx-auto mt-10">
                {skills.map((skill) => (
                    <SkillBubble key={skill.name} {...skill} />
                ))}
            </div>

            
        </section>
    );
};

export default SkillsSection;