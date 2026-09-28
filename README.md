# ByteSpace — Landing Page

Frontend assessment build for **Doin Tech Limited** (Jr. Software Engineer, Frontend).
Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Project structure

```
app/                     layout, globals (design tokens), page
components/
  layout/                Header, Footer
  sections/              Hero, LogoStrip, CourseDiscovery, LearningPaths,
                         GrowthSection, CreatorCTA, Testimonials
  ui/                    CourseCard, FloatingCards, AvatarStack, Ornament,
                         Logo, SectionHeading, ScaledStage
lib/data.ts              all copy and content in one place
public/images/           artwork (see below)
```

## Design tokens (from Figma)

Blue `#003BE2` · Lime `#D4FB20` · Ink `#242528` · Muted `#82868E` · Surface `#F5F5F6`.
Fonts: Poppins (headings), Satoshi (body), Clash Display (logo/stats) — loaded from Google Fonts and Fontshare.

## Notes for the reviewer

- Artwork-heavy areas (hero, growth section, creator CTA) use a small `ScaledStage` helper that positions
  elements in exact Figma pixel coordinates and scales them to the container, so the design stays faithful
  from mobile to 1440px+. Text-heavy sections use normal responsive Tailwind layouts.
- The Figma has desktop frames only; tablet and mobile layouts are my own responsive interpretation.
- Small copy fixes versus the design: "the Power of Big Data" → "The Power of Big Data", the newsletter button
  reads "Subscribe" (the design says "Search"), and the footer uses © with the current year.
- Semantic landmarks, labelled form fields, visible focus states and reduced-motion support are included.

## Images

Photos and 3D shapes are Figma image fills. Replace the files in `public/images/` (same filenames):

- `shapes/` — lime-spring, lime-cylinder, lime-ring, lime-cone, white-spring, white-cylinder, white-cone, white-ring (PNG, transparent, ~400px+)
- `people/` — learner-man.png (578×541 cutout), creator-woman.png (435×596 cutout), avatar-1…5.jpg, sarah.jpg, james.jpg, alex.jpg
- `courses/` — figma-basics, digital-asset, big-data, productivity, money-management, startup (JPG, ~682×390)
