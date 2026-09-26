# Emirates Front Contracting Company (شركة واجهة الامارات للمقاولات)

Production marketing website for **Emirates Front Contracting Company / شركة واجهة الامارات للمقاولات**, a general contracting firm based in Riyadh, Kingdom of Saudi Arabia.

Built with a high-credibility, mobile-first design system tailored for B2B/B2G procurement decision-makers, featuring a **WhatsApp-first zero-backend lead capture engine**, rich content-as-data architecture, and prominent focus on **Building Envelope & Façade Engineering**.

---

## 🏗️ Tech Stack

- **Core:** React 18+ with Vite, Plain JavaScript (JSX function components + hooks) — *no TypeScript*.
- **Routing:** React Router v6 (`react-router-dom`).
- **Styling:** Tailwind CSS with single source of truth design tokens (`src/config/theme.js`).
- **Typography:**
  - Display: `Saira` (Engineered, high-contrast grotesque)
  - Body: `Inter`
  - Utility/Spec: `IBM Plex Mono` (Numerals, spec sheets, eyebrows)
- **Motion & Micro-interactions:** `motion` (imported strictly from `motion/react` with `LazyMotion` + `domAnimation`/`m` for minimal bundle overhead and `prefers-reduced-motion` compliance).
- **Validation:** `zod` for lead capture and contact form integrity.
- **SEO & Meta:** `react-helmet-async`, dynamic JSON-LD Structured Data (`GeneralContractor`, `BreadcrumbList`, `Service`), `sitemap.xml`, `robots.txt`, and `llms.txt`.
- **Deployment:** Vercel (static SPA with `vercel.json` rewrites).

---

## 🎨 Locked Brand Palette

| Token | Hex | Role |
|---|---|---|
| `primary` (Prussian Blue) | `#14213d` | Dominant brand color — headers, hero overlays, dark sections, typography ink |
| `black` | `#000000` | Deepest contrast, overlay gradients, high-weight text |
| `cta` (Safety Orange) | `#fca311` | Primary CTA and accent color — buttons, links, mono numerals, underlines |
| `alabaster` | `#e5e5e5` | Light section backgrounds, card fills, dividers |
| `white` | `#ffffff` | Base background, reversed text on dark sections |

---

## 📁 Architecture & Folder Structure

All copy and taxonomy live in `/src/data` and `/src/config` — never hardcoded into UI components:

```
src/
  assets/              # Visual assets, SVG favicons, icons
  components/
    layout/            # Navbar, Footer, Layout, ScrollToTop
    ui/                # Button, Container, Section, SectionHeading, Eyebrow, Card, Badge, NumberedCard, Accordion, Sheet, Toast
    sections/          # HeroSection, ExpertiseList (01-06), WhyUsSection, TrustStrip, SectorsPreview, CTASection, ContactForm, MapEmbed, Breadcrumbs, WhatsAppButton
    seo/               # SEO.jsx (Helmet wrapper), StructuredData.jsx (JSON-LD schemas)
    motion/            # Reveal.jsx (LazyMotion wrapper with reduced motion support)
  config/
    siteConfig.js      # Company phone, WhatsApp, email, map pin embed, addresses
    theme.js           # Single source of truth design tokens
  data/
    services.js        # 21+ service scopes across 6 categorized disciplines
    sectors.js         # Commercial, Residential, Industrial, Government capabilities
    features.js        # 6 honest value propositions & verifiable non-numeric trust facts
    credentials.js     # Regulatory badges & compliance placeholders
  lib/
    leadCapture.js     # Zod schema, URL-encoded WhatsApp deep links, mailto fallback, relay helper
  pages/
    Home/              # Hero, 01-06 Expertise list, Why Us, Trust strip, Sectors, CTA band
    About/             # Company profile, objective, mission, vision, compliance badges
    Services/          # Filterable catalog of all scopes with category tabs
    ServiceDetail/     # Dynamic per-service page (/services/:slug) with specs, accordion, and WhatsApp trigger
    Sectors/           # In-depth breakdown across asset classes
    Contact/           # Zod validated form, exact Google Maps embed, phone/WhatsApp cards
    NotFound/          # Branded 404 page
  routes/
    AppRoutes.jsx      # Application route definitions
  styles/
    index.css          # Tailwind base, focus rings, custom industrial scrollbars
  App.jsx              # App root with HelmetProvider & BrowserRouter
  main.jsx             # DOM mounting
```

