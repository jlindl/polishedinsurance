"use client"

import { Section, Container } from "@/components/ui/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Home, Building2, Key, AppWindow, Flame, CheckCircle2, Phone, Truck, Sofa, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"

const MotionButton = motion(Button)

export function Services() {
    return (
        <Section className="bg-slate-50 scroll-mt-32" id="cleaninginsurance">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Comprehensive Cover For All Types of Cleaning
                    </h2>
                    <p className="text-slate-600 text-xl leading-relaxed">
                        We understand the cleaning industry. Our Zurich-backed policies provide the specific protection your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                        >
                            <Card className="h-full transition-all duration-300 border-none shadow-lg overflow-hidden group bg-white flex flex-col relative z-0 hover:shadow-2xl">
                                <Link href={`/insurance/${service.slug}`} className="block relative h-64 w-full overflow-hidden shrink-0 cursor-pointer">
                                    <Image
                                        src={service.cardImage || service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                                    <div className="absolute bottom-4 left-6 right-6">
                                        <h3 className="text-2xl font-bold text-white drop-shadow-md leading-tight">{service.title}</h3>
                                    </div>
                                </Link>
                                <CardContent className="p-8 flex flex-col h-full bg-white grow relative">
                                    <p className="text-slate-600 leading-7 text-base mb-8 grow">
                                        {service.shortDescription}
                                    </p>
                                    <div className="mt-auto pt-4 relative z-10 w-full flex flex-col gap-3">
                                        <Link
                                            href={`/insurance/${service.slug}`}
                                            className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold text-lg h-12 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 border-none flex items-center justify-center"
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                Read More
                                                <ChevronRight className="w-5 h-5" />
                                            </span>
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="relative w-full overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold text-lg h-12 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 border-none flex items-center justify-center cursor-pointer group"
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                Contact Us
                                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
