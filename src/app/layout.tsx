import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanueladeyemiabills-7j2u.vercel.app"),
  alternates: { canonical: "/" },
  keywords: ["Emmanuel Adeyemi", "Abills", "Webflow developer", "Webflow designer", "website designer", "website development", "UI UX designer", "e-commerce website design", "Shopify website design", "digital designer"],
  authors: [{ name: "Emmanuel Adeyemi", url: "https://emmanueladeyemiabills-7j2u.vercel.app" }],
  creator: "Emmanuel Adeyemi",
  publisher: "Emmanuel Adeyemi",
  category: "Design and Web Development",
  icons: {
    icon: [{ url: "/images/D4F1065C-C721-45BF-AC87-C984F2B7506E.png", type: "image/png" }],
    shortcut: "/images/D4F1065C-C721-45BF-AC87-C984F2B7506E.png",
    apple: "/images/D4F1065C-C721-45BF-AC87-C984F2B7506E.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Adeyemi (Abills) | Webflow Designer & Developer",
    description: "Website design, Webflow development, UI/UX, and e-commerce experiences built with intention.",
    images: ["/images/D4F1065C-C721-45BF-AC87-C984F2B7506E.png"],
  },
  title: "Emmanuel Adeyemi (Abills) | Webflow Designer & Developer",
  description:
    "Emmanuel Adeyemi (Abills) is a digital designer and Webflow developer creating thoughtful websites, UI/UX, and e-commerce experiences for growing brands.",
  applicationName: "Abills Portfolio",
  openGraph: {
    type: "website",
    title: "Emmanuel Adeyemi (Abills) — Digital Designer & Developer",
    description: "Website design, Webflow development, UI/UX, and e-commerce experiences built with intention by Emmanuel Adeyemi (Abills).",
    siteName: "Emmanuel Adeyemi — Abills",
    url: "https://emmanueladeyemiabills-7j2u.vercel.app",
    images: [{ url: "/images/D4F1065C-C721-45BF-AC87-C984F2B7506E.png", alt: "Emmanuel Adeyemi personal logo" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3f1eb",
  width: "device-width",
  initialScale: 1,
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://emmanueladeyemiabills-7j2u.vercel.app/#person",
    name: "Emmanuel Adeyemi",
    alternateName: "Abills",
    url: "https://emmanueladeyemiabills-7j2u.vercel.app/",
    image: "https://emmanueladeyemiabills-7j2u.vercel.app/images/D4F1065C-C721-45BF-AC87-C984F2B7506E.png",
    jobTitle: "Digital Designer and Webflow Developer",
    description: "Digital designer and Webflow developer focused on website design, UI/UX, and e-commerce experiences.",
    sameAs: [
      "https://www.instagram.com/emmanuelcreativehub/",
      "https://www.tiktok.com/@abillscreates",
      "https://www.threads.com/@emmanuelcreativehub",
      "https://x.com/iamabills",
      "https://www.linkedin.com/in/emmanuelcreates",
      "https://www.facebook.com/share/1Eb5Hx5Ec2/"
    ],
    knowsAbout: ["Webflow development", "Website design", "UI/UX design", "E-commerce website design", "Shopify", "Digital design"]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://emmanueladeyemiabills-7j2u.vercel.app/#website",
    name: "Emmanuel Adeyemi — Abills",
    url: "https://emmanueladeyemiabills-7j2u.vercel.app/",
    inLanguage: "en",
    creator: { "@id": "https://emmanueladeyemiabills-7j2u.vercel.app/#person" }
  }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
