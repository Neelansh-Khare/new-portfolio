# How to Update Your Blog

This document explains how to add or edit blog entries for your personal blog.

## 1. Locate the Data File
All blog content is stored in a single file:
`src/data/blog.ts`

## 2. Adding a New Entry
Open `src/data/blog.ts` and add a new object to the `blogData` array. 

**Structure:**
```typescript
{
  slug: "your-post-title",      // Unique identifier for the post
  title: "Your Post Title",     // The heading shown on the page
  date: "February 15, 2026",    // The date you want displayed
  content: [                    // An array of strings (each string is a paragraph)
    "First paragraph text here.",
    "Second paragraph text here."
  ],
},
```

### Example
To add a new post, insert it at the **top** of the array so it appears first:

```typescript
export const blogData: BlogPost[] = [
  {
    slug: "my-second-post",
    title: "Learning Next.js",
    date: "February 15, 2026",
    content: [
      "I've been working with Next.js for a while now...",
      "It makes building static sites for GitHub Pages very easy."
    ],
  },
  {
    slug: "welcome",
    title: "Welcome to my Blog",
    // ... rest of the existing post
  }
];
```

## 3. Previewing Locally
To see your changes before deploying:
1. Run `npm run dev` in your terminal.
2. Navigate to `http://localhost:3000/blog`.

## 4. Deploying to GitHub Pages
Since the project is configured for static export (`output: 'export'` in `next.config.mjs`), simply commit and push your changes to your GitHub repository:

```bash
git add src/data/blog.ts
git commit -m "Add new blog post"
git push
```

The GitHub Action (`.github/workflows/deploy.yml`) will automatically build and deploy the updated site.
