"use client"

import { Section, Container } from "@/components/ui/layout"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Users, Wrench, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const specialistServices = [
    {
        title: "Public Liability Insurance",
        description: "We provide specialist covers to protect your business including keyholder cover, damage caused by the incorrect use of chemicals and damage to the item being cleaned. Not all policies include these covers, but ours does. We can arrange many specialist covers for your business.",
        icon: ShieldCheck,
        color: "text-blue-500",
        bg: "bg-blue-50",
        image: "/specialist-public.png"
    },
    {
        title: "Employers Liability Insurance",
        description: "If your office cleaning business has employees or uses labour only sub contractors then you are legally required to provide Employers Liability Insurance. This will protect your business in the event that someone working for you was to be injured at work.",
        icon: Users,
        color: "text-amber-500",
        bg: "bg-amber-50",
        image: "/specialist-employers.png"
    },
    {
        title: "Tools & Equipment Insurance",
        description: "If your cleaning business cannot operate without the tools and equipment you use to do your work, then what will happen if that equipment was stolen or damaged? We can arrange affordable insurance cover that will ensure you are able to get back to work straightaway.",
        icon: Wrench,
        color: "text-purple-500",
        bg: "bg-purple-50",
        image: "/specialist-tools.png"
    }
]

export function SpecialistCover() {
    return (
        <Section className="bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl pointer-events-none" />

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                            Essential Protection for Your Business
                        </h2>
                        <p className="text-slate-600 text-xl leading-relaxed">
                            Beyond standard cleaning, we offer specialised cover ensuring every aspect of your operation is compliant and secure.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialistServices.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -12 }}
                        >
                            <Card className="h-full transition-all duration-300 border-none shadow-lg overflow-hidden group bg-slate-50 flex flex-col relative z-0 hover:shadow-2xl ring-1 ring-slate-100">
                                <div className="relative h-64 w-full overflow-hidden shrink-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                    <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center backdrop-blur-md bg-white/95 shadow-xl border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`w-6 h-6 ${service.color}`} />
                                    </div>
                                    <div className="absolute bottom-4 left-6 right-6">
                                        <h3 className="text-2xl font-bold text-white drop-shadow-md leading-tight">{service.title}</h3>
                                    </div>
                                </div>
                                <CardContent className="p-8 flex flex-col h-full grow relative">
                                    <p className="text-slate-600 leading-7 text-base mb-8 grow">
                                        {service.description}
                                    </p>
                                    <div className="mt-auto pt-4 relative z-10 w-full">
                                        <motion.a
                                            href="https://alliedinsurance.schemeserve.com/GetQuote/questions.aspx?SchemeId=7148&NewClient=true"
                                            className="w-full bg-[#FF9900] hover:bg-[#ff8800] text-white font-bold text-lg h-14 rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 border-none relative overflow-hidden flex items-center justify-center cursor-pointer"
                                            initial="initial"
                                            whileHover="hover"
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <motion.div
                                                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                                variants={{
                                                    initial: { x: "-100%" },
                                                    hover: { x: "100%", transition: { duration: 1, repeat: Infinity, ease: "linear" } }
                                                }}
                                            />
                                            <span className="relative flex items-center justify-center gap-2">
                                                Get Your Quote Online
                                                <motion.div
                                                    variants={{
                                                        initial: { x: 0 },
                                                        hover: { x: 4 }
                                                    }}
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </motion.div>
                                            </span>
                                        </motion.a>
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
