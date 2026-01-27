## Context

The Navigation component has a `transparent` prop that controls whether the header should be transparent. However, the JavaScript scroll handler unconditionally overrides this prop, causing pages that set `transparent={false}` (like service-map.astro) to still display a transparent header when at the top of the page.

**Affected file**: `src/components/Navigation.astro`
**Root cause**: Lines 115-126 - the `updateNavbar()` function ignores the `transparent` prop

## Goals / Non-Goals

**Goals:**
- Fix the scroll handler to respect the `transparent` prop
- Ensure pages with `transparent={false}` never show a transparent header

**Non-Goals:**
- Changing the scroll behavior for pages that want transparent headers
- Refactoring the Navigation component beyond this fix

## Decisions

**Decision**: Pass the `transparent` value to JavaScript and conditionally apply scroll behavior

The scroll handler should only toggle transparency when `transparent={true}`. When `transparent={false}`, the header should always remain solid regardless of scroll position.

**Implementation approach**: Add a data attribute to the nav element that JavaScript can read to determine whether to apply the scroll behavior.

## Risks / Trade-offs

- **Risk**: Breaking scroll behavior on pages that need it → Mitigated by only changing behavior when `transparent={false}`
- **Risk**: Astro hydration timing → Low risk since we're using vanilla JS with data attributes
