import type { MetadataRoute } from "next";

const appBaseUrl =
  process.env.NEXT_PUBLIC_APP_BASE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: appBaseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
