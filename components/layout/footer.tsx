"use client"

import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/layout"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative w-80 h-20 mb-8">
                            <Image
                                src="/logo.png"
                                alt="Polished Insurance"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-slate-400">
                            Specialist insurance brokers for the cleaning industry. secure coverage for your business with a team that understands your needs.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Facebook className="w-4 h-4" />} />
                            <SocialLink href="#" icon={<Twitter className="w-4 h-4" />} />
                            <SocialLink href="#" icon={<Linkedin className="w-4 h-4" />} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <h3 className="text-white font-semibold mb-6">Insurance Types</h3>
                        <ul className="space-y-3 text-sm">
                            <li><FooterLink href="#">Carpet Cleaners</FooterLink></li>
                            <li><FooterLink href="#">Domestic Cleaners</FooterLink></li>
                            <li><FooterLink href="#">Contract Cleaners</FooterLink></li>
                            <li><FooterLink href="#">Window Cleaners</FooterLink></li>
                            <li><FooterLink href="#">Oven Cleaners</FooterLink></li>
                            <li><FooterLink href="#">Office Cleaners</FooterLink></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><FooterLink href="#">Get a Quote</FooterLink></li>
                            <li><FooterLink href="#">Make a Claim</FooterLink></li>
                            <li><FooterLink href="#">Privacy Policy</FooterLink></li>
                            <li><FooterLink href="#">Terms & Conditions</FooterLink></li>
                            <li><FooterLink href="#">Cookie Policy</FooterLink></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                                <span>98 Standishgate, Wigan, WN1 1XA</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <a href="tel:03300568970" className="hover:text-white transition-colors">0330 056 8970</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <a href="mailto:admin@polished-insurance.co.uk" className="hover:text-white transition-colors">admin@polished-insurance.co.uk</a>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 text-center">
                    <p className="mb-2">
                        Polished Insurance is a trading name of Allied Insurance Services Ltd who are authorised and regulated by the Financial Conduct Authority (Ref: 309497).
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} Polished Insurance. All rights reserved. Registered in England No: 4319831.
                    </p>
                </div>
            </Container>
        </footer>
    )
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="hover:text-blue-400 transition-colors">
            {children}
        </Link>
    )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
        >
            {icon}
        </a>
    )
}
