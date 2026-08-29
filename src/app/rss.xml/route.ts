import { getAllPosts, getPostSummary } from "@/lib/blog";

export const dynamic = "force-static";

const SITE_URL = "https://neelanshkhare.github.io";
const BASE_PATH = "/new-portfolio";
const FEED_URL = `${SITE_URL}${BASE_PATH}/rss.xml`;

function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRFC822(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return new Date().toUTCString();
  return date.toUTCString();
}

export function GET() {
  const posts = getAllPosts();
  const latest = posts[0]?.date;
  const lastBuildDate = latest ? toRFC822(latest) : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}${BASE_PATH}/blog/${post.slug}`;
      const summary = getPostSummary(post);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${toRFC822(post.date)}</pubDate>
      <description>${escapeXml(summary)}</description>
      <content:encoded><![CDATA[${post.content
        .map((p) => `<p>${p}</p>`) 
        .join("\n")}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Neelansh Khare — Blog</title>
    <link>${SITE_URL}${BASE_PATH}/blog</link>
    <description>Weekly updates on research, engineering, and side projects from Neelansh Khare.</description>
    <language>en-us</language>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml" />
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