---

## ⚡ Lead Capture Architecture (Zero Backend)

Because this is a static front-end SPA with no database, leads route with zero friction:

1. **WhatsApp Click-to-Chat Deep Links (Primary):**
   - Number: `+966 59 014 6337` (`wa.me/966590146337`)
   - Pre-fills a URL-encoded message formatted with customer name, phone, selected service, sector, and project specifications.
   - Used by the sticky header button, floating action button, hero CTA, service inquiry buttons, and contact form submit.
2. **Mailto Fallback:**
   - Pre-populates formatted subject and body for desktop/email clients (`emiratesfront@gmail.com`).
3. **Optional Form Relay:**
   - Supported via `VITE_FORM_RELAY_URL` environment variable (e.g., Web3Forms or Formspree). If unconfigured, the app defaults gracefully to WhatsApp/email without throwing errors.

---

## 📋 Open Items Requiring Client Confirmation

Per the brief, no facts, years in business, project counts, certifications, or revenue figures were fabricated. All items below are marked with `// DRAFT — confirm with client` or `// PLACEHOLDER` in the codebase:

1. **Street Address for Riyadh Office:** Only the Google Maps pin was supplied. The site embeds the exact pin, but the street address text is a placeholder pending client input.
2. **Company Domain & Website URL:** Configured to `https://emiratesfront.site` across canonical links, robots.txt, sitemap.xml, Open Graph tags, and JSON-LD structured data.
3. **Email Address Domain:** `emiratesfront@gmail.com` is active; a custom domain email (e.g. `info@emiratesfront.site` or `procurement@emiratesfront.site`) can be added if desired.
4. **Tagline Sign-off:** *"Your Trusted Front in Construction"* is a deliberate draft play on واجهة (façade / front). Client should confirm or replace.
5. **Services Scope Confirmation:** Façade and building envelope work was given prominence reflecting the Arabic name (واجهة). Client should verify their exact operational split across civil, MEP, and envelope scopes.
6. **Verifiable Numbers:** Years in business, completed project totals, and workforce count are currently non-numeric to maintain honesty. Add real statistics once officially verified.
7. **Official Logo:** The official Emirates Front architectural emblem is integrated across the navbar, footer, mobile navigation sheet, 404 page, about page, favicons (SVG, ICO, PNG 16/32/180/192/512), and custom OpenGraph 1200x630 social share card.
8. **Social Media Links:** Footer and navigation social handles are currently empty/hidden pending active URLs.
9. **Arabic (RTL) Version:** The codebase is structured with bilingual metadata (`nameAr`, `titleAr`). An `i18next` or dual-route Arabic version can be enabled without rebuilding the architecture.
10. **Project Photography:** High-resolution copyright-free construction assets are slotted in. Replace with actual completed project photos as they become available.

---

## 🖼️ How to Swap Images with Real Project Photos

Images are mapped 1:1 in `src/data/services.js` and `src/data/sectors.js`. To replace stock images with real client project photography:

1. Place real images in `/public/images/services/` or `/public/images/sectors/`.
2. Keep the matching filenames (e.g. `curtain-wall.jpg`, `acp-cladding.jpg`, `civil-works.jpg`, `commercial.jpg`) or update the `image` path in `src/data/services.js`.
3. No component modifications are required.

---

## 🔍 SEO & CSR Rendering Tradeoff Note

- **Current Architecture:** Client-Side Rendered (CSR) SPA with `react-helmet-async`, full Open Graph / Twitter Cards, comprehensive JSON-LD schemas (`GeneralContractor`, `BreadcrumbList`, `Service`), `sitemap.xml`, `robots.txt`, and `llms.txt`.
- **Tradeoff:** Googlebot and modern search engines render JavaScript CSR pages effectively. However, if extreme crawler indexing speed is required for international search engines, a prerendering step (e.g. `vite-react-ssg`) can be added later. It was intentionally omitted in this build to maintain the leanest possible bundle per the brief.

---

## 🚀 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Preview production build
npm run preview
```

---

## 📦 Deployment to Vercel

The repository includes `vercel.json` configured with SPA routing rewrites and security headers.

1. Push code to GitHub / GitLab / Bitbucket.
2. Import project into Vercel.
3. Set Framework Preset to **Vite**.
4. Root Directory: `./`
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. (Optional) Set Environment Variables:
   - `VITE_FORM_RELAY_URL` (optional Web3Forms/Formspree endpoint)
