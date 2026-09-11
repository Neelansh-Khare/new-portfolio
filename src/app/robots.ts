import type { MetadataRoute } from "next";

const SITE_URL = "https://neelanshkhare.github.io";
const BASE_PATH = "/new-portfolio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}${BASE_PATH}/sitemap.xml`,
    host: `${SITE_URL}${BASE_PATH}`,
  };
}
