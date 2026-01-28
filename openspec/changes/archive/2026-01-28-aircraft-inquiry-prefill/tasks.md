## 1. Aircraft Detail Page

- [x] 1.1 Update "Inquire About This Aircraft" button href to include `?aircraft={encoded title}` query parameter in `src/pages/aircraft-for-sale/[slug].astro`

## 2. Contact Page

- [x] 2.1 Add JavaScript to parse `aircraft` query parameter from URL on page load in `src/pages/contact.astro`
- [x] 2.2 Pre-fill message textarea with inquiry template when `aircraft` param is present
- [x] 2.3 Auto-select "Aircraft Purchase" in Subject dropdown when `aircraft` param is present

## 3. Testing

- [x] 3.1 Manually verify clicking "Inquire About This Aircraft" navigates to contact with correct query param
- [x] 3.2 Verify message is prefilled correctly on contact page
- [x] 3.3 Verify Subject dropdown is set to "Aircraft Purchase"
- [x] 3.4 Verify normal contact page behavior (no params) still works
- [x] 3.5 Verify form submission works with prefilled message
