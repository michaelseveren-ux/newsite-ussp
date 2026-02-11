## Context

US Sport Planes is the official Jabiru importer for the Americas. The current site has an "Aircraft Inventory" page for pre-owned aircraft sales but lacks a dedicated section for new Jabiru aircraft. Customers need to see available models (J170-M, J430-M, J432-M), their specifications, pricing, and understand the ordering process.

The existing codebase uses:
- Astro for static site generation
- TypeScript data files for aircraft information
- Reusable components (AircraftCard, AircraftSpecs)
- Tailwind CSS for styling

## Goals / Non-Goals

**Goals:**
- Create a new page at `/new-aircraft/` displaying three Jabiru models with specs and pricing
- Add clear ordering process information for customers
- Add "New Aircraft" link to the main navigation
- Follow existing design patterns and component structure

**Non-Goals:**
- Online ordering/checkout system (ordering is inquiry-based via contact)
- Inventory management for new aircraft
- CMS integration for Jabiru data (static data is sufficient for three fixed models)
- Financing calculator or payment plans

## Decisions

### Decision 1: Page route `/new-aircraft/`
**Choice**: Use `/new-aircraft/` as the route
**Rationale**: Clearly distinguishes from `/aircraft-for-sale/` (pre-owned). Short, descriptive URL.
**Alternatives considered**: `/jabiru/`, `/new-jabiru-aircraft/` - rejected as less intuitive for users unfamiliar with the brand name upfront.

### Decision 2: Static data file for Jabiru models
**Choice**: Create `src/data/jabiru.ts` with typed model data
**Rationale**: Follows existing pattern from `src/data/aircraft.ts`. Three models won't change frequently, so CMS integration is unnecessary overhead.
**Alternatives considered**: Sanity CMS integration - rejected due to low content velocity and added complexity.

### Decision 3: Reuse existing component patterns, create new page-specific components
**Choice**: Create new components for model display but follow existing AircraftSpecs styling patterns
**Rationale**: The new aircraft display has different needs (no status badges, no "sold" states, fixed pricing) but should maintain visual consistency.

### Decision 4: Navigation link placement
**Choice**: Add "New Aircraft" as first item in navigation, before "About Us"
**Rationale**: Primary business offering should be prominent. New aircraft sales is a key revenue driver as the official importer.

### Decision 5: Ordering process as page section
**Choice**: Include ordering process as a dedicated section on the same page (not a separate page)
**Rationale**: Keeps all purchase-related information together. Reduces friction for customers exploring options.

## Risks / Trade-offs

**[Risk] Pricing updates require code deployment** → Mitigation: Pricing is maintained in a single data file (`src/data/jabiru.ts`), making updates straightforward. Future CMS integration possible if update frequency increases.

**[Risk] Model specifications may change** → Mitigation: Specs are centralized in the data file. Consider adding a "last updated" date to build trust.

**[Risk] Navigation becoming crowded** → Mitigation: Navigation already has 5 links plus CTA. Adding one more is acceptable. Monitor mobile menu usability.
