## Tasks

- [x] **Task 1**: Update Navigation.astro to pass `transparent` value to JavaScript via data attribute
  - Add `data-transparent={transparent}` to the nav element
  - Update `updateNavbar()` to check the data attribute before applying transparency changes
  - Only apply scroll-based transparency when `data-transparent="true"`

**File**: `src/components/Navigation.astro`
**Lines**: 20-26 (add data attribute), 115-126 (update JS logic)
