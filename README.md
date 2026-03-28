# Jupiter BPO Services — Website

Premium Next.js 14 SaaS-style website for Jupiter BPO Services.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, services, why us, industries, testimonials, CTA |
| `/about` | Company story, mission, vision, values, milestones |
| `/services` | Detailed service pages with benefits & use cases |
| `/industries` | 15+ industry verticals with descriptions |
| `/technology` | Cloud CRM, security, AI tools, infrastructure |
| `/contact` | Contact form, phone, email, map |

## Tech Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icons
- **TypeScript** — type safety
- **Next/Image** — optimised images from Unsplash

## Project Structure

```
jupiter-bpo/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── globals.css         # Global styles + design tokens
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── industries/page.tsx
│   ├── technology/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx          # Sticky responsive navbar
│   ├── Footer.tsx          # Full footer
│   ├── ServiceCard.tsx     # Reusable service card
│   └── SectionWrapper.tsx  # Section layout wrapper
├── lib/
│   └── utils.ts            # cn() utility
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Contact Details (pre-filled)

- **Phone:** +91 9972135467
- **Email:** jupiter.ppms@gmail.com
- **Locations:** Bangalore | Gulbarga, Karnataka
