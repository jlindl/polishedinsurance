import { services } from "@/lib/services"
import { notFound } from "next/navigation"
import { Container } from "@/components/ui/layout"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ChevronRight, Phone, ShieldCheck, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Testimonials } from "@/components/sections/testimonials"

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = services.find((s) => s.slug === slug)

    if (!service) {
        return {
            title: "Service Not Found",
        }
    }

    return {
        title: service.seo.title,
        description: service.seo.description,
    }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = services.find((s) => s.slug === slug)

    if (!service) {
        return notFound()
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.shortDescription,
        "provider": {
            "@type": "InsuranceAgency",
            "name": "Polished Insurance",
            "image": "https://polishedinsurance.co.uk/logo.png"
        },
        "serviceType": "Insurance",
        "areaServed": {
            "@type": "Country",
            "name": "UK"
        },
        "offers": {
            "@type": "Offer",
            "price": "120.00",
            "priceCurrency": "GBP"
        }
    }

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://polishedinsurance.co.uk"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://polishedinsurance.co.uk/#services"
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://polishedinsurance.co.uk/insurance/${service.slug}`
        }]
    }

    return (
        <main className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }}
            />
            {/* Hero Section */}
            <div className="relative pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" />
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl" />
                </div>

                <Container className="relative z-10">
                    <Link
                        href="/#cleaninginsurance"
                        className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Cleaning Insurance
                    </Link>

                    <div className="max-w-4xl">
                        <div className={`inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-6`}>
                            <service.icon className="w-8 h-8 text-blue-400" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                            {service.shortDescription}
                        </p>
                    </div>
                </Container>
            </div>

            {/* Content Section */}
            <section className="py-20 -mt-32 lg:-mt-40 relative z-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* Featured Image */}
                            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl group border-[10px] border-white">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-2">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span>Specialist Coverage</span>
                                    </div>
                                    <p className="text-white text-lg md:text-xl font-medium drop-shadow-md">
                                        Professional protection for your {service.title.toLowerCase().replace(' insurance', '')} business
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                    <ShieldCheck className="w-6 h-6 text-blue-500" />
                                    Why do you need this cover?
                                </h2>
                                <div className="prose prose-lg text-slate-600 leading-relaxed whitespace-pre-line">
                                    {service.fullDescription}
                                </div>
                            </div>

                            <div className="bg-blue-600 rounded-3xl p-8 md:p-12 shadow-xl text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/20 transition-colors duration-500" />
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold mb-6">Ready to get protected?</h2>
                                    <p className="text-blue-100 mb-8 text-lg">
                                        Get your quote online in minutes. Instant documentation and cover available immediately.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="https://alliedinsurance.schemeserve.com/GetQuote/questions.aspx?SchemeId=7148&NewClient=true"
                                            className="inline-flex items-center justify-center h-14 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-xl px-8 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 relative overflow-hidden group hover:scale-105 active:scale-95"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                Get Your Quote Now
                                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                                        </a>
                                        <a
                                            href="tel:03300568970"
                                            className="inline-flex items-center justify-center h-14 border-2 border-white/30 text-white font-semibold rounded-xl px-8 hover:bg-white/10 transition-colors"
                                        >
                                            <Phone className="w-5 h-5 mr-2" />
                                            0330 056 8970
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 sticky top-32">
                                <h3 className="text-lg font-bold text-slate-900 mb-6">
                                    Key Benefits
                                </h3>
                                <div className="space-y-4">
                                    {service.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-600 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="h-px bg-slate-100 my-8" />

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-slate-500">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span>Instant Documentation</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-500">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span>Zurich Backed Cover</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-500">
                                        <div className="w-2 h-2 rounded-full bg-green-500" />
                                        <span>UK Based Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Testimonials />
        </main>
    )
}
