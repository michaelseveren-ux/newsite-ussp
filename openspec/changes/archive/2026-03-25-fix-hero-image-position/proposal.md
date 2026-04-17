## Why

On large monitors, the hero section grows unconstrained (`min-h-screen` with no ceiling), causing `bg-cover` to scale the background image until the aircraft drifts toward the top of the frame and out of the natural focal zone.

## What Changes

- Add a `max-h` cap to the hero section so it stops growing beyond a sensible height on large viewports
- The existing `min-h-screen` behavior is preserved for normal and small screens

## Capabilities

### New Capabilities
<!-- none -->

### Modified Capabilities
- `hero-section`: Add max-height constraint so the hero section does not grow beyond a fixed ceiling on large viewports, preventing the background image subject from drifting out of frame

## Impact

- `src/components/Hero.astro` — one class addition to the section element
- No API changes, no new dependencies
