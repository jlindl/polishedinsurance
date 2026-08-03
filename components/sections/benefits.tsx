"use client"

import { Section, Container } from "@/components/ui/layout"
import { Button } from "@/components/ui/button"
import { Check, Shield } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Benefits() {
    return (
        <Section id="benefits" className="relative overflow-hidden bg-white scroll-mt-32">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Why Choose <span className="text-blue-600">Polished?</span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-8">
                            Established in 2004, our aim was to provide the best insurance cover and service to all types of cleaners. We have the backing of a leading insurer - Zurich.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Competitive premiums starting from £120.00",
                                "Immediate cover & documents available instantly",
                                "Keyholder cover included as standard",
                                "Treatment risks & damage coverage included",
                                "Friendly UK-based support team"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                >
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative group inline-block w-full md:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-300 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                                <Link
                                    href="/contact"
                                    className="relative flex items-center justify-center px-8 py-4 text-lg rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-orange-500/40 border border-white/20 ring-4 ring-orange-500/10 overflow-hidden transition-all duration-300 active:scale-95 hover:scale-105 w-full md:w-auto"
                                >
                                    <span className="relative z-10">Contact Us</span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-blue-600/5 rounded-3xl transform rotate-3 scale-105" />
                        <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                            <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-50" />
                                <div className="relative z-10 flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-bold text-xl md:text-2xl mb-2">Public Liability Cover</h3>
                                        <p className="text-slate-300 text-sm md:text-base font-light">Including Keyholder & Treatment Risks</p>
                                    </div>
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shrink-0">
                                        <Shield className="w-6 h-6 text-blue-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-2">
                                <PricingRow amount="1m" price="120.00" />
                                <PricingRow amount="2m" price="140.00" />
                                <PricingRow amount="5m" price="225.00" isLast />
                            </div>

                            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-500 font-medium">
                                Premiums are exclusive of IPT and Policy Fee.
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section >
    )
}

function PricingRow({ amount, price, isLast }: { amount: string, price: string, isLast?: boolean }) {
    return (
        <div className={`group/row relative p-4 rounded-xl hover:bg-blue-50/50 transition-colors cursor-default ${!isLast ? 'mb-2' : ''}`}>
            <div className="flex items-center justify-between relative z-10">
                <div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-slate-900">£{amount}</span>
                        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">PL Limit</span>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-xs text-slate-400 font-medium block mb-0.5 uppercase tracking-wide">from</span>
                    <span className="text-2xl font-black text-slate-900 group-hover/row:text-blue-600 transition-colors">£{price}</span>
                </div>
            </div>
        </div>
    )
}
