## Context

The brand partners section displays logos for Jabiru, Aerotrek, and Tecnam in a horizontal strip. Previously logos defaulted to grayscale at 60% opacity, revealing color only on hover. The Aerotrek logo also had a baked-in white background, which caused the hover shadow to box around the image bounds rather than the logo shape.

## Goals / Non-Goals

**Goals:**
- Logos always render at full color with no opacity reduction
- Hover interaction provides a tactile "raised" feel using translate + drop shadow
- Aerotrek logo PNG has a transparent background so drop shadow follows the circular badge shape
- Jabiru appears in the center of the three-logo strip

**Non-Goals:**
- Redesigning the broader BrandPartners section layout
- Modifying certification card interactions
- Adding animation beyond CSS transitions

## Decisions

**Drop shadow over box shadow**
`drop-shadow` (CSS filter) follows the alpha channel of the image, hugging the logo shape. `box-shadow` would shadow the rectangular bounding box regardless of logo transparency. For badge/circular logos like Aerotrek, drop-shadow produces a far more polished result.

**Lift via `-translate-y-1` over scale**
Scale affects surrounding layout flow perception and can look jittery on non-square images. A vertical translate reads as a clean physical lift with no layout side effects.

**Background removal via Pillow pixel threshold**
The Aerotrek PNG had a solid white background. A threshold-based approach (pixels with R, G, B > 220 become transparent) was sufficient given the hard circular boundary and high contrast between white background and dark badge. No feathering or edge detection needed.

**Jabiru center position**
With three logos, center placement is the visual anchor. Jabiru is the primary brand relationship (internal page link vs external), so it warrants prominence.

## Risks / Trade-offs

- **Threshold-based background removal** may leave slight artifacts on anti-aliased edges → acceptable at typical display sizes; source a proper transparent PNG if artifacts become visible at large sizes
- **drop-shadow on Safari** has historically had rendering quirks → standard modern Safari versions handle this correctly; no mitigation needed
