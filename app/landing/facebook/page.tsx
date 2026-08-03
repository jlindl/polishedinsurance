"use client"

import { Container, Section } from "@/components/ui/layout"
import { SpecialistCover } from "@/components/sections/specialist-cover"
import { SpecialistBenefits } from "@/components/sections/specialist-benefits"
import { Testimonials } from "@/components/sections/testimonials"
import { ChevronRight, ShieldCheck, Star, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { LeadCaptureForm } from "@/components/forms/lead-capture-form"

// ... existing imports

export default function FacebookLandingPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-cleaning-bg.png"
                        alt="Professional cleaning background"
                        fill
                        className="object-cover opacity-40"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />
                </div>

                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 space-y-8"
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
                                Insurance That <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                    Actually Pays Out.
                                </span>
                            </h1>

                            <div className="space-y-4 text-lg text-slate-300 max-w-xl">
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
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-5 relative"
                        >
                            <LeadCaptureForm />
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
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-10 py-6 text-xl rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold shadow-2xl shadow-orange-500/30 transition-all hover:scale-105 active:scale-95"
                        >
                            Contact Us
                        </Link>
                    </div>
                </Container>
            </Section>
        </main>
    )
}
