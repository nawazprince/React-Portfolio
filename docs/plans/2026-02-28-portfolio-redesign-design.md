# Portfolio Redesign — Design Document
**Date:** 2026-02-28
**Goal:** Modern, production-grade personal brand portfolio for Syed Nawaz Prince (.NET Developer)
**Style:** Refined & minimal, editorial column layout, subtle animations

---

## Design Intent

Distinctive from typical dev portfolios (which use card grids) by adopting a typographic, editorial layout. Feels high-end and senior. Communicates personal brand through restraint and craft rather than visual noise.

---

## Design System

### Color Palette
```css
--color-bg:          #0d1f18   /* deeper, richer background */
--color-bg-variant:  #152a20   /* slightly lighter surface */
--color-surface:     rgba(255,255,255,0.04)  /* subtle glass for cards */
--color-primary:     #52b788   /* kept from original */
--color-primary-dim: rgba(82,183,136,0.12)   /* tag backgrounds */
--color-border:      rgba(82,183,136,0.18)   /* borders and rules */
--color-white:       #f0f4f2   /* warm white, not harsh */
--color-light:       rgba(240,244,242,0.5)   /* muted text */
```

### Typography
- **Poppins** (existing) — headings and body
- **JetBrains Mono** (add via Google Fonts) — small labels, role descriptor, code-like accents

### Layout
- Container max-width: `720px` centered (editorial column)
- Section padding: `8rem 0` (generous vertical rhythm)
- Remove `height: 100vh` per section — content flows naturally
- Left-aligned text throughout (not centered)

### Animations (CSS + Intersection Observer)
- Fade-up on scroll entry: `opacity 0→1`, `translateY 20px→0`, `duration 600ms ease`
- Nav link hover: underline slides in from left
- Skill tag hover: border brightens with subtle green glow
- Button hover: smooth background fill transition

---

## Components

### Navigation (replaces floating bottom pill)
- **Layout:** Fixed top bar, full width
- **Left:** Site name `Syed Nawaz` in `JetBrains Mono`, 0.85rem, green — acts as logo/home link
- **Right:** Anchor links — About, Skills, Services, Contact — Poppins, small caps, letter-spaced, muted
- **On scroll:** 1px green bottom border fades in + `backdrop-filter: blur(12px)` activates
- **Active state:** Green color only, no background bubble

### Header / Hero
- Full viewport height, content vertically centered
- Left-aligned, single column, purely typographic (no photo)
- Structure:
  1. `hello, I'm` — JetBrains Mono, small, muted
  2. `Syed Nawaz Prince` — Poppins 700, ~5rem
  3. 60px wide green horizontal rule
  4. `.NET Developer` — Poppins 300, 1.1rem, letter-spaced, muted
  5. `[ Download CV ]  [ Let's Talk ]` — two buttons side by side
  6. Animated scroll chevron at bottom center
- Social icons moved to footer

### About
- Two-column layout (photo left, content right)
- **Photo:** Image with asymmetric green border frame (border-right + border-bottom, offset 8px)
- **Content:**
  - Two stat items: large green number + muted label (Experience since 2020, 30+ Projects)
  - Bio paragraph
  - `Let's Talk` CTA button
- Stat items: thin `color-border` left-border accent only — no heavy card styling

### Skills (was Experience)
- Section label: `SKILLS`
- Inline tag cloud grouped by category:
  - **BACKEND:** ASP.NET Core, ASP.NET MVC, Web API, ASP.NET Web Form
  - **DATABASE:** MS SQL, ADO.NET, Entity Framework, Dapper ORM
  - **FRONTEND:** JavaScript, Angular JS
- Tag style: rounded pill, `color-primary-dim` background, `color-primary` text, `color-border` border
- Group labels: JetBrains Mono, small caps, muted, letter-spaced

### Services
- Section heading + thin full-width rule below
- Single service: **Web Application Development**
- Each item as a row: green `→` arrow prefix + text — no boxes or cards
- Hover: slight left indent + green color transition

### Contact
- Two-column split layout
- **Left:** Headline text (`Let's work together.`) + email + WhatsApp
- **Right:** Contact form
  - Underline-only inputs (no border box) with floating labels
  - Name, Email, Message (textarea)
  - Submit: text + `→` arrow, minimal styling
- No heavy contact option cards

### Footer
- Single row: `© 2025 Syed Nawaz Prince` left + LinkedIn/GitHub icons right
- Thin green top border as separator
- No repeated navigation links

---

## File Changes Required

| File | Change |
|------|--------|
| `src/index.css` | New design tokens, typography imports, global styles |
| `src/App.css` | Minimal or remove |
| `src/components/nav/Nav.jsx` | Rewrite to top fixed bar |
| `src/components/nav/nav.css` | Full rewrite |
| `src/components/header/Header.jsx` | Remove photo, restructure |
| `src/components/header/header.css` | Full rewrite |
| `src/components/header/CTA.jsx` | Minor updates |
| `src/components/header/HeaderSocial.jsx` | Move to footer |
| `src/components/about/About.jsx` | Add asymmetric photo frame, new stat layout |
| `src/components/about/about.css` | Full rewrite |
| `src/components/experience/Experience.jsx` | Rewrite as tag cloud with groups |
| `src/components/experience/experience.css` | Full rewrite |
| `src/components/services/Services.jsx` | Rewrite as row list layout |
| `src/components/services/services.css` | Full rewrite |
| `src/components/contact/Contact.jsx` | Split layout, floating label inputs |
| `src/components/contact/contact.css` | Full rewrite |
| `src/components/footer/Footer.jsx` | Minimal single-row with socials |
| `src/components/footer/footer.css` | Full rewrite |

---

## Out of Scope
- No new Projects/Portfolio section
- No routing library
- No state management library
- No animation library (CSS + Intersection Observer only)
- No backend/email wiring for contact form
