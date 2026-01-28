## Why

The current homepage section order places Featured Aircraft immediately after the Hero, before visitors understand what US Sport Planes offers. By leading with Services, we establish credibility and context before showcasing inventory—helping visitors understand the full value proposition before browsing aircraft.

## What Changes

- Move the **Services section** from position 4 to position 2 (directly after Hero)
- Move the **Featured Aircraft section** from position 2 to position 3 (after Services)
- **Why Choose Us** and **Get in Touch** sections remain in their relative positions (now positions 4 and 5)

**New section order:**
1. Hero
2. Services ("Our Services")
3. Featured Aircraft (Aircraft Inventory)
4. Why Choose Us
5. Get in Touch

## Capabilities

### New Capabilities
<!-- None - this is a layout reordering change -->

### Modified Capabilities
<!-- No spec-level requirement changes - only section ordering in the homepage layout -->

## Impact

- **File affected**: `src/pages/index.astro`
- **Change scope**: Reordering existing JSX/Astro section components within the page template
- **No breaking changes**: All sections retain their existing IDs, styling, and functionality
- **Navigation**: Hero CTA links to `#aircraft` will still work (section ID unchanged)
