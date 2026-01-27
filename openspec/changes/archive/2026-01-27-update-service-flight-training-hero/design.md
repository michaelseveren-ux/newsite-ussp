## Context

The Service & Flight Training page (`/service-map`) currently uses only a `Section` component with a title and subtitle, immediately showing the interactive map. All other internal pages (Services, About, Aircraft for Sale) use a split-layout hero pattern with:
- Two-column grid (stacked on mobile)
- Left: accent text, headline, description, two CTAs
- Right: image with decorative accent boxes
- Dark background (`bg-primary-900`)

The current page structure:
```
Navigation → Section (map) → Footer
```

Target structure:
```
Navigation → Hero Section → Section (map) → Footer
```

## Goals / Non-Goals

**Goals:**
- Add a hero section that matches the established split-layout pattern
- Maintain visual consistency with Services, About, and Aircraft pages
- Keep the interactive map as the primary content below the hero

**Non-Goals:**
- Creating a new reusable Hero component (the pattern is inline in each page)
- Changing the map functionality or Section component
- Modifying other pages

## Decisions

### 1. Use inline hero pattern (not component)
**Decision**: Copy the inline hero HTML structure from `services.astro` rather than creating a shared component.

**Rationale**: The existing pages (services, about, aircraft-for-sale) all use inline hero sections with slight variations in content. Creating a component would require refactoring those pages too, which is out of scope. Following the established pattern keeps changes minimal.

**Alternative considered**: Create a `SplitHero.astro` component — rejected as scope creep.

### 2. Hero content and CTAs
**Decision**:
- Accent text: "Service & Training"
- Headline: "Find Service Centers & Flight Schools"
- Description: Brief text about locating authorized Jabiru service centers and flight training
- Primary CTA: "View Map" (anchor to #service-map)
- Secondary CTA: "Contact Us" (link to /#contact)

**Rationale**: Mirrors the CTA pattern on Services page. Primary action scrolls to the map content; secondary provides contact option.

### 3. Hero image
**Decision**: Use an existing image from `/images/` or a placeholder. Recommended: service/maintenance themed or flight school image.

**Rationale**: The image should represent the page content. If no suitable image exists, use `/images/hero-aircraft.jpg` as fallback (same as services page) until a more specific image is added.

### 4. Remove duplicate title from Section
**Decision**: Keep the Section component but remove or simplify its title/subtitle since the hero now introduces the page.

**Rationale**: Avoids redundant headers. The Section can use a simpler label like "Interactive Map" or no title at all.

## Risks / Trade-offs

**[Risk] No dedicated hero image available** → Use existing hero-aircraft.jpg as fallback; can be updated later without code changes.

**[Risk] Section title becomes redundant** → Simplify to just "Interactive Map" or remove title entirely to avoid repetition.

**[Trade-off] Inline vs component** → Chose consistency with existing codebase over DRY principle. Technical debt is acceptable given the small number of pages.
