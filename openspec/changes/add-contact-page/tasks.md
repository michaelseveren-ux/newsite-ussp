# Tasks: add-contact-page

## 1. Setup

- [x] 1.1 Create `src/pages/contact.astro` with basic Layout, Navigation, and Footer imports
- [x] 1.2 Set up form submission backend (Resend API route)

## 2. Page Structure

- [x] 2.1 Add hero section with page title and subtitle
- [x] 2.2 Create two-column grid layout (form left, contact info right) with responsive stacking

## 3. Contact Form

- [x] 3.1 Add form element with `/api/contact` action URL
- [x] 3.2 Add Name field (text input, required)
- [x] 3.3 Add Email field (email input, required)
- [x] 3.4 Add Phone field (tel input, optional)
- [x] 3.5 Add Subject dropdown with options (General Inquiry, Aircraft Purchase, Aircraft Sale, Flight Training, Service Request, Other)
- [x] 3.6 Add Message textarea (required)
- [x] 3.7 Add submit button with appropriate styling
- [x] 3.8 Add JavaScript for form submission handling (loading state, success message, error handling)
- [x] 3.9 Add honeypot field for basic spam protection

## 4. Contact Information Section

- [x] 4.1 Add phone card with IconPhone and clickable tel: link
- [x] 4.2 Add email card with IconEmail and clickable mailto: link
- [x] 4.3 Add address card with IconLocation and physical address

## 5. Navigation Updates

- [x] 5.1 Update `src/components/Navigation.astro` - change "Get in Touch" href from `#contact` to `/contact`
- [x] 5.2 Update `src/components/Footer.astro` - change Contact link href from `#contact` to `/contact`
- [x] 5.3 Update `src/pages/index.astro` - change `#contact` references to `/contact`
- [x] 5.4 Update `src/pages/about.astro` - change `/#contact` references to `/contact`
- [x] 5.5 Update `src/pages/services.astro` - change `/#contact` references to `/contact`
- [x] 5.6 Update `src/pages/blog/index.astro` - change `/#contact` reference to `/contact`
- [x] 5.7 Update `src/pages/aircraft-for-sale/index.astro` - change `/#contact` references to `/contact`
- [x] 5.8 Update `src/pages/aircraft-for-sale/[slug].astro` - change `/#contact` reference to `/contact`

## 6. Verification

- [x] 6.1 Test form validation (required fields, email format)
- [x] 6.2 Test form submission flow (loading, success, error states)
- [x] 6.3 Test responsive layout on mobile and desktop
- [x] 6.4 Verify all navigation links across the site point to `/contact`
