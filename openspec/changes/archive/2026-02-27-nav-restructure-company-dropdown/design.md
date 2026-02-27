## Context

The site navigation (`src/components/Navigation.astro`) previously rendered a logo, a Jabiru dropdown, five flat links, and a CTA button in a single horizontal row. On desktop viewports this was too wide, making the nav feel cluttered and hard to scan. The fix groups four secondary links under a new "Company" dropdown, reducing the top-level item count from 7 to 4 (logo, Jabiru ▾, Aircraft Inventory, Company ▾, Get in Touch).

## Goals / Non-Goals

**Goals:**
- Reduce horizontal nav width by consolidating secondary links into a Company dropdown
- Keep Aircraft Inventory as a prominent, directly-accessible flat link
- Preserve the existing Jabiru dropdown structure unchanged
- Mirror the desktop grouping in the mobile menu

**Non-Goals:**
- Changing any page routes or URLs
- Redesigning the mobile menu interaction pattern
- Adding active/current-page state indicators
- Animating dropdown open/close beyond the existing CSS group-hover pattern

## Decisions

### Component data structure
Group link data into three explicit data objects at the top of the component: `jabiruDropdown`, a single `aircraftInventory` link, and `companyDropdown`. This keeps the template declarative and makes future link additions straightforward.

*Alternative considered:* A single flat `navLinks` array with a `dropdown` flag per item — rejected because it adds conditional logic to the template and obscures intent.

### Company dropdown styling
Reuse the exact same dropdown markup and Tailwind classes as the Jabiru dropdown (`group-hover`, `opacity-0 invisible → opacity-100 visible`, `bg-primary-900/95 backdrop-blur-sm`). Consistency over novelty.

### Mobile menu
Mirror the desktop grouping: Jabiru section → divider → Aircraft Inventory flat link → divider → Company section → CTA. The Company section uses the same label/indent pattern as the Jabiru section.

## Risks / Trade-offs

- **"Company" label may feel generic** → Acceptable for now; the dropdown content is clear. Can be revisited if user testing shows confusion.
- **More clicks to reach secondary pages** → Users must open Company dropdown to reach About, Services, Press, and Training. Mitigated by Aircraft Inventory remaining one click away, and these pages being lower in the conversion funnel.

## Migration Plan

Change is isolated to a single component file with no external dependencies. No data migrations or deployment steps required beyond a standard build. Rollback is a revert of `src/components/Navigation.astro`.
