import { Container, Section } from "@/components/ui/layout"
import { blogPosts } from "@/lib/blog"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Cleaning Business Advice & Tips | Polished Insurance Blog",
    description: "Expert advice for UK cleaning businesses. Guides on insurance, risk management, and growing your cleaning company.",
}

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full" />
                    <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl" />
                </div>

                <Container className="relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold tracking-wider text-sm mb-6">
                            POLISHED INSIGHTS
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                            Expert Advice for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Professional Cleaners</span>
                        </h1>
                        <p className="text-slate-300 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
                            Practical tips, industry updates, and insurance guides to help you protect and grow your business.
                        </p>
                    </div>
                </Container>
            </div>

            <Section className="-mt-20 relative z-20 pt-0">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col h-full border border-slate-100 hover:-translate-y-2 block relative"
                            >
                                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 text-xs font-bold text-blue-600 shadow-lg border border-white/20">
                                        Read Article
                                    </div>
                                </div>

                                <div className="relative h-64 w-full overflow-hidden shrink-0">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                </div>

                                <div className="p-8 flex flex-col grow relative">
                                    <div className="flex items-center gap-3 text-xs font-bold tracking-wider text-blue-600 uppercase mb-4">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-blue-200" />
                                        <span>{post.readingTime}</span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                                        {post.title}
                                    </h2>

                                    <p className="text-slate-600 leading-relaxed mb-8 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center text-slate-400 text-sm font-semibold group-hover:text-blue-600 transition-colors">
                                        Continue Reading
                                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    )
}
