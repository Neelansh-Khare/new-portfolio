import { type BlogPost, blogData } from "@/data/blog";

/**
 * Returns all blog posts sorted by date (newest first).
 * The source array in `src/data/blog.ts` can be in any order; sorting is done here.
 */
export function getAllPosts(): BlogPost[] {
  return [...blogData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/**
 * Look up a single post by slug. Returns `undefined` if no such post exists.
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogData.find((post) => post.slug === slug);
}

/**
 * Returns the post's description if present, otherwise the first paragraph
 * of its content (truncated to ~160 chars). Guaranteed non-empty.
 */
export function getPostSummary(post: BlogPost): string {
  if (post.description && post.description.trim().length > 0) {
    return post.description;
  }
  const firstParagraph = post.content[0] ?? "";
  if (firstParagraph.length <= 200) return firstParagraph;
  return `${firstParagraph.slice(0, 197).trimEnd()}...`;
}

/**
 * Format an ISO date (YYYY-MM-DD) as a human-readable string, e.g. "March 29, 2026".
 * Uses UTC to avoid off-by-one rendering when the deploy timezone differs.
 */
export function formatPostDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
