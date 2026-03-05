## Design

### Two-Tier Visual Structure

The section uses two distinct tiers to reflect the two types of relationships:

**Tier 1 — Official Certifications**
- Card treatment: logo container + credential title + short description
- Displayed side-by-side (stacked on mobile)
- Background: `bg-gray-50` with border, lending a document/badge feel
- Logo falls back to brand name text if image is missing (`onerror` handler)

**Tier 2 — Brands We Represent**
- Logo strip below a horizontal divider rule
- Logos render at `grayscale opacity-60` by default, `grayscale-0 opacity-100` on hover
- Jabiru links to `/jabiru-aircraft` (internal); Aerotrek and Tecnam link externally (`target="_blank"`)
- Falls back to brand name text if logo is missing

### Component Architecture

- `BrandPartners.astro` — self-contained, pulls from data file, no props required
- `src/data/partners.ts` — two typed arrays: `certifications` and `brands`
  - `Certification`: `{ name, credential, description, logo }`
  - `Brand`: `{ name, logo, href, external }`

### Placement

| Page | Position |
|------|----------|
| `index.astro` | After Services section, before Featured Aircraft |
| `services.astro` | After What We Offer, before Why Choose Us |

### Logo File Conventions

Logos are served from `/public/images/logos/`:

| Brand | Expected path |
|-------|--------------|
| ROTAX | `/images/logos/rotax.png` |
| ICON Aircraft | `/images/logos/icon-aircraft.png` |
| Jabiru | `/images/logos/jabiru.png` |
| Aerotrek | `/images/logos/aerotrek.png` |
| Tecnam | `/images/logos/tecnam.png` |
