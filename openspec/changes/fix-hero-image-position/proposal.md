## Why

The homepage hero background image is positioned at center, which cuts off the top of the aircraft. The plane should be the visual focal point, but the current positioning places it too high in the frame.

## What Changes

- Adjust the hero background image vertical position from `bg-center` to a lower position (e.g., `bg-bottom` or `bg-[center_70%]`) so the aircraft is fully visible and becomes the visual focus
- This ensures the plane is prominently displayed without being cropped by the top of the viewport

## Capabilities

### New Capabilities
<!-- None - this is a styling adjustment to an existing component -->

### Modified Capabilities
- `hero-section`: Background image positioning requirement needs to specify focal point preservation

## Impact

- **Code**: `src/components/Hero.astro` - single line change to background positioning class
- **Visual**: Homepage hero will show more of the aircraft, improving the first impression
- **No breaking changes**: Layout and functionality remain identical
