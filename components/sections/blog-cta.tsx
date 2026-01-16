"use client"

import { ChevronRight } from "lucide-react"

export function BlogCTA() {
    return (
        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden group-hover:border-blue-200 transition-colors">
            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 tracking-tight">
                    Need Specialised Cleaning Insurance?
                </h3>
                <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg font-medium leading-relaxed">
                    Protect your business with comprehensive cover starting from just £6.50/month. Get a quote in minutes.
                </p>
                <a
                    href="https://alliedinsurance.schemeserve.com/GetQuote/questions.aspx?SchemeId=7148&NewClient=true"
                    className="inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-white rounded-full bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 active:scale-95 transition-all duration-300 relative overflow-hidden group"
                >
                    <span className="relative z-10 flex items-center">
                        Get Your Quote Now
                        <ChevronRight className="w-5 h-5 ml-2 opacity-90 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                </a>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 blur-[60px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
    )
}
