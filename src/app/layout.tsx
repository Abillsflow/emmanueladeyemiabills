import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanueladeyemiabills.vercel.app"),
  title: {
    default: "Emmanuel Adeyemi (Abills) — Digital Experience Designer & Developer",
    template: "%s | Emmanuel Adeyemi",
  },
  description:
    "Emmanuel Adeyemi, known as Abills, designs and builds distinctive digital experiences, Webflow websites, and e-commerce storefronts for ambitious brands.",
  applicationName: "Abills Portfolio",
  openGraph: {
    type: "website",
    title: "Emmanuel Adeyemi (Abills) — Digital Experience Designer & Developer",
    description:
      "Thoughtful design. Purposeful development. Digital experiences built to move brands forward.",
    siteName: "Abills Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Adeyemi (Abills) — Digital Experience Designer & Developer",
    description: "Digital experiences, Webflow development, and e-commerce for ambitious brands.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#10100f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
