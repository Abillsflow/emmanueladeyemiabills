import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanueladeyemiabills-7j2u.vercel.app"),
  title: "Emmanuel Adeyemi (Abills) — Digital Designer & Developer",
  description:
    "The portfolio of Emmanuel Adeyemi, also known as Abills: digital design, Webflow development, and thoughtful e-commerce experiences.",
  applicationName: "Abills Portfolio",
  openGraph: {
    type: "website",
    title: "Emmanuel Adeyemi (Abills) — Digital Designer & Developer",
    description: "Thoughtful design. Purposeful development. Digital experiences built with intention.",
    siteName: "Abills Portfolio",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f3f1eb",
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
