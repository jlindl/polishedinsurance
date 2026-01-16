import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cleaning Insurance | Specialist Cover from £120 | Polished Insurance",
  description: "Specialist Cleaning Insurance for UK businesses. Public Liability cover for Carpet, Domestic, Commercial & Contract Cleaners. Get a quote in minutes.",
  keywords: ["Cleaning Insurance", "Public Liability Insurance for Cleaners", "Carpet Cleaning Insurance", "Domestic Cleaning Insurance", "Commercial Cleaning Insurance", "UK"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Polished Insurance",
  "image": "https://polishedinsurance.co.uk/logo.png",
  "description": "Specialist insurance provider for the UK cleaning industry.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "UK"
  },
  "priceRange": "£",
  "telephone": "0330 056 8970"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
