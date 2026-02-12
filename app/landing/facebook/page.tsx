"use client"

import { Container, Section } from "@/components/ui/layout"
import { SpecialistCover } from "@/components/sections/specialist-cover"
import { SpecialistBenefits } from "@/components/sections/specialist-benefits"
import { Testimonials } from "@/components/sections/testimonials"
import { ChevronRight, ShieldCheck, Star, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function FacebookLandingPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-cleaning-bg.png"
                        alt="Professional cleaning background"
                        fill
                        className="object-cover opacity-60"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />
                </div>

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
                                <Star className="w-4 h-4 fill-blue-400" />
                                <span>#1 Choice for UK Cleaners</span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                Insurance That <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                    Actually Pays Out.
                                </span>
                            </h1>

                            <div className="space-y-4 text-lg text-slate-300">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                                    <p><strong>Treatment Risk Included:</strong> We cover the item you are actually cleaning (unlike standard policies).</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                                    <p><strong>Keyholding Cover:</strong> Full protection for lost keys and lock replacement.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                                    <p><strong>Zurich Underwritten:</strong> The financial strength of a global insurer.</p>
                                </div>
                            </div>

                            <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://alliedinsurance.schemeserve.com/GetQuote/questions.aspx?SchemeId=7148&NewClient=true"
                                    className="inline-flex items-center justify-center px-8 py-5 text-lg rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95 group"
                                >
                                    Get Your Quote from £120
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] text-white overflow-hidden">
                                                <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" width={32} height={32} unoptimized />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-xs text-slate-300">
                                        <span className="text-white font-bold block">1,000+ Cleaners</span>
                                        Joined this month
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:block relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                            <div className="relative bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Policy Status</p>
                                            <p className="text-emerald-400 font-bold flex items-center gap-2">
                                                <ShieldCheck className="w-4 h-4" /> Active & Protected
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Insurer</p>
                                            <p className="text-white font-bold">Zurich</p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="h-2 bg-slate-700 rounded-full w-3/4" />
                                        <div className="h-2 bg-slate-700 rounded-full w-1/2" />
                                        <div className="h-2 bg-slate-700 rounded-full w-5/6" />
                                    </div>
                                    <div className="mt-4 p-4 bg-blue-500/20 rounded-xl border border-blue-500/30">
                                        <p className="text-sm text-blue-200 font-medium">
                                            "I claimed for a bleach spill on a wool carpet. Polished paid out within 4 days. Unbelievable service."
                                        </p>
                                        <p className="text-xs text-blue-300 mt-2 font-bold">- Sarah J, Manchester</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Main Value Props - Reusing Specialist Cover */}
            <div className="py-8 bg-white">
                <Container>
                    <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-widest mb-8">
                        Everything you need in one policy
                    </p>
                </Container>
                <SpecialistCover />
            </div>

            {/* Trust Section */}
            <SpecialistBenefits />

            {/* Social Proof */}
            <Testimonials />

            {/* Final CTA */}
            <Section className="bg-slate-900 text-center">
                <Container>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl font-black text-white">
                            Ready to protect your business?
                        </h2>
                        <p className="text-lg text-slate-300">
                            Join thousands of UK cleaners who trust Polished Insurance.
                            <br />Get covered in less than 5 minutes.
                        </p>
                        <a
                            href="https://alliedinsurance.schemeserve.com/GetQuote/questions.aspx?SchemeId=7148&NewClient=true"
                            className="inline-flex items-center justify-center px-10 py-6 text-xl rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold shadow-2xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95"
                        >
                            Get A Quote Now
                        </a>
                    </div>
                </Container>
            </Section>
        </main>
    )
}
