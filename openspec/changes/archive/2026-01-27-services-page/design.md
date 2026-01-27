## Context

The US Sport Planes website needs a Services page to showcase business offerings. The site is built with Astro, Tailwind CSS, and follows established patterns seen in `about.astro`:
- Layout wrapper with Navigation and Footer
- Hero section with split layout (text + image)
- Content sections using the `Section` component
- Card-based layouts for grouped content

Current navigation includes: Home, Aircraft for Sale, Blog, About, Service Map.

## Goals / Non-Goals

**Goals:**
- Create a Services page that matches existing site design language
- Present 5 core services in a scannable, engaging format
- Drive visitor inquiries through clear CTAs
- Integrate seamlessly into site navigation

**Non-Goals:**
- Individual service detail pages (future enhancement)
- Service booking/scheduling functionality
- Pricing information display
- Dynamic content from CMS

## Decisions

### 1. Page Structure
**Decision:** Follow `about.astro` pattern with hero + multiple Section components

**Rationale:** Consistency with existing pages, reuses proven components, minimal new code

**Alternatives considered:**
- Single long-scroll page → Rejected: harder to navigate with 5+ services
- Tab-based interface → Rejected: adds JS complexity, less SEO-friendly

### 2. Service Card Layout
**Decision:** Use a grid of service cards (icon + title + description + optional CTA)

**Rationale:**
- Scannable at a glance
- Flexible for 5 services (can do 3+2 or 2+2+1 grid arrangements)
- Matches the card patterns used in about.astro values section

**Alternatives considered:**
- Alternating left/right sections → Could work but more vertical space needed
- Accordion → Hides content, worse for SEO

### 3. Service Data Structure
**Decision:** Define services as a TypeScript array in the page frontmatter

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path or component reference
  features?: string[]; // Optional bullet points
}
```

**Rationale:** Simple, no external data file needed for 5 static services. Can extract to `src/data/services.ts` later if needed.

### 4. Navigation Integration
**Decision:** Add "Services" link between "Aircraft for Sale" and "Blog"

**Rationale:** Logical grouping - products (Aircraft) → services → content (Blog)

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Services content may need frequent updates | Keep content in clearly labeled frontmatter section for easy editing |
| Icon selection could delay implementation | Use simple SVG icons from existing patterns; can enhance later |
| Page could feel text-heavy | Include hero image and consider service-specific imagery in future iteration |

## File Changes

| File | Change |
|------|--------|
| `src/pages/services.astro` | New file - main services page |
| `src/components/Navigation.astro` | Add "Services" link |
