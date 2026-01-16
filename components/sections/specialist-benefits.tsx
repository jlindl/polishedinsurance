"use client"

import { Section, Container } from "@/components/ui/layout"
import { motion } from "framer-motion"
import { CheckCircle2, ChevronRight, Shield } from "lucide-react"
import Image from "next/image"

export function SpecialistBenefits() {
    return (
        <Section className="relative min-h-[80vh] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/specialist-benefits-bg.png"
                    alt="Professional window cleaning on a high rise building"
                    fill
                    className="object-cover"
                    unoptimized
                />
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/50 to-slate-900/90" />
            </div>

            <Container className="relative z-10 py-16 md:py-24">
                <div className="max-w-2xl bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">Industry Specialists</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                            The benefits of using an industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">specialist broker.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                            <p>
                                When polished insurance was established in 2004, our aim was to provide the best insurance cover and service to all types of cleaners. All these years later, we are still doing that.
                            </p>
                            <p>
                                We understand the cleaning industry, we have the backing of a leading insurer - <strong className="text-white font-semibold">Zurich</strong> and we have a team of friendly and dedicated insurance experts who can help you to get the right cover for your business.
                            </p>
                            <p className="border-l-4 border-blue-500 pl-6 italic text-white/90">
                                So if you run a cleaning business and you aren't insured with us, then why not? It's not too late though, just click below to get your quote today.
                            </p>
                        </div>

                        <div className="mt-10">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <a
                                    href="https://alliedinsurance.schemeserve.com/GetQuote/questions.aspx?SchemeId=7148&NewClient=true"
                                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 border-none relative overflow-hidden group hover:scale-105 active:scale-95"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get Your Quote Online
                                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
