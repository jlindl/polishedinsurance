"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react"

export function LeadCaptureForm({ className }: { className?: string }) {
    const [isLoading, setIsLoading] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        // Mock submission delay
        setTimeout(() => {
            setIsLoading(false)
            setIsSuccess(true)
        }, 1500)
    }

    if (isSuccess) {
        return (
            <div className={cn("bg-white p-8 rounded-2xl shadow-xl border border-emerald-100 text-center space-y-4", className)}>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Quote Requested!</h3>
                <p className="text-slate-600">
                    Thanks for your interest. One of our specialists will call you shortly to discuss your policy options.
                </p>
                <div className="pt-4">
                    <p className="text-xs text-slate-400">Usually within 15 minutes during business hours.</p>
                </div>
            </div>
        )
    }

    return (
        <div className={cn("bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100", className)}>
            <div className="mb-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">Get Your Free Quote</h3>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700">Full Name</Label>
                    <Input id="name" required placeholder="Joe Bloggs" className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                    <Input id="email" required type="email" placeholder="joe@cleaning.co.uk" className="bg-slate-50 border-slate-200" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700">Phone Number</Label>
                    <Input id="phone" required type="tel" placeholder="07700 900000" className="bg-slate-50 border-slate-200" />
                </div>

                <Button
                    type="submit"
                    className="w-full h-12 text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 shadow-lg shadow-orange-500/20"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Get My Quote
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>

                <p className="text-xs text-center text-slate-400 mt-4">
                    By submitting this form you agree to our privacy policy. Your data is secure.
                </p>
            </form>
        </div>
    )
}
