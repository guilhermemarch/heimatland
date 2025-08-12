# Copilot Instructions for Heimatland Project

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a Next.js 14+ institutional website for the **Grupo Folclórico Alemão Heimatland** (founded in 1987 in Cerro Largo, RS).  
The goal is to create a **traditional, responsive, and culturally authentic** website, highlighting the group’s history, events, and cultural heritage.  

The project uses:
- Next.js 14+ with App Router and Server Components
- TypeScript
- Tailwind CSS with a custom theme based on the German flag
- shadcn/ui components for accessible and responsive design
- MDX with Contentlayer for blog/news content
- Optimized for SEO and accessibility
- Deployment on Vercel

---

## Visual Identity
**Colors** (German flag inspired):
- **Black**: `#000000`
- **Red**: `#D41B1B`
- **Gold Yellow**: `#FFD500`
- **White** for spacing and text clarity

**Typography**:
- Gothic/blackletter for titles and highlights (e.g., “UnifrakturCook”, “Cloister Black” or similar with serif fallback)
- Serif for long-form and readable content

**Visual Elements**:
- Light textures resembling aged paper and wood
- Gradient borders inspired by the German flag
- Icons/silhouettes of folk dancers and German cultural symbols

**Layout**:
- Clean and balanced, avoiding visual clutter
- Mobile-first responsive approach

---

## Site Structure & Content

### 1. Home
- Banner with group presentation image and fade-in logo
- Welcome message in gothic font
- Highlights: Our History, Upcoming Events, Latest News
- Footer with gradient border, contacts, and social media

### 2. About
- Detailed history since 1987
- Timeline of key milestones
- Mission, vision, and values in gothic font

### 3. Costumes
- Cultural meaning and evolution of folk costumes
- Photo gallery (men’s, women’s, children’s costumes)

### 4. Photos & Videos
- Interactive galleries with filters by event/year
- Embedded videos from YouTube/Vimeo or local hosting

### 5. Blog / News
- Posts list with gothic titles and serif summaries
- Single post pages with full content, related images, and optional videos

### 6. Contact
- Form (Name, Email, Phone, Message) with spam protection
- Integrated map of Cerro Largo location
- Direct links to social networks and WhatsApp

---

## Technical Requirements
- Next.js 14+ with TypeScript, App Router, and Server Components
- Tailwind CSS custom theme for German flag palette
- shadcn/ui components for accessibility and responsiveness
- Fonts imported via Google Fonts or self-hosted
- Images optimized with `next/image` in WebP/AVIF
- MDX with Contentlayer for blog content
- SEO best practices and full accessibility support
- API route for contact form with anti-spam measures
- Structure prepared for future multilingual support (Portuguese and German)

---

## Design Guidelines
- Maintain cultural authenticity and respect for tradition
- Subtle animations (e.g., banner fade-in)
- Light background textures in main sections
- Hover/focus effects using lighter/darker shades of red and yellow
- Consistent spacing, padding, and visual hierarchy

---

## Code Conventions
- Use TypeScript for all components and logic
- Follow Next.js App Router patterns
- Style exclusively with Tailwind CSS and custom theme
- Reusable UI components in `/components` folder
- Use semantic HTML and ARIA attributes
- Optimize for performance, SEO, and accessibility