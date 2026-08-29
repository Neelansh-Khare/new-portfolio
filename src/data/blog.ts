export interface BlogPost {
  /** URL segment. Must be unique across all posts and lowercase-hyphenated. */
  slug: string;
  /** Post title. */
  title: string;
  /** ISO 8601 date (YYYY-MM-DD). Used for sorting and <time dateTime>. */
  date: string;
  /** Optional summary. Used for metadata and the /blog index card. */
  description?: string;
  /** Body content as an array of paragraphs. */
  content: string[];
}

export const blogData: BlogPost[] = [
  {
    slug: "weekly-update-week-2",
    title: "The 'U-Shape' Reality & Query Stability",
    date: "2026-03-29",
    description:
      "Reproducing the 'Lost in the Middle' U-shaped performance curve and probing query stability in retrieval systems.",
    content: [
      "This week felt like the moment the two separate threads of my research finally started to pull together into a single, cohesive story. The big 'Aha!' moment came when I successfully reproduced the 'Lost in the Middle' U-shaped performance curve in my position-controlled study.",
      "It's one thing to read about models failing to utilize information in the middle of a long context; it's another thing entirely to see a heuristic model hit 100% accuracy at the edges and a flat 0% in the center. It's a stark reminder that in the world of LLMs, context isn't just about capacity—it's about attention and positioning.",
      "Meanwhile, on the RAG saturation front, I've been obsessing over query stability. I built a QueryPhrasingShiftGenerator to see how fragile our retrieval systems actually are. It turns out that small, semantic shifts in how we ask a question can lead to wildly different retrieval results. If our retrieval is unstable, our downstream generation is built on sand.",
      "What I'm learning is that these two problems—retrieval saturation and position sensitivity—are actually two sides of the same coin. As we scale up the number of retrieved passages, we're essentially forcing more and more critical evidence into that 'dead zone' in the middle of the prompt. We're not just fighting for better retrieval; we're fighting for model attention.",
    ],
  },
  {
    slug: "weekly-update-week-1",
    title: "Foundations & The RAG Baseline",
    date: "2026-03-22",
    description:
      "Kicking off two parallel research tracks: a RAG baseline and a position-controlled reproduction of long-context evaluations.",
    content: [
      "I've officially kicked off two parallel research tracks this week, and the initial scaffolding phase has already been so informative.",
      "The biggest thing I noticed while setting up the baseline for my independant research paper is how quickly evaluation metrics like Exact Match and token-level F1 become your best friends. Without a rigorous feedback loop, you're just guessing. I spent a lot of time this week making sure my sanity checks were actually sane before I start the massive scale-sweeps next week.",
      "On the reproduction side, I'm deep-diving into the mechanics of position-controlled experiments. By breaking down the context into 'buckets' (beginning, early-middle, etc.), I'm preparing to test exactly where models start to lose the plot. It's making me much more conscious of how I structure prompts in my other projects.",
      "It's a bit of a juggling act, but I'm already seeing where these paths might cross. Starting with clean, reproducible baselines is slower, but it's the only way to build something that actually stands up to scrutiny.",
    ],
  },
  {
    slug: "welcome",
    title: "Welcome to my Blog",
    date: "2026-02-08",
    description:
      "A quick note on why this blog exists and what I plan to write about.",
    content: [
      "Welcome to my personal blog. This is where I'll be sharing my thoughts, updates, and technical deep dives.",
      "I plan to update this space weekly with new content regarding software engineering, backend systems, and my ongoing projects.",
      "Stay tuned for more!",
    ],
  },
];
