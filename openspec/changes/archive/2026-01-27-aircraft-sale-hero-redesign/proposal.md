## Why

The Aircraft For Sale page has a minimal hero section (just headline + description) while the About Us page has a visually rich split-layout hero with an image, CTA buttons, and decorative accents. This inconsistency creates a jarring experience when navigating between pages. Updating the Aircraft For Sale hero to match the About Us style will create visual consistency across the site and improve the page's first impression.

## What Changes

- Replace the simple hero section in `src/pages/aircraft-for-sale/index.astro` with a split-layout hero matching the About Us page pattern
- Add a 2-column grid layout (text left, image right on large screens)
- Add subtitle tag, updated headline, description, and CTA buttons
- Add hero image with rounded corners
- Add decorative accent elements (colored squares behind the image)
- Maintain responsive behavior (stacks on mobile)

## Capabilities

### New Capabilities
- None (this is a UI styling change, not a new capability)

### Modified Capabilities
- None (no spec-level behavior changes, purely visual update)

## Impact

- **Files affected**: `src/pages/aircraft-for-sale/index.astro` (hero section only, lines 18-28)
- **No breaking changes**: The page content and functionality remain the same
- **No API changes**: This is a frontend-only visual update
- **Dependencies**: May want to use a different hero image than About Us page for variety (currently both would use `/images/hero-aircraft.jpg`)
