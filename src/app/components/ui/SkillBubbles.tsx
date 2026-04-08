"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillProps {
    name: string;
    icon: React.ReactNode;
    level: number;
    years: number;
    x: string;
    y: string;
    size: string;
}

const SkillBubble = ({ name, icon, level, years, x, y, size }: SkillProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="absolute flex items-center justify-center cursor-pointer group"
            style={{ top: y, left: x, width: size, height: size }}
            animate={{
                y: [0, -15, 0],
            }}
            transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Bubble Body */}
            <div className="relative w-full h-full rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:border-port-sky group-hover:bg-port-sky/10 group-hover:shadow-[0_0_40px_rgba(2,179,233,0.3)]">
                <div className="text-white/40 group-hover:text-white transition-colors duration-500 scale-[1.5]">
                    {icon}
                </div>

                {/* Specular Highlight (The "Light" hit) */}
                <div className="absolute top-[15%] left-[20%] w-[20%] h-[20%] bg-white/20 rounded-full blur-[2px]" />
            </div>

            {/* Hover Info Panel (Tooltip) */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: -20, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute bottom-full mb-4 z-50 w-48 p-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl pointer-events-none"
                    >
                        <p className="text-[10px] uppercase tracking-widest text-port-sky font-bold mb-3">{name}</p>

                        <div className="space-y-3">
                            <div>
                                <div className="flex justify-between text-[8px] text-white/50 mb-1 font-bold uppercase">
                                    <span>Proficiency</span>
                                    <span>{level}%</span>
                                </div>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${level}%` }}
                                        className="h-full bg-gradient-to-r from-port-sky to-purple-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-[8px] text-white/50 mb-1 font-bold uppercase">
                                    <span>Experience</span>
                                    <span>{years} Yrs</span>
                                </div>
                                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(years / 5) * 100}%` }}
                                        className="h-full bg-port-sky"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <span className="absolute -bottom-8 text-[10px] text-white/20 uppercase tracking-widest font-bold group-hover:text-white transition-colors">
                {name}
            </span>
        </motion.div>
    );
};

export default SkillBubble;