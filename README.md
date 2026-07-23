# TheFoxLabs — Premium Agency Website

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Three.js / React Three Fiber · GSAP

A dark, futuristic agency site built around a signature 3D "holographic fox"
hero piece, with glassmorphism panels, scroll-triggered reveals, a mouse-tilt
portfolio grid, and a premium loading screen.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

**Requires Node 18.18+ (Node 20 LTS recommended).**

> **Important — please read:** this project was hand-written in a sandboxed
> environment with no internet access, so `npm install` / `npm run build`
> could not be executed or verified here. Every file was checked with the
> TypeScript compiler for syntax correctness (zero parse errors across the
> codebase), and the architecture follows standard, well-documented APIs for
> each library — but you should run `npm run build` yourself before deploying,
> and treat this as a strong first draft rather than a pre-flown build.
> If anything doesn't compile, it's most likely a small version-mismatch in
> `package.json` — bump the flagged package and it should resolve.

## Folder structure

```
src/
  app/
    layout.tsx        Root layout — fonts, metadata, mounts Navbar/Loader/Cursor
    page.tsx           Assembles all sections in order
    globals.css         Tailwind layers, glass + facet utilities, custom cursor CSS
  components/
    hero/
      Hero.tsx           Hero copy + GSAP entrance timeline
      HeroScene.tsx       R3F <Canvas> wrapper (client-only, dynamically imported)
      HoloFox.tsx         The 3D holographic fox construct + particles + lights
    ui/
      SectionHeading.tsx  Reusable eyebrow + title + description block
      RevealOnScroll.tsx  Reusable scroll-reveal wrapper (Framer Motion)
      MagneticButton.tsx  Reusable cursor-attracted button
    Navbar.tsx, Footer.tsx
    Loader.tsx            Premium GSAP-driven loading screen
    CustomCursor.tsx       Desktop-only custom cursor (auto-disabled on touch)
    FloatingShapes.tsx     Ambient parallax geometry (GSAP ScrollTrigger)
    About.tsx, Services.tsx, ServiceCard.tsx
    Portfolio.tsx, ProjectCard.tsx (3D mouse-tilt)
    WhyChooseUs.tsx, Testimonials.tsx, TechStack.tsx
    Pricing.tsx, PricingCard.tsx
    Contact.tsx            Email / WhatsApp / Book-a-Call + working contact form
  lib/
    data.ts               ALL editable content lives here (services, projects,
                           testimonials, pricing, tech stack, contact info)
    gsap.ts               GSAP + ScrollTrigger registration helper
  hooks/
    useMousePosition.ts   Normalized mouse position, used for hero glow parallax
public/
  logo.jpg                Your real logo, used in the navbar and footer
```

## What to customize first

1. **`src/lib/data.ts`** — this is the single source of truth for copy.
   Update `PROJECTS`, `TESTIMONIALS`, and `PRICING` with real details as you
   have them.
2. **Colors** — `tailwind.config.ts` under `theme.extend.colors` (`crimson`,
   `gold`, `void`, `obsidian`).
3. **Fonts** — `src/app/layout.tsx` (currently Space Grotesk / Inter /
   JetBrains Mono via `next/font/google`).

## Honest notes on a few implementation choices

- **Portfolio & testimonials are placeholder content**, clearly written as
  generic examples rather than invented specific client names or fabricated
  results. Swap them for real case studies as you complete projects — that's
  a bigger trust upgrade for visitors than any visual polish.
- **The 3D hero is an abstract, faceted construct** (icosahedron core +
  angular fins + a HUD ring), not a literal fox illustration — this keeps it
  original rather than copying any existing brand's mascot art, and reads as
  "holographic schematic," which was part of the brief.
- **GSAP ScrollSmoother was intentionally not used.** It's part of the paid
  Club GreenSock bundle. "Smooth scrolling" here is native CSS smooth
  scrolling plus GSAP's free ScrollTrigger for scroll-linked parallax —
  covers the brief without requiring a paid license.
- **The contact form has no backend.** Submitting it opens a pre-filled
  email via `mailto:`. That's fully functional with zero setup, but if you
  want submissions to land in a database or CRM instead, swap the
  `handleSubmit` in `Contact.tsx` for a real API route or a form service
  (Formspree, Resend, etc.).
- **The custom cursor disables itself automatically** on touch devices
  (via `(pointer: fine)` detection), so mobile is unaffected.
- Reduced-motion preference (`prefers-reduced-motion`) is respected globally
  in `globals.css`.

## Deploying

This is a stock Next.js 15 App Router project — it deploys as-is to Vercel
(`vercel deploy`), or any host that supports Next.js SSR/edge output.
