"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/layout"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { href: "/#services", label: "Services" },
        { href: "/#benefits", label: "Why Us" },
        { href: "/#testimonials", label: "Reviews" },
        { href: "/blog", label: "Advice" },
        { href: "/contact", label: "Contact" },
    ]

    return (
        <header
            className={cn(
                "fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]",
                isScrolled
                    ? "top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-5xl rounded-2xl bg-slate-900/80 backdrop-blur-xl shadow-lg border border-white/10 py-3"
                    : "top-0 left-0 right-0 bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 z-50 relative group">
                    <div className={cn(
                        "relative transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]",
                        isScrolled ? "w-48 h-12" : "w-80 md:w-96 h-20 md:h-24"
                    )}>
                        <Image
                            src="/logo.png"
                            alt="Polished Insurance"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    <div className="flex items-center mr-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group overflow-hidden",
                                    "text-slate-200 hover:text-white"
                                )}
                            >
                                <span className="relative z-10">{link.label}</span>
                                <span className="absolute inset-0 bg-white/10 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-lg" />
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                            </Link>
                        ))}
                    </div>

                    <div className={cn(
                        "flex items-center gap-3 pl-4 border-l",
                        isScrolled ? "border-white/10" : "border-white/20"
                    )}>
                        <a
                            href="tel:03300568970"
                            className={cn(
                                "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-95 h-9 px-4 text-sm gap-2 hidden xl:flex text-slate-200 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <Phone className="w-4 h-4" />
                            <span className="font-semibold">0330 056 8970</span>
                        </a>
                        <a
                            href="https://alliedinsurance.schemeserve.com/GetQuote/questions.aspx?SchemeId=7148&NewClient=true"
                            className={cn(
                                "inline-flex items-center justify-center h-9 text-sm font-medium relative overflow-hidden rounded-full text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10 px-6 group",
                                "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-orange-500/20 hover:shadow-orange-500/40"
                            )}
                        >
                            <span className="relative z-10 flex items-center">
                                Get a Quote
                                <ChevronRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                        </a>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden z-50 p-2 relative w-10 h-10 flex items-center justify-center rounded-full transition-colors",
                        "text-white bg-white/10 backdrop-blur-md hover:bg-white/20"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X className="w-6 h-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                            className="absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl mx-4 p-6 shadow-2xl md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-xl font-medium text-slate-200 hover:text-cyan-400 flex items-center justify-between group p-2 rounded-lg hover:bg-white/5 transition-colors"
                                        >
                                            {link.label}
                                            <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500" />
                                        </Link>
                                    </motion.div>
                                ))}
                                <div className="h-px bg-white/10 my-2" />
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex flex-col gap-3"
                                >
                                    <a
                                        href="https://alliedinsurance.schemeserve.com/GetQuote/questions.aspx?SchemeId=7148&NewClient=true"
                                        className="inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold relative overflow-hidden group h-14 px-8 text-lg hover:opacity-90 transition-all active:scale-95"
                                    >
                                        <span className="relative z-10">Get Your Quote Now</span>
                                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                                    </a>
                                    <a
                                        href="tel:03300568970"
                                        className="inline-flex items-center justify-center w-full rounded-xl border border-white/10 text-slate-200 hover:bg-white/5 hover:text-white h-14 px-8 text-lg font-medium transition-all active:scale-95"
                                    >
                                        <Phone className="w-4 h-4 mr-2" />
                                        Call 0330 056 8970
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </header>
    )
}
