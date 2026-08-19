import { profile } from "@/lib/content";

export default function sitemap() {
  const now = new Date();
  return [
    { url: profile.site, lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: `${profile.site}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${profile.site}/blog`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
