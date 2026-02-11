## Why

The current navigation has separate top-level links for aircraft pages, making it cluttered. Consolidating aircraft-related pages under a single "Aircraft Sales" dropdown improves navigation clarity. Additionally, "New Aircraft" should be renamed to "Jabiru Aircraft" to better reflect the brand-specific content.

## What Changes

- Add "Aircraft Sales" dropdown menu to navigation containing two items:
  - "Jabiru Aircraft" → `/jabiru-aircraft/`
  - "Aircraft Inventory" → `/aircraft-for-sale/`
- Rename page from "New Aircraft" to "Jabiru Aircraft"
- Change URL from `/new-aircraft/` to `/jabiru-aircraft/`
- Update all page titles, meta tags, and headings to use "Jabiru Aircraft"
- Remove standalone "New Aircraft" and "Aircraft Inventory" links from top-level navigation

## Capabilities

### New Capabilities
None

### Modified Capabilities
- `navigation`: Add dropdown menu for "Aircraft Sales" with sub-items, remove standalone aircraft links
- `new-aircraft-page`: Rename to "Jabiru Aircraft", change URL to `/jabiru-aircraft/`, update all page content

## Impact

- **Navigation component**: Add dropdown menu functionality with hover/click behavior
- **Page route**: Move `src/pages/new-aircraft/` to `src/pages/jabiru-aircraft/`
- **SEO**: Update meta title and description references
- **Internal links**: Update any links pointing to `/new-aircraft/`
- **Specs**: Update navigation and new-aircraft-page specs to reflect changes
