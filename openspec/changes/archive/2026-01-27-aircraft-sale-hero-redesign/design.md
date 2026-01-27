## Context

The Aircraft For Sale page (`src/pages/aircraft-for-sale/index.astro`) has a minimal hero section (lines 18-28) consisting of a simple headline and description. The About Us page (`src/pages/about.astro`) has a more visually appealing split-layout hero (lines 81-118) with:
- 2-column responsive grid (text left, image right)
- Subtitle tag with accent color
- Headline with line break for emphasis
- Description paragraph
- Primary and secondary CTA buttons
- Image with rounded corners
- Decorative accent elements (colored squares)

Both pages use inline hero markup rather than the shared `Hero.astro` component (which is a full-screen centered hero used on the homepage).

## Goals / Non-Goals

**Goals:**
- Update Aircraft For Sale hero to match About Us visual pattern
- Maintain responsive behavior (stack on mobile, side-by-side on desktop)
- Keep page-specific content (headline, description, CTAs relevant to aircraft browsing)

**Non-Goals:**
- Creating a shared component for this hero pattern (inline is fine for 2 pages)
- Changing the Hero.astro component
- Updating any other pages
- Adding new images (will reuse existing hero image)

## Decisions

### 1. Inline markup vs. new component
**Decision:** Keep as inline markup in the page file
**Rationale:** Only 2 pages use this pattern. Extracting to a component adds indirection without significant reuse benefit. If a third page needs this pattern, reconsider.

### 2. Image source
**Decision:** Use `/images/hero-aircraft.jpg` (same as About Us)
**Rationale:** Provides immediate consistency. Can be changed later to a unique aircraft-focused image if desired.

### 3. CTA buttons
**Decision:** Primary: "Browse Inventory" (anchor to grid below), Secondary: "Contact Us" (link to contact)
**Rationale:** Matches the page purpose - users are here to browse aircraft, so primary action scrolls to listings.

### 4. Subtitle tag text
**Decision:** Use "Our Inventory" as the subtitle tag
**Rationale:** Mirrors the "About Us" tag pattern while being contextually appropriate.

## Risks / Trade-offs

- **[Visual repetition]** → Using same hero image as About Us may feel repetitive. Mitigation: Can swap image later without code changes.
- **[Increased page height]** → New hero is taller than current minimal version. Mitigation: This is intentional for visual impact; content grid is still above the fold on most screens.
