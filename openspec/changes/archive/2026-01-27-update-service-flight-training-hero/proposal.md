## Why

The Service & Flight Training page (`/service-map`) is the only page on the site without a hero section. While all other internal pages (Services, About, Aircraft for Sale) use a consistent split-layout hero with headline, description, CTAs, and imagery, this page jumps directly to a Section component with just a title and subtitle. This inconsistency disrupts the visual hierarchy and branding experience users have come to expect across the site.

## What Changes

- Add a split-layout hero section to the Service & Flight Training page matching the pattern used on Services, About, and Aircraft pages
- Hero will include:
  - Left column: Headline, description text, and two CTAs (primary + secondary)
  - Right column: Relevant image with decorative accent elements
  - Dark background (`bg-primary-900`) consistent with other pages
- Remove or relocate the current title/subtitle from the Section component (since the hero will now introduce the page)
- The interactive map remains as the main content below the new hero

## Capabilities

### New Capabilities
- None (using existing hero pattern)

### Modified Capabilities
- None (no spec-level behavior changes, this is a visual/layout update)

## Impact

- **Files affected**: `src/pages/service-map.astro`
- **Components used**: Existing split-layout hero pattern (inline, as used in services.astro, about.astro, aircraft-for-sale/index.astro)
- **No breaking changes**: The page URL and map functionality remain unchanged
- **Assets needed**: A hero image for the right column (service center or flight school themed)
