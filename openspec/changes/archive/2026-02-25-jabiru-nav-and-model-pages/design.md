## Context

US Sport Planes is the official Jabiru importer for the Americas. The site's current navigation groups Jabiru under a generic "Aircraft Sales" dropdown alongside used inventory. Individual Jabiru models (J170-M, J430-M, J432-M) have no dedicated pages — all model detail lives on the hub page at `/jabiru-aircraft/`. This limits the sales team's ability to share a clean, focused link for a specific model, and reduces organic discoverability for model-specific searches.

The existing `src/data/jabiru.ts` file already defines each model with a `slug` field and rich specs, providing a ready data source for individual pages.

## Goals / Non-Goals

**Goals:**
- Elevate Jabiru to a top-level nav item with direct dropdown access to each M-Series model
- Create shareable, brochure-quality pages for each current model
- Create an engine trust page and a legacy models page under the Jabiru URL namespace
- Make Aircraft Inventory a simple direct nav link (no dropdown needed)
- Update the Jabiru hub page to route visitors into the expanded section

**Non-Goals:**
- Changing any existing URL (all current routes preserved)
- Redesigning the hub page layout — only adding CTAs and internal links
- Building a full CMS-driven system for model pages — static Astro pages from existing data are sufficient for now
- Adding legacy model pages individually — one consolidated legacy page is sufficient

## Decisions

### 1. Model pages at `/jabiru-aircraft/[slug].astro` using existing data
**Decision**: Implement model pages as a dynamic Astro route using the slug-based data already in `jabiru.ts`. No new data layer or Sanity schema needed.
**Rationale**: `jabiruModels` already has `slug`, full specs, highlights, and images per model. A single `[slug].astro` page handles all three models from one file. Avoids data duplication.
**Alternative considered**: Static individual page files per model (`j170-m.astro`, etc.) — rejected as harder to maintain when content changes.

### 2. Engine and legacy pages as static Astro pages
**Decision**: `/jabiru-aircraft/engine.astro` and `/jabiru-aircraft/legacy.astro` as standalone static pages, not driven by data.
**Rationale**: Engine content is editorial/trust-building copy, not structured data. Legacy model content is relatively stable. Static pages are simpler and appropriate for this content type.

### 3. Jabiru as top-level nav dropdown; Aircraft Inventory as direct link
**Decision**: Replace the "Aircraft Sales" dropdown with two separate items: a "Jabiru" dropdown (J170-M, J430-M, J432-M, View All) and a standalone "Aircraft Inventory" link.
**Rationale**: Separates new aircraft (brand relationship) from used inventory (transactional). Gives M-Series models one-click visibility from anywhere on the site. Removes the ambiguity of "Aircraft Sales" as a label.
**Alternative considered**: Expanding the existing dropdown to include model links — rejected as it makes the dropdown unwieldy and doesn't sufficiently elevate the Jabiru brand.

### 4. Engine and legacy pages linked contextually, not in nav
**Decision**: Engine page and legacy models page are discoverable through the hub and model pages, but not listed in the nav dropdown.
**Rationale**: Nav dropdown is for conversion-path pages (specific models → inquiry). Engine and legacy are supporting content. Keeping the Jabiru dropdown to 4 items (3 models + View All) keeps it scannable.

## Risks / Trade-offs

- **Nav length on desktop** → With Jabiru added as top-level, the nav has 6 items plus the CTA button. Monitor for overflow at mid-range viewport widths (768–1024px). Mitigation: abbreviate "Service & Flight Training" if needed, or adjust spacing.
- **Mobile nav complexity** → Adding a Jabiru accordion section to the mobile menu increases its length. Mitigation: follow existing mobile pattern (section header + indented links), same as the previous Aircraft Sales section.
- **Legacy page SEO expectations** → A single legacy page for all 100/200 series models will rank less strongly for individual model searches than dedicated pages would. Accepted trade-off given volume of models and content depth available.

## Open Questions

- What specific legacy models should appear on the legacy page (exact model names for 100 and 200 series)?
- Does the engine page cover all engine variants used across models (2200, 3300) or focus on the Jabiru engine family generally?
