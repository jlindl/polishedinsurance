"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Send, Loader2 } from "lucide-react"

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Failed to send message")
            }

            // Optional: clear form logic here if needed, or show success UI
            // For now we'll just alert or could add toast
            alert("Message sent successfully!")
            // event.currentTarget.reset() // Reset form if desired
        } catch (error) {
            console.error("Submission error:", error)
            alert("Failed to send message. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="p-6 md:p-8 bg-slate-900/50 border-slate-800 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6 text-white">Send us a Message</h2>
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">
                        Name
                    </label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        className="bg-slate-950/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">
                            Email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            className="bg-slate-950/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-300">
                            Phone
                        </label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="07700 900000"
                            className="bg-slate-950/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        className="bg-slate-950/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50 focus:ring-cyan-500/20 min-h-[120px]"
                        required
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-6 shadow-lg shadow-cyan-500/20"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </form>
        </Card>
    )
}
