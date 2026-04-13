"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, CheckCircle, Loader2, ArrowUpRight } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { MagneticButton } from "../ui/MagneticButton";

const ContactSection = () => {
    // This hook handles the POST request internally
    const [state, handleSubmit] = useForm("xrbgbjlq");
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    return (
        <section
            id="contact"
            onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
            className="relative py-32 px-6 bg-[#050505] flex flex-col items-center overflow-hidden"
        >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-purple-900/15 rounded-full blur-[140px]" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[140px]" />
            </div>

            <div className="relative z-10 w-[95%] md:w-[90%] lg:w-[80%] max-w-[1200px]">

                {/* Header */}
                <div className="flex flex-col mb-20">
                    <span className="text-port-sky text-[10px] tracking-[0.5em] uppercase mb-4 font-bold">Connect /&gt;</span>
                    <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter leading-[0.9]">Let’s build <br /> something great.</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left Side: Contact Details */}
                    <div className="space-y-12">
                        <p className="text-white/40 text-lg md:text-xl font-light max-w-sm">
                            I'll review your message and get back to you within 24 hours.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-5 text-white/50">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Mail size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Email</span>
                                    <span className="text-sm font-medium text-white/80">bellomubaraq875@gmail.com</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 text-white/50">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Phone size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-bold opacity-50 tracking-widest">Phone</span>
                                    <span className="text-sm font-medium text-white/80">+234 816 644 0208</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form / Success State */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            {state.succeeded ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center text-center gap-4 bg-white/[0.02] border border-white/5 rounded-3xl p-12 h-full min-h-[400px]"
                                >
                                    <CheckCircle className="text-green-400" size={48} />
                                    <h3 className="text-white text-2xl font-bold">Message Sent!</h3>
                                    <p className="text-white/40 text-sm">Thanks for reaching out, I'll be in touch soon.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <input
                                            name="name" type="text" placeholder="Full Name" required
                                            className="w-full px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-white text-sm focus:border-port-sky/40 outline-none transition-all"
                                        />
                                        <div>
                                            <input
                                                name="email" type="email" placeholder="Email Address" required
                                                className="w-full px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-white text-sm focus:border-port-sky/40 outline-none transition-all"
                                            />
                                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-[10px] mt-1 ml-2" />
                                        </div>
                                    </div>

                                    <textarea
                                        name="message" rows={5} placeholder="Project Details" required
                                        className="w-full px-6 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-white text-sm focus:border-port-sky/40 outline-none transition-all resize-none"
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-[10px] mt-1 ml-2" />

                                    <div className="flex justify-end pt-4">
                                        <MagneticButton>
                                            <button
                                                type="submit"
                                                disabled={state.submitting}
                                                className="group flex items-center gap-4 px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-port-sky hover:text-white transition-all duration-500 text-[11px] uppercase tracking-[0.2em] disabled:opacity-50"
                                            >
                                                {state.submitting ? <Loader2 className="animate-spin" /> : <>Send Message <ArrowUpRight size={18} /></>}
                                            </button>
                                        </MagneticButton>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;