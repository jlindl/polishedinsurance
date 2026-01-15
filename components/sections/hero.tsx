"use client"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/layout"
import { motion } from "framer-motion"
import { ShieldCheck, Star, Users } from "lucide-react"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative min-h-[75vh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-cleaning-bg.png"
                    alt="Sparkling clean abstract background"
                    fill
                    className="object-cover opacity-80"
                    priority
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/95" />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full glass-dark text-cyan-100 text-xs font-medium border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-xl cursor-default"
                        >
                            <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400 animate-pulse" />
                            <span className="tracking-wide uppercase font-bold opacity-90">Rated Excellent by UK Cleaners</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight drop-shadow-2xl">
                            Specialist Insurance <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 animate-gradient-x relative">
                                For Cleaners
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-100/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
                            <span className="font-semibold text-white">Carpet</span> • <span className="font-semibold text-white">Domestic</span> • <span className="font-semibold text-white">Commercial</span>
                            <br />
                            Get comprehensive coverage tailored for your cleaning business from just <span className="text-cyan-300 font-bold">£120/year</span>.
                        </p>

                        <div className="pt-2 flex flex-col items-center gap-5">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-300 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                <a
                                    href="https://alliedinsurance.schemeserve.com/GetQuote/questions.aspx?SchemeId=7148&NewClient=true"
                                    className="relative inline-flex items-center justify-center px-10 py-7 text-xl rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold shadow-[0_0_30px_rgba(245,158,11,0.3)] border border-white/20 ring-4 ring-orange-500/10 overflow-hidden transition-all duration-200 active:scale-95"
                                >
                                    <span className="relative z-10">Get Your Quote Now</span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                                </a>
                            </motion.div>

                            <p className="text-slate-300 text-sm font-medium">
                                Or call our friendly team on <a href="tel:03300568970" className="text-white hover:text-cyan-300 transition-colors underline underline-offset-4 decoration-blue-400/50 decoration-2">0330 056 8970</a>
                            </p>
                        </div>

                        <div className="pt-10 flex items-center justify-center gap-8 md:gap-16 text-slate-300 text-sm font-medium">
                            <motion.div
                                className="flex flex-col md:flex-row items-center gap-3 group cursor-default"
                                whileHover={{ y: -2 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg group-hover:shadow-emerald-500/20 group-hover:border-emerald-500/30 transition-all duration-300">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="opacity-90 group-hover:text-white transition-colors">Zurich Underwritten</span>
                            </motion.div>
                            <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
                            <motion.div
                                className="flex flex-col md:flex-row items-center gap-3 group cursor-default"
                                whileHover={{ y: -2 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-lg group-hover:shadow-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300">
                                    <Users className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="opacity-90 group-hover:text-white transition-colors">Instant Documents</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
