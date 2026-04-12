"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ShieldCheck, ChevronLeft, ChevronRight, X, Award, FileText } from "lucide-react";

const testimonials = [
    {
        company: "Xerv Technologies",
        author: "Soham Pal",
        role: "Founder & CEO",
        type: "Letter of Recommendation",
        icon: <FileText size={20} />,
        preview: "Bello demonstrated a strong understanding of modern frontend technologies and played a key role in improving application stability and responsiveness.",
        full: `It is my pleasure to recommend Mr. Bello Mubaraq Adeyemi, who served as a Frontend Developer at Xerv Technologies from 27th June 2025 to 13th October 2025. During his time with us, Bello demonstrated a strong understanding of modern frontend technologies and contributed meaningfully to the refinement of our web interfaces.\n\nHe played a key role in diagnosing and fixing several frontend issues, improving the stability and responsiveness of our applications. Bello approaches every challenge with focus and determination, ensuring that each task is completed with precision and attention to detail.\n\nBeyond his technical contributions, Bello has shown professionalism, adaptability, and a positive attitude toward collaboration. Qualities that make him an asset to any engineering team.`,
        color: "text-port-sky",
        glow: "shadow-[0_0_30px_rgba(2,179,233,0.3)]",
    },
    {
        company: "Xerv Technologies",
        author: "Soham Pal",
        role: "Founder & CEO",
        type: "Certificate of Experience",
        icon: <Award size={20} />,
        preview: "This certifies that Mr. Bello Mubaraq Adeyemi significantly improved our frontend systems and enhanced user interaction quality.",
        full: `CERTIFICATE OF EXPERIENCE\n\nPROUDLY PRESENTED TO: Bello Mubaraq Adeyemi\n\nThis certifies that Mr. Bello Mubaraq Adeyemi worked as a Frontend Developer at Xerv Technologies from June 27 to October 13, 2025. He significantly improved our frontend systems, enhancing user interaction quality. We appreciate his dedication and wish him success in future endeavors.`,
        color: "text-yellow-400",
        glow: "shadow-[0_0_30px_rgba(250,204,21,0.3)]",
    },
    {
        company: "Michael Technological Services",
        author: "Chinonso Michael",
        role: "Lead Engineer",
        type: "Professional Endorsement",
        icon: <ShieldCheck size={20} />,
        preview: "A highly reliable developer with strong attention to detail, consistently delivering responsive and optimized interfaces.",
        full: `Bello Mubaraq Adeyemi consistently demonstrated technical proficiency and a proactive approach to web development during our collaboration. As a Frontend Developer, his ability to translate complex design requirements into clean, maintainable code is remarkable. He possesses a deep understanding of the React ecosystem and was instrumental in optimizing our core user workflows.`,
        color: "text-purple-400",
        glow: "shadow-[0_0_30px_rgba(192,132,252,0.3)]",
    },
];

const RecommendationSection = () => {
    const [index, setIndex] = useState(0);
    const [selected, setSelected] = useState<any>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!selected) setIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [selected]);

    return (
        <section id="recommendations" className="relative py-32 px-6 bg-[#050505] flex flex-col items-center overflow-hidden">

            {/* --- SHINY GALAXY BACKGROUND --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Twinkling Stars */}
                <svg className="absolute inset-0 w-full h-full opacity-40">
                    <pattern id="starPattern" width="150" height="150" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="white">
                            <animate attributeName="opacity" values="0.2;1;0.2" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="80" cy="50" r="1.2" fill="white">
                            <animate attributeName="opacity" values="1;0.2;1" dur="5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="130" cy="110" r="0.8" fill="white">
                            <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite" />
                        </circle>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#starPattern)" />
                </svg>

                {/* Nebula Glows */}
                <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-port-sky/10 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-port-sky text-[10px] tracking-[0.8em] uppercase font-black">Testimonials /&gt;</span>
                    <h2 className="text-4xl md:text-7xl font-bold text-white mt-4 tracking-tighter">Words of Trust</h2>
                </div>

                {/* --- SLIDER CONTAINER --- */}
                <div className="relative w-full flex items-center justify-center">

                    {/* Left Arrow (Outside) */}
                    <button
                        onClick={() => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                        className="hidden lg:flex absolute left-[-80px] w-14 h-14 rounded-full items-center justify-center bg-white/5 border border-white/10 text-white/20 hover:text-port-sky hover:border-port-sky/50 transition-all cursor-pointer z-20"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full relative p-8 md:p-16 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
                        >
                            <div className={`absolute top-0 left-12 -translate-y-1/2 w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center ${testimonials[index].color} ${testimonials[index].glow}`}>
                                <Quote size={28} />
                            </div>

                            <p className="text-white/70 text-xl md:text-3xl font-light leading-snug mb-16 italic font-sans max-w-3xl">
                                "{testimonials[index].preview}"
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/10">
                                <div className="flex flex-col items-center md:items-start">
                                    <h4 className="text-white text-xl font-bold">{testimonials[index].author}</h4>
                                    <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-black mt-2">
                                        {testimonials[index].role} <span className="mx-3 opacity-20">|</span> {testimonials[index].company}
                                    </p>
                                </div>

                                <div className="flex items-center gap-6">
                                    <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${testimonials[index].color}`}>
                                        {testimonials[index].icon} {testimonials[index].type}
                                    </div>
                                    <button
                                        onClick={() => setSelected(testimonials[index])}
                                        className="px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-port-sky hover:text-white transition-all duration-500 cursor-pointer shadow-xl shadow-white/5"
                                    >
                                        View Full
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Right Arrow (Outside) */}
                    <button
                        onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
                        className="hidden lg:flex absolute right-[-80px] w-14 h-14 rounded-full items-center justify-center bg-white/5 border border-white/10 text-white/20 hover:text-port-sky hover:border-port-sky/50 transition-all cursor-pointer z-20"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-16">
                    {testimonials.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 transition-all duration-700 rounded-full cursor-pointer ${i === index ? "w-16 bg-port-sky" : "w-4 bg-white/10"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Modal remains the same but ensure z-index is high */}
            <AnimatePresence>
                {selected && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[1000]" />
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="fixed z-[1001] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-2xl bg-[#080808] border border-white/10 rounded-[2.5rem] p-12 max-h-[85vh] overflow-y-auto">
                            {/* Content inside modal */}
                            <button onClick={() => setSelected(null)} className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors"><X size={24} /></button>
                            <h3 className={`text-2xl font-bold mb-6 ${selected.color}`}>{selected.type}</h3>
                            <div className="text-white/50 leading-relaxed whitespace-pre-line font-sans text-lg">{selected.full}</div>
                            <div className="mt-12 pt-8 border-t border-white/5 text-sm">
                                <p className="text-white font-bold">{selected.author}</p>
                                <p className="text-white/20">{selected.role} — {selected.company}</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default RecommendationSection;