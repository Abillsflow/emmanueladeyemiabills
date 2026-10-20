import type { MetadataRoute } from "next";

const siteUrl = "https://emmanueladeyemiabills-7j2u.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
