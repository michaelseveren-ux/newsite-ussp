## Context

The site currently uses Bebas Neue (headings) and Source Serif 4 (body). Bebas Neue is a condensed all-caps display font that feels tight even with increased tracking. The decision is to switch to Oswald + Inter for a more open, modern feel.

## Goals / Non-Goals

**Goals:**
- Replace heading font with Oswald (condensed but more open than Bebas Neue)
- Replace body font with Inter (clean sans-serif with excellent readability)
- Maintain existing font-heading and font-body Tailwind utilities

**Non-Goals:**
- Adding new font weight variants beyond what's needed
- Changing any other typography settings (sizes, line-heights, etc.)
- Modifying component-specific font overrides

## Decisions

### 1. Oswald for headings
**Choice:** Oswald with weights 400-700
**Rationale:** Oswald is a condensed sans-serif like Bebas Neue but with more open letterforms and proper lowercase support. It maintains the bold, industrial feel while being more readable.
**Alternatives considered:** Barlow Condensed (too light), Anton (too heavy/narrow)

### 2. Inter for body text
**Choice:** Inter with weights 400-700
**Rationale:** Inter is a highly legible sans-serif designed for screens. It has generous x-height and open counters, making it feel spacious. Pairs well with condensed display fonts.
**Alternatives considered:** DM Sans (similar but Inter is more established), keeping Source Serif 4 (serif doesn't pair as well with Oswald)

### 3. Keep existing tracking
**Choice:** Retain `tracking-wide` on headings
**Rationale:** Oswald benefits from slight letter-spacing increase for readability at large sizes.

## Risks / Trade-offs

- **Font loading:** Two font families = slightly more network requests → Mitigated by Google Fonts `display=swap` for progressive loading
- **Visual shift:** Users familiar with old fonts may notice change → Acceptable, intentional redesign
