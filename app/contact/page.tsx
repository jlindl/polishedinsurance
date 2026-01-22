import { ContactForm } from "@/components/contact-form"
import { Container } from "@/components/ui/layout"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-950 pt-32 pb-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-900/10 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Whether you need a quote, have a question about your policy, or just want to chat about your insurance needs, our team is here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Contact Form Column */}
                    <div>
                        <ContactForm />
                    </div>

                    {/* Contact Details Column */}
                    <div className="space-y-12 py-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-400 mb-1">Call Us</p>
                                        <a href="tel:03300568970" className="text-xl text-white hover:text-cyan-400 transition-colors font-medium">
                                            0330 056 8970
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-400 mb-1">Email Us</p>
                                        <a href="mailto:hello@polished-insurance.co.uk" className="text-xl text-white hover:text-blue-400 transition-colors font-medium break-all">
                                            hello@polished-insurance.co.uk
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-400 mb-1">Visit Us</p>
                                        <p className="text-lg text-white">
                                            98 Standishgate,<br />
                                            Wigan, WN1 1XA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                                <div className="flex items-start gap-4">
                                    <Clock className="w-6 h-6 text-slate-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-lg font-semibold text-white mb-2">Office Hours</h4>
                                        <div className="space-y-1 text-slate-400">
                                            <p className="flex justify-between gap-8">
                                                <span>Monday - Friday</span>
                                                <span className="text-slate-200">9:00 AM - 5:30 PM</span>
                                            </p>
                                            <p className="flex justify-between gap-8">
                                                <span>Saturday - Sunday</span>
                                                <span className="text-slate-200">Closed</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}
