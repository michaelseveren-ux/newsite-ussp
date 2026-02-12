## Why

The current font pairing (Bebas Neue + Source Serif 4) feels tight and condensed. Switching to Oswald + Inter will provide a more open, modern, and readable typography system while maintaining a professional aviation aesthetic.

## What Changes

- Replace Bebas Neue with Oswald for heading font (`font-heading`)
- Replace Source Serif 4 with Inter for body font (`font-body`)
- Update Google Fonts import to load new font families
- Update Tailwind font family configuration

## Capabilities

### New Capabilities
<!-- None - this is a styling update, not a new capability -->

### Modified Capabilities
<!-- No spec-level changes - this is purely a visual/styling update -->

## Impact

- `src/layouts/Layout.astro`: Google Fonts link update
- `tailwind.config.mjs`: Font family configuration update
- Visual appearance of all text across the entire site
