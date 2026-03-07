## Why

The brand partners logo strip used a grayscale + reduced opacity default state that made logos feel inactive and dull. Hovering to reveal color created unnecessary friction — logos should feel alive and trustworthy from the moment a visitor sees them.

## What Changes

- Remove grayscale/opacity treatment from brand partner logos (always full color)
- Replace scale hover effect with a lift + drop shadow interaction (`hover:-translate-y-1 hover:drop-shadow-md`)
- Remove white background from Aerotrek logo PNG so drop shadow follows the logo shape
- Reorder brand logos so Jabiru appears in the center position

## Capabilities

### New Capabilities

- `brand-partner-logo-interactions`: Visual interaction style for brand partner logos in the partners strip — always full color with a lift + drop shadow on hover

### Modified Capabilities

- none

## Impact

- `src/components/BrandPartners.astro` — hover class changes on logo anchor elements
- `src/data/partners.ts` — logo array reordering
- `public/images/logos/aerotrek.png` — background transparency applied
