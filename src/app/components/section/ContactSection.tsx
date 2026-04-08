"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const ContactSection = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    return (
        <section
            onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
            className="relative py-32 px-6 bg-[#050505] flex flex-col items-center overflow-hidden"
        >
            {/* 1. DYNAMIC BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-[0.01] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Dynamic Torch Light (Follows Cursor) */}
                <div
                    className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${mouse.x}px ${mouse.y}px, rgba(56, 189, 248, 0.08), transparent 45%)`
                    }}
                />

                {/* Ambient Glow Blobs */}
                <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-purple-900/15 rounded-full blur-[140px]" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[140px]" />
            </div>

            {/* 2. CONTENT CONTAINER (80% Width Pattern) */}
            <div className="relative z-10 w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px]">

                {/* Header Block */}
                <div className="flex flex-col mb-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-port-sky text-[10px] tracking-[0.5em] uppercase mb-4 font-bold"
                    >
                        Connect /&gt;
                    </motion.span>
                    <h2 className="text-3xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
                        Let’s build <br /> something great.
                    </h2>
                    <div className="mt-8 w-24 h-[1.5px] bg-gradient-to-r from-port-sky to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT SIDE: CONTACT INFO */}
                    <div className="space-y-12">
                        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed font-sans max-w-sm">
                            Whether you have a specific project in mind or just want to say hi, my inbox is always open.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:bellomubarak875@gmail.com" className="group flex items-center gap-5 text-white/50 hover:text-port-sky transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-port-sky/10 group-hover:border-port-sky/50 group-hover:shadow-[0_0_20px_rgba(2,179,233,0.2)] transition-all">
                                    <Mail size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Email Me</span>
                                    <span className="text-sm font-medium text-white/80">bellomubarak875@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+2348166440209" className="group flex items-center gap-5 text-white/50 hover:text-port-sky transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-port-sky/10 group-hover:border-port-sky/50 group-hover:shadow-[0_0_20px_rgba(2,179,233,0.2)] transition-all">
                                    <Phone size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-50">Call Me</span>
                                    <span className="text-sm font-medium text-white/80">+234 816 644 0209</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE: MINIMALIST FORM */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        action="https://formspree.io/f/xrbgbjlq"
                        method="POST"
                        className="space-y-5"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <input
                                type="text" name="name" placeholder="Full Name" required
                                className="w-full px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-port-sky/40 focus:bg-white/[0.04] transition-all"
                            />
                            <input
                                type="email" name="email" placeholder="Email Address" required
                                className="w-full px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-port-sky/40 focus:bg-white/[0.04] transition-all"
                            />
                        </div>
                        <textarea
                            name="message" rows={5} placeholder="Tell me about your vision..." required
                            className="w-full px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-white text-sm placeholder-white/20 focus:outline-none focus:border-port-sky/40 focus:bg-white/[0.04] transition-all resize-none"
                        />

                        <div className="flex justify-end pt-4">
                            <MagneticButton>
                                <button
                                    type="submit"
                                    className="group relative flex items-center gap-4 px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-port-sky hover:text-white transition-all duration-500 text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-white/5"
                                >
                                    Send Message
                                    <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-500" />
                                </button>
                            </MagneticButton>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;