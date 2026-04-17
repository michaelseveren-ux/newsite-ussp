## Context

The `Hero.astro` component uses `min-h-screen` with no upper bound. On large monitors (1080px+ viewport height), the section grows to fill the full viewport height. Because the background image uses `bg-cover`, it scales to fill the container — and as the container grows taller, the image scales further, shifting the aircraft's focal point toward the top of the visible area.

The fix is a single `max-h` Tailwind class on the section element.

## Goals / Non-Goals

**Goals:**
- Prevent the hero section from growing beyond a height where the background image subject remains naturally framed
- Preserve full-viewport-height behavior on normal and small screens

**Non-Goals:**
- Optimize hero appearance for ultrawide or 4K displays
- Change background image or its focal point
- Alter any other hero behavior (typography, CTAs, overlay, scroll indicator)

## Decisions

### Use `max-h-[900px]` as the ceiling

`900px` is chosen because:
- It covers typical desktop viewport heights (768–900px range) without clipping
- Above this height, the image subject drifts noticeably — 900px is the threshold where the current `bg-[center_60%]` position still keeps the aircraft in frame
- It's a simple, single-value constraint with no breakpoint logic needed

**Alternatives considered:**
- `max-h-screen` — no change from current behavior
- Aspect ratio (`aspect-[16/9]`) — requires a `min-h` floor for mobile and a ceiling for large widths; more moving parts for the same outcome
- Changing `bg-position` — addresses symptom, not root cause; position tuning is fragile across varied image crops

## Risks / Trade-offs

- [Risk] On a viewport exactly 900px tall, hero fills the viewport but just barely → Acceptable; this is the intended behavior at the boundary
- [Risk] Future hero images with different compositions may still drift → Mitigation: `max-h` keeps the scale bounded; individual images can adjust `bg-position` if needed

## Migration Plan

1. Add `max-h-[900px]` to the section element in `Hero.astro`
2. Verify visually at common breakpoints (mobile, tablet, 1080p desktop, large desktop)
3. No rollback complexity — reverting is removing one class
