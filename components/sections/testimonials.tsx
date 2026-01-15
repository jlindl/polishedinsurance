"use client"

import { useState, useEffect } from "react"
import { Section, Container } from "@/components/ui/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
    {
        name: "Paul Simons",
        company: "PS Cleaning Solutions",
        text: "I have been dealing with Polished for over 15 years and I would never go anywhere else. Lynda has been superb, always available when I have queries."
    },
    {
        name: "Judy Graham",
        company: "Sparkle & Shine Cleaning",
        text: "When I first started my business I had a policy I bought through a comparison site and I learned a very expensive lesson. Since finding polished I have been very happy."
    },
    {
        name: "Steve Penny",
        company: "Spenny Cleaning Services",
        text: "Before I was insured with polished I had a policy with another broker who never answered the phone. Polished have been excellent and offer great cover."
    },
    {
        name: "Ken Sargent",
        company: "Pane in the Glass Window Cleaning",
        text: "I was referred to polished insurance by trade by the FWC and I have been with them over 8 years now and always found them to be competitive and very helpful."
    }
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide()
        }, 5000)

        return () => clearInterval(timer)
    }, [currentIndex])

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length)
    }

    const nextSlide = () => paginate(1)
    const prevSlide = () => paginate(-1)

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    }

    return (
        <Section id="testimonials" className="bg-slate-50 overflow-hidden">
            <Container>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Trusted by Cleaning Professionals
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Don't just take our word for it. Here's what our customers say.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto min-h-[400px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full px-4"
                        >
                            <Card className="bg-white border-none shadow-xl md:p-8">
                                <CardContent className="p-8 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                        <Quote className="w-8 h-8 text-blue-500" />
                                    </div>
                                    <p className="text-slate-700 italic text-xl md:text-2xl mb-8 leading-relaxed font-light">
                                        "{testimonials[currentIndex].text}"
                                    </p>
                                    <div>
                                        <div className="font-bold text-slate-900 text-lg" suppressHydrationWarning>{testimonials[currentIndex].name}</div>
                                        <div className="text-blue-600 font-medium" suppressHydrationWarning>{testimonials[currentIndex].company}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex justify-center items-center gap-8 mt-8">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm active:scale-95"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1)
                                    setCurrentIndex(index)
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm active:scale-95"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </Container>
        </Section>
    )
}
