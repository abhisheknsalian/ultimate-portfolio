import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Replace with your real Vercel/custom domain after deployment
    sitemap: "https://your-vercel-url.vercel.app/sitemap.xml",
  };
}