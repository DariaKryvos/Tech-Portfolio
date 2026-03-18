import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Megokruto - Digital Agency | Websites, Apps, Branding, Security",
    template: "%s | Megokruto",
  },
  description:
    "We build websites, apps, online stores, logos, and run social media. We also protect your business from hackers. Based in The Netherlands.",
  keywords: [
    "web development",
    "app development",
    "digital agency",
    "branding",
    "cybersecurity",
    "social media management",
    "Netherlands",
    "website design",
    "mobile app",
    "e-commerce",
    "UI/UX design",
    "logo design",
  ],
  authors: [{ name: "Megokruto" }],
  creator: "Megokruto",
  metadataBase: new URL("https://megokruto.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Megokruto",
    title: "Megokruto - We Build Websites, Apps, and Brands",
    description:
      "Full-service digital agency. Websites, apps, online stores, logos, social media, and cybersecurity. Based in The Netherlands.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Megokruto - Digital Agency",
    description:
      "We build websites, apps, online stores, logos, and keep it all safe from hackers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="canonical" href="https://megokruto.com" />
      </head>
      <body className="bg-[#0a0a0b] text-gray-200 antialiased min-h-screen">
        <Navbar />
        <main className="min-w-0">{children}</main>
        <Footer />
        <FloatingButtons />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Megokruto",
              url: "https://megokruto.com",
              description:
                "Full-service digital agency delivering websites, apps, branding, social media, and cybersecurity.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "NL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+31627586965",
                email: "megokruto@gmail.com",
                contactType: "customer service",
              },
              sameAs: [],
              serviceType: [
                "Web Development",
                "Mobile App Development",
                "Social Media Management",
                "Branding",
                "Cybersecurity",
                "UI/UX Design",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
