import Link from 'next/link';
import { blogData } from '@/data/blog';

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-12 flex justify-between items-center">
        <h1 className="text-4xl font-bold font-heading">Neelansh's Blog</h1>
        <Link 
          href="/" 
          className="text-gray-400 hover:text-white transition-colors underline decoration-dotted"
        >
          ← Back to Home
        </Link>
      </header>

      <main className="space-y-16">
        {blogData.map((post) => (
          <article key={post.slug} className="border-b border-gray-800 pb-12 last:border-0">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2 font-heading">{post.title}</h2>
              <time className="text-sm text-gray-500 font-code">{post.date}</time>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {post.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}

        {blogData.length === 0 && (
          <p className="text-gray-500 italic">No blog posts yet. Check back soon!</p>
        )}
      </main>
      
      <footer className="mt-20 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Neelansh Khare. All rights reserved.
      </footer>
    </div>
  );
}
