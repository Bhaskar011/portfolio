import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name }],
  keywords: [
    "Full Stack Developer",
    "AI Integration",
    "Automation Developer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Bangalore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${site.name} Portfolio`,
    title: `${site.name} | ${site.role}`,
    description: site.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#07080a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
  alumniOf: "Global Academy of Technology",
  sameAs: [site.github, site.linkedin].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden bg-bg font-sans text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
