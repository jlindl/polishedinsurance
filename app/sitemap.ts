import { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { blogPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://polishedinsurance.co.uk' // Placeholder domain

    const serviceUrls = services.map((service) => ({
        url: `${baseUrl}/insurance/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date), // Use post date as last modified
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly', // Blog index changes often
            priority: 0.8,
        },
        ...serviceUrls,
        ...blogUrls,
    ]
}
