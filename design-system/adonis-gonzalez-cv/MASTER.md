# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Adonis Gonzalez CV
**Generated:** 2026-08-19
**Category:** Indie developer resume (web + print)
**Design Dials:** Variance 2/10 (Centered / Minimal) | Motion 2/10 (Subtle) | Density 3/10 (Spacious)

UIPRO recommended Inter + navy/`#2563EB`. Those tokens are **forbidden** for this project (previous studio CV). Overrides below are the source of truth.

---

## Global Rules

### Color Palette

Dark by default. Surfaces are zinc, never pure studio black `#0A0A0A`. One accent only: teal.

| Role | Dark | Light | CSS Variable |
|------|------|-------|----------------|
| Background | `#18181B` zinc-900 | `#FAFAF9` stone-50 | `--color-background` |
| Foreground | `#FAFAF9` | `#18181B` | `--color-foreground` |
| Muted foreground | `#A1A1AA` zinc-400 | `#52525B` zinc-600 | `--color-muted-foreground` |
| Border | `#3F3F46` zinc-700 | `#D4D4D8` zinc-300 | `--color-border` |
| Accent | `#0D9488` teal-600 | `#0D9488` | `--color-accent` |
| On accent | `#FFFFFF` | `#FFFFFF` | `--color-on-accent` |
| Ring | `#0D9488` | `#0D9488` | `--color-ring` |
| Print ink | `#18181B` | — | `--color-print-ink` |

**Contrast:** body text ≥ 4.5:1 in both themes. Accent used sparingly (name, H2 in print, focus ring, link hover).

### Typography

- **Heading / body:** IBM Plex Sans
- **Meta, stack, dates, links:** IBM Plex Mono
- **Never:** Tektur, Inter as brand, uppercase labels with wide tracking

### Spacing Variables

*Density: 3/10 — Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight gaps |
| `--space-sm` | `8px` | Icon gaps |
| `--space-md` | `24px` | Standard padding |
| `--space-lg` | `32px` | Section padding |
| `--space-xl` | `48px` | Large gaps |
| `--space-2xl` | `64px` | Section margins |
| `--space-3xl` | `96px` | Header padding |

### Layout

- Single column, `max-width: 48rem` (max-w-3xl)
- No sidebar, no two-column Canva template, no photo
- No skill bars, no emoji icons, no purple gradients

### Motion

Fade only, 200–300ms. Honor `prefers-reduced-motion: reduce` (no animation, final state immediately). No GSAP, no scroll-jacking.

### Icons

Lucide (outline), 16–20px, `aria-hidden` when next to visible text. `cursor-pointer` on every clickable.

### Print / ATS

- Hide theme/lang chrome
- A4, single column
- Headings: Summary, Experience, Projects, Technical Skills
- Accent only on name and H2
- Visible URLs in text
