# How to Update the Blog

Blog content lives in `src/data/blog.ts`. This document is the source of truth for how to add or edit entries.

## 1. Data model

Every post is an object in the `blogData` array in `src/data/blog.ts`:

```typescript
{
  slug: "weekly-update-week-2",           // URL segment: lowercase, hyphenated, MUST be unique
  title: "The 'U-Shape' Reality & Query Stability",
  date: "2026-03-29",                     // ISO 8601 date (YYYY-MM-DD) — used for sorting & <time dateTime>
  description: "This week...",            // Optional. One-line summary used in metadata and the /blog index.
  content: [                              // Array of paragraphs (plain strings)
    "First paragraph.",
    "Second paragraph.",
  ],
}
```

Rules:

- **`slug` must be unique** across all posts and must match `[a-z0-9-]+`. Bad: `"Weekly_Update"`. Good: `"weekly-update-week-3"`.
- **`date` must be an ISO 8601 date**, i.e. `"YYYY-MM-DD"`. Do **not** use free-form strings like `"March 29, 2026"` — those cannot be sorted correctly and will not render into a valid `<time dateTime>`.
- **Order in the array does not matter.** Posts are sorted by `date` descending at render time by `src/lib/blog.ts`.
- **`description`** is optional but strongly recommended: it becomes the post's `<meta name="description">`, its Open Graph description, and its `/blog` index summary. If omitted, the first paragraph is used as a fallback.

## 2. Adding a new post

Edit `src/data/blog.ts` and append (order in the file doesn't matter — sorting is automatic):

```typescript
{
  slug: "hello-world",
  title: "Hello, World",
  date: "2026-04-05",
  description: "A short summary that shows up on /blog and in metadata.",
  content: [
    "First paragraph of the post goes here.",
    "Another paragraph.",
  ],
},
```

## 3. Editing an existing post

Change the fields you need to change. If you change the `slug`, remember that the old URL will 404 and any external links to it will break. Prefer keeping the original `slug`.

## 4. Previewing locally

```bash
npm run dev
```

The dev server serves the app under the configured `basePath`:

- Portfolio: <http://localhost:3000/new-portfolio>
- Blog index: <http://localhost:3000/new-portfolio/blog>
- A specific post: <http://localhost:3000/new-portfolio/blog/<your-slug>>

## 5. Preview checklist before pushing

- [ ] `slug` is unique and lowercase-hyphenated
- [ ] `date` is ISO 8601 (`YYYY-MM-DD`)
- [ ] Optional `description` reads well as a preview snippet
- [ ] Post renders on `/blog` with correct summary
- [ ] Post detail page (`/blog/<slug>`) loads without console errors
- [ ] Any images have `alt` text
- [ ] `npm run lint` and `npm run typecheck` pass

## 6. Deploying

The GitHub Actions workflow at `.github/workflows/deploy.yml` triggers on every push to `main`. It installs dependencies, runs lint and typecheck, builds the static site (`next build` with `output: 'export'`), and deploys the resulting `out/` directory to GitHub Pages.

```bash
git add src/data/blog.ts
git commit -m "blog: add <post title>"
git push
```

## 7. RSS and sitemap

You do **not** need to update `src/app/rss.xml/route.ts` or `src/app/sitemap.ts` when adding a post. Both read from `blogData` at build time and will pick up new entries automatically.
