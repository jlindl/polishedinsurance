import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FacebookPixel } from "@/components/analytics/facebook-pixel";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Cleaning Insurance | Specialist Cover from £120 | Polished Insurance",
  description: "Specialist Cleaning Insurance for UK businesses. Public Liability cover for Carpet, Domestic, Commercial & Contract Cleaners. Get a quote in minutes.",
  keywords: ["Cleaning Insurance", "Public Liability Insurance for Cleaners", "Carpet Cleaning Insurance", "Domestic Cleaning Insurance", "Commercial Cleaning Insurance", "UK"],
};

export const dynamic = "force-dynamic";

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
        className={`${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <FacebookPixel />
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
