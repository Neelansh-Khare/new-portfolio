import Link from "next/link";
import { getAllPosts, getPostSummary, formatPostDate } from "@/lib/blog";

export const metadata = {
  title: "Blog | Neelansh Khare",
  description:
    "Personal blog of Neelansh Khare — weekly updates on research, engineering, and side projects.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 flex justify-between items-center">
        <h1 className="text-4xl font-bold font-heading">Neelansh&apos;s Blog</h1>
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors underline decoration-dotted"
        >
          ← Back to Home
        </Link>
      </header>

      <main className="space-y-12">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-gray-800 pb-10 last:border-0"
          >
            <div className="mb-3">
              <h2 className="text-2xl font-semibold mb-2 font-heading">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <time
                dateTime={post.date}
                className="text-sm text-gray-500 font-code"
              >
                {formatPostDate(post.date)}
              </time>
            </div>

            <p className="text-gray-300 leading-relaxed mb-4">
              {getPostSummary(post)}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium inline-flex items-center gap-1"
              aria-label={`Read more: ${post.title}`}
            >
              Read more →
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <p className="text-gray-500 italic">
            No blog posts yet. Check back soon!
          </p>
        )}
      </main>

      <footer className="mt-20 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Neelansh Khare. All rights reserved.</p>
        <p className="mt-2">
          <Link
            href="/rss.xml"
            className="hover:text-gray-400 transition-colors underline decoration-dotted"
          >
            RSS
          </Link>
        </p>
      </footer>
    </div>
  );
}
