## Context

The "Why Choose Us" section displays four value proposition cards in a 2x2 grid. Currently:
- Cards: `bg-white p-6 rounded-lg shadow-md` with no hover states
- Section: `background="white"` — cards blend into the background
- No transitions or interactive feedback

The site uses a warm, professional palette:
- **Primary**: Navy blues (primary-900: #1C2841)
- **Accent**: Terracotta red (accent-500: #B8463B)
- **Gold**: Amber highlights (gold-500: #D4A84B)
- **Paper**: Warm off-white (#F5F2EB)

## Goals / Non-Goals

**Goals:**
- Create visual separation between cards and section background
- Add satisfying hover interactions that feel modern and responsive
- Maintain consistency with existing site aesthetic
- Keep implementation simple (Tailwind utilities only)

**Non-Goals:**
- Adding icons to the cards (separate enhancement)
- Restructuring the grid layout
- JavaScript-based animations
- Changing card content

## Decisions

### 1. Section Background: Use `paper` instead of white

**Choice**: Change section background from `white` to `paper` (#F5F2EB)

**Rationale**: The warm off-white creates subtle but effective contrast with white cards without introducing a harsh gray. It's already in the design system and matches the site's warm, inviting feel.

**Alternatives considered**:
- `gray-50/100`: Too cold for the warm palette
- `primary-50`: Works but paper feels more natural

### 2. Hover Effect: Lift + Scale

**Choice**: Combine two effects on hover:
- `hover:scale-105` — subtle growth draws attention
- `hover:shadow-xl` — shadow deepens for "lift" effect

**Rationale**: The combination creates a clean, tactile feel without visual clutter.

**Alternatives considered**:
- Scale only: Too subtle
- Accent border: Tested but felt too busy
- Background color change: Felt heavy-handed

### 3. Transition Timing: 200ms ease-out

**Choice**: `transition-all duration-200 ease-out`

**Rationale**: 200ms is snappy enough to feel responsive but smooth enough to not feel jarring. `ease-out` makes the hover feel natural (fast start, gentle landing).

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Scale effect may cause layout shift on mobile | Test on touch devices; scale is subtle (1.05) |
| Too many effects could feel "busy" | Kept to just scale + shadow lift |

## Implementation Summary

```html
<!-- Current -->
<div class="bg-white p-6 rounded-lg shadow-md">

<!-- New -->
<div class="bg-white p-6 rounded-lg shadow-md
            hover:scale-105 hover:shadow-xl
            transition-all duration-200 ease-out">
```

Section change:
```diff
- background="white"
+ background="paper"
```
