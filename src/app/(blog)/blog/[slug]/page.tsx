import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getPostSummary,
} from "@/lib/blog";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post not found | Neelansh Khare",
    };
  }

  const description = getPostSummary(post);

  return {
    title: `${post.title} | Neelansh Khare`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <nav className="mb-10 flex justify-between items-center text-sm">
        <Link
          href="/blog"
          className="text-gray-400 hover:text-white transition-colors underline decoration-dotted"
        >
          ← All posts
        </Link>
        <Link
          href="/"
          className="text-gray-400 hover:text-white transition-colors underline decoration-dotted"
        >
          Home
        </Link>
      </nav>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="text-sm text-gray-500 font-code"
          >
            {formatPostDate(post.date)}
          </time>
        </header>

        <div className="space-y-5 text-gray-300 leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </article>

      <footer className="mt-16 pt-8 border-t border-gray-900 text-sm text-gray-500">
        <Link
          href="/blog"
          className="hover:text-white transition-colors underline decoration-dotted"
        >
          ← Back to all posts
        </Link>
      </footer>
    </div>
  );
}
