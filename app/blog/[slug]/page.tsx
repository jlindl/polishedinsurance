import { Container, Section } from "@/components/ui/layout"
import { blogPosts } from "@/lib/blog"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar } from "lucide-react"
import { BlogCTA } from "@/components/sections/blog-cta"

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        return {
            title: "Article Not Found",
        }
    }

    return {
        title: post.seo.title,
        description: post.seo.description,
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        return notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            <article>
                {/* Dark Hero Section */}
                <div className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full" />
                    </div>

                    <Container className="relative z-10 max-w-4xl">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors group font-medium"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Advice
                        </Link>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-slate-400 font-medium border-l-2 border-blue-500 pl-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-400" />
                                <span className="text-slate-300">{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-400" />
                                <span className="text-slate-300">{post.readingTime}</span>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Overlapping Content Section */}
                <div className="relative z-20 -mt-24 pb-20">
                    <Container className="max-w-4xl">
                        {/* Featured Image Card */}
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-12 border-4 border-white">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>

                        {/* Article Content */}
                        <div className="max-w-3xl mx-auto">
                            <div
                                className="prose prose-lg md:prose-xl prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-900 prose-strong:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-blockquote:border-l-4 prose-blockquote:border-orange-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:bg-orange-50/50 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:rounded-r-xl"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>

                        {/* Article CTA */}
                        <BlogCTA />
                    </Container>
                </div>
            </article>
        </main>
    )
}
