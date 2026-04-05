# rayso.studio — Next.js + Tailwind CSS Website

A full-stack website for **rayso.studio**, a premium web design & development agency specializing in local service businesses (real estate, mortgage, plumbing, cleaning, landscaping, etc.).

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Fonts**: Syne (display), DM Mono (body), Instrument Serif (accent)
- **Color**: Acid green `#7BFF00` on dark `#080808`

---

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/app/page.tsx` | Homepage with hero, services, niches, process, templates preview, components teaser, CTA |
| `/templates` | `src/app/templates/page.tsx` | Filterable template library listing |
| `/templates/[id]` | `src/app/templates/[id]/page.tsx` | Single template detail with features, setup guide |
| `/components-page` | `src/app/components-page/page.tsx` | Full component library with sidebar, search, code modal |
| `/work` | `src/app/work/page.tsx` | Portfolio / case studies |
| `/about` | `src/app/about/page.tsx` | About, values, team, timeline |
| `/contact` | `src/app/contact/page.tsx` | Contact form + strategy call booking |

## Shared Components

| File | Description |
|------|-------------|
| `src/components/Navbar.tsx` | Fixed nav with active link highlighting |
| `src/components/Footer.tsx` | Full footer with columns and links |
| `src/components/Ticker.tsx` | Animated services ticker strip |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Customization

### Colors
Edit `tailwind.config.ts` to update the brand palette:
```ts
colors: {
  acid: "#7BFF00",       // Primary accent — change this to your brand color
  bg: "#080808",         // Main background
  "bg-2": "#0f0f0f",     // Section backgrounds
  ...
}
```

### Fonts
Edit `src/app/layout.tsx` to swap fonts from Google Fonts:
```tsx
const syne = Syne({ ... })         // Display / headings font
const dmMono = DM_Mono({ ... })    // Body / mono font
const instrumentSerif = Instrument_Serif({ ... })  // Italic serif accent
```

### Content
All content is inline in each page file — search for the data arrays (e.g. `const services`, `const niches`, `const caseStudies`) at the top of each page and edit directly.

### Adding Real Templates
Edit the `templates` object in `src/app/templates/[id]/page.tsx` and the `templates` array in `src/app/templates/page.tsx` to add or update template entries.

### Contact Form
The contact form in `src/app/contact/page.tsx` currently logs to the console. To wire it up:
- **Resend**: `npm install resend` and call their API in a Next.js Route Handler
- **Formspree**: Replace the `handleSubmit` function with a `fetch` to your Formspree endpoint
- **Custom API**: Create `src/app/api/contact/route.ts` and POST to it

---

## Project Structure

```
rayso-studio-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata, noise overlay)
│   │   ├── globals.css         # Tailwind directives + global styles
│   │   ├── page.tsx            # Homepage
│   │   ├── templates/
│   │   │   ├── page.tsx        # Templates listing
│   │   │   └── [id]/
│   │   │       └── page.tsx    # Template detail
│   │   ├── components-page/
│   │   │   └── page.tsx        # Component library
│   │   ├── work/
│   │   │   └── page.tsx        # Portfolio
│   │   ├── about/
│   │   │   └── page.tsx        # About
│   │   └── contact/
│   │       └── page.tsx        # Contact
│   └── components/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── Ticker.tsx
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Deploy — zero config needed for Next.js

### Other Platforms
Works on any platform that supports Node.js 18+:
- Netlify (use `@netlify/plugin-nextjs`)
- Railway
- Render
- Fly.io

---

Built by [rayso.studio](https://rayso.studio)
