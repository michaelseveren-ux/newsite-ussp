## Why

US Sport Planes holds formal certifications (ROTAX Independent Repair Centre, ICON Authorized Service Provider) and maintains brand relationships with manufacturers they represent (Jabiru, Aerotrek, Tecnam). These credentials are not currently visible on the site, leaving a significant trust signal and credibility opportunity unused. Prospective buyers and aircraft owners care deeply about whether their service center is factory-authorized.

## What Changes

- Add a "Certifications & Brand Partners" section that displays official certifications with a card treatment (logo, credential title, description) and represented brands as a logo strip
- Section appears on the homepage (after Services, before Featured Aircraft) and on the Services page (after What We Offer, before Why Choose Us)
- Jabiru links internally to `/jabiru-aircraft`; external brands link to their websites
- Brand logos render grayscale by default and pop to full color on hover
- Component is designed to gracefully fall back to text if logo images are not yet placed

## Capabilities

### New Capabilities
- `brand-partners-section`: Displays certifications and represented brand relationships across homepage and services page

### Modified Capabilities
- `homepage`: Brand partners section added after services
- `services-page`: Brand partners section added after service list

## Impact

- **Code**: `src/data/partners.ts` (new), `src/components/BrandPartners.astro` (new), `src/pages/index.astro` (updated), `src/pages/services.astro` (updated)
- **Visual**: Adds a credibility-building section visible on two key pages
- **No breaking changes**: Purely additive
