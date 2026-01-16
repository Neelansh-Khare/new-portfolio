# Neelansh Khare - Portfolio Website

A modern, interactive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features immersive 3D animations, shader effects, and a clean, responsive design.

![Portfolio](public/images/og/home.jpg)

## Features

### Interactive 3D Elements
- **Spline 3D Hero Card**: Lazy-loaded 3D scene with spotlight effect showcasing profile information
- **Three.js Shader Animation**: Full-bleed animated shader background with overlay text

### Portfolio Sections
- **About**: Personal introduction and background
- **Experience**: Professional work history with detailed descriptions
- **Projects**: Showcase of technical projects with technologies used
- **Skills**: Organized skill categories (Languages, Frameworks, Tools, Expertise)
- **Contact**: Contact information and social links

### Technical Features
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Accessibility**: Semantic HTML, proper heading hierarchy, keyboard navigation, ARIA labels
- **Performance**: Lazy loading, optimized animations, proper resource cleanup
- **Reduced Motion Support**: Respects user preferences for reduced motion
- **Type Safety**: Full TypeScript implementation with typed data structures
- **Modern Stack**: Next.js 15, React 19, Tailwind CSS, shadcn/ui components

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **3D Graphics**: Spline (@splinetool/react-spline), Three.js
- **Icons**: Lucide React
- **Design System**: Once UI Core (for base styling)

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd new-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run biome-write` - Format code with Biome

## Project Structure

```
src/
├── app/
│   └── (main)/
│       ├── layout.tsx      # Root layout with providers
│       └── page.tsx        # Main portfolio page
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── card.tsx
│   │   ├── spotlight.tsx
│   │   ├── splite.tsx      # Spline 3D wrapper
│   │   └── shader-animation.tsx
│   ├── sections/           # Portfolio sections
│   │   ├── SplineHero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ShaderSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   └── Navigation.tsx
├── data/
│   └── portfolio.ts        # Typed portfolio data
└── lib/
    └── utils.ts            # Utility functions
```

## Customization

### Update Portfolio Content

Edit `src/data/portfolio.ts` to update:
- Profile information
- Experience entries
- Projects
- Skills
- Contact information

### Replace Spline Scene

Update the Spline scene URL in `src/components/sections/SplineHero.tsx`:
```tsx
<SplineScene 
  scene="YOUR_SPLINE_SCENE_URL"
  className="w-full h-full"
/>
```

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind classes directly in components

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fnextjs-starter&project-name=nextjs-starter&repository-name=nextjs-starter&redirect-url=https%3A%2F%2Fgithub.com%2Fonce-ui-system%2Fnextjs-starter&demo-title=Next.js%20Starter&demo-description=Showcase%20your%20designers%20or%20developer%20portfolio&demo-url=https%3A%2F%2Fdemo.nextjs-starter.com&demo-image=%2F%2Fraw.githubusercontent.com%2Fonce-ui-system%2Fnextjs-starter%2Fmain%2Fpublic%2Fimages%2Fog%2Fhome.jpg)

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your portfolio will be live!

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
