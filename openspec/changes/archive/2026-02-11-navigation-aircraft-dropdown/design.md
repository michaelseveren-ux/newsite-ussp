## Context

The current navigation uses a flat list of links. Aircraft-related pages ("New Aircraft" and "Aircraft Inventory") are separate top-level items, making the navigation crowded. The "New Aircraft" page needs to be renamed to "Jabiru Aircraft" with a corresponding URL change.

Current navigation structure:
- About Us
- Aircraft Inventory
- How We Help
- Press & Videos
- Service & Flight Training

Target navigation structure:
- Aircraft Sales (dropdown)
  - Jabiru Aircraft → `/jabiru-aircraft/`
  - Aircraft Inventory → `/aircraft-for-sale/`
- About Us
- How We Help
- Press & Videos
- Service & Flight Training

## Goals / Non-Goals

**Goals:**
- Add dropdown menu functionality to navigation
- Group aircraft pages under single "Aircraft Sales" dropdown
- Rename page and URL from "New Aircraft" to "Jabiru Aircraft"
- Maintain accessibility and mobile usability

**Non-Goals:**
- Adding dropdowns to other navigation items
- Changing the Aircraft Inventory page content
- Adding new pages

## Decisions

### Decision 1: CSS hover-based dropdown for desktop
**Choice**: Use CSS `:hover` and `group-hover` for desktop dropdown visibility
**Rationale**: Simple, no JavaScript required for basic functionality. Tailwind supports this pattern well.
**Alternatives considered**: JavaScript click-based dropdown - adds complexity, better for touch-first but overkill here.

### Decision 2: Expanded list for mobile menu
**Choice**: On mobile, show dropdown items as indented sub-items (no nested dropdown)
**Rationale**: Nested dropdowns on mobile are poor UX. Flat list with visual hierarchy is cleaner.

### Decision 3: Move page directory and update all references
**Choice**: Rename `src/pages/new-aircraft/` to `src/pages/jabiru-aircraft/`
**Rationale**: Clean URL structure. Astro file-based routing makes this straightforward.

### Decision 4: Dropdown position as first nav item
**Choice**: "Aircraft Sales" dropdown appears first in navigation order
**Rationale**: Primary business offering should be prominent.

## Risks / Trade-offs

**[Risk] Dropdown not accessible via keyboard** → Mitigation: Add `focus-within` styles alongside hover for keyboard navigation.

**[Risk] Old URL `/new-aircraft/` becomes 404** → Mitigation: Could add redirect, but since this is a new feature, no existing external links to worry about.

**[Risk] Mobile dropdown UX** → Mitigation: Use flat indented list rather than nested menus.
