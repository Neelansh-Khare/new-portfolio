export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string[]; // Array of paragraphs
}

export const blogData: BlogPost[] = [
  {
    slug: "welcome",
    title: "Welcome to my Blog",
    date: "February 8, 2026",
    content: [
      "Welcome to my personal blog. This is where I'll be sharing my thoughts, updates, and technical deep dives.",
      "I plan to update this space weekly with new content regarding software engineering, backend systems, and my ongoing projects.",
      "Stay tuned for more!",
    ],
  },
];
