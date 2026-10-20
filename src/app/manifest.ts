import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Emmanuel Adeyemi — Abills",
    short_name: "Abills",
    description: "Portfolio of Emmanuel Adeyemi (Abills), digital designer and Webflow developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f1eb",
    theme_color: "#f3f1eb",
    icons: [
      {
        src: "/images/D4F1065C-C721-45BF-AC87-C984F2B7506E.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
