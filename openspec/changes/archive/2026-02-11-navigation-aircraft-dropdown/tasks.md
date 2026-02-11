## 1. Page Rename

- [x] 1.1 Move `src/pages/new-aircraft/` directory to `src/pages/jabiru-aircraft/`
- [x] 1.2 Update page title in meta tags to "Jabiru Aircraft | US Sport Planes"
- [x] 1.3 Update hero section headline from "New Jabiru Aircraft" to "Jabiru Aircraft"
- [x] 1.4 Update any internal references to `/new-aircraft/` to `/jabiru-aircraft/`

## 2. Navigation Dropdown - Desktop

- [x] 2.1 Restructure `navLinks` to support dropdown items
- [x] 2.2 Create dropdown container with hover visibility (CSS `group-hover`)
- [x] 2.3 Add "Aircraft Sales" as dropdown trigger with chevron icon
- [x] 2.4 Add "Jabiru Aircraft" link pointing to `/jabiru-aircraft/`
- [x] 2.5 Add "Aircraft Inventory" link pointing to `/aircraft-for-sale/`
- [x] 2.6 Style dropdown with proper positioning, background, and hover states
- [x] 2.7 Add `focus-within` styles for keyboard accessibility

## 3. Navigation Dropdown - Mobile

- [x] 3.1 Update mobile menu to show "Aircraft Sales" as section header
- [x] 3.2 Add indented sub-links for "Jabiru Aircraft" and "Aircraft Inventory"
- [x] 3.3 Ensure mobile links close menu and navigate correctly

## 4. Cleanup

- [x] 4.1 Remove standalone "Aircraft Inventory" from flat navLinks (now in dropdown)
- [x] 4.2 Verify build passes with no errors
- [x] 4.3 Test dropdown hover behavior on desktop
- [x] 4.4 Test mobile menu aircraft links
- [x] 4.5 Verify `/jabiru-aircraft/` page loads correctly
