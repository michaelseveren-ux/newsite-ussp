## Context

The homepage (`src/pages/index.astro`) currently renders sections in this order:
1. Hero
2. Featured Aircraft (`id="aircraft"`)
3. Why Choose Us (`id="about"`)
4. Services (`id="services"`)
5. Get in Touch (`id="contact"`)

Each section is a self-contained JSX block using the `<Section>` component. The sections are independent and have no data dependencies on each other.

## Goals / Non-Goals

**Goals:**
- Reorder homepage sections to: Hero → Services → Aircraft → Why Choose Us → Get in Touch
- Preserve all existing section IDs, content, and styling

**Non-Goals:**
- Changing section content, styling, or behavior
- Modifying navigation or internal anchor links
- Updating the Section component itself

## Decisions

**Decision: Cut-and-paste section reordering**
- Move the Services section block (lines 117-138) to immediately after the Hero component
- Move the Featured Aircraft section block (lines 57-81) to follow Services
- Rationale: Simplest approach with zero risk—no refactoring, no new abstractions

**Decision: Preserve section IDs**
- Keep `id="services"`, `id="aircraft"`, `id="about"`, `id="contact"` unchanged
- Rationale: Ensures any external links or bookmarks continue to work

## Risks / Trade-offs

**[Risk] Hero CTA points to `#aircraft`** → No mitigation needed; the aircraft section retains its ID, link will still work after reordering.

**[Risk] Visual flow between sections** → Minimal; both Services and Aircraft sections use alternating white/gray backgrounds. May need to verify background colors still alternate properly after reorder.
