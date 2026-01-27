## Why

The header navigation is invisible on the Service & Flight Training page (`/service-map.astro`) because it renders with a transparent background (white text) against a white page background. Users cannot see or access the navigation menu until they scroll down 50+ pixels. The header should always be visible on every page.

## What Changes

- Fix the Navigation component rendering on the Service & Flight Training page to use an opaque dark background instead of transparent
- Ensure consistent header visibility across all pages regardless of background color

## Capabilities

### New Capabilities

None - this is a bug fix, not a new capability.

### Modified Capabilities

None - no spec-level behavior changes, only a prop configuration fix.

## Impact

- **Affected code**: `src/pages/service-map.astro` - Navigation component prop
- **User impact**: Navigation will be immediately visible on the Service & Flight Training page
- **Risk**: Minimal - same pattern already used on other pages (aircraft-for-sale, blog)
