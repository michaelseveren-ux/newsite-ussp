## Why

The current contact experience relies on anchor links (`#contact`) that scroll to contact sections embedded within other pages. This approach lacks a proper lead capture mechanism - visitors can only use mailto links or phone numbers, with no way to submit inquiries directly through the site. A dedicated Contact page with a form will improve lead generation and provide a better user experience.

## What Changes

- Add a new `/contact` page with a contact form for visitor inquiries
- Update the "Get in Touch" nav button to link to `/contact` instead of `#contact`
- Implement form submission handling via Vercel API route with Resend
- Include contact information (phone, email, address) alongside the form
- Update existing `/#contact` links across the site to point to `/contact`

## Capabilities

### New Capabilities
- `contact-page`: Dedicated contact page with an inquiry form, contact information display, and form submission handling

### Modified Capabilities
<!-- No existing specs require requirement changes. Navigation link updates are implementation details within individual page specs. -->

## Impact

- **New file**: `src/pages/contact.astro` - the contact page
- **New file**: `src/pages/api/contact.ts` - API route for form submission via Resend
- **Modified**: `src/components/Navigation.astro` - update "Get in Touch" href from `#contact` to `/contact`
- **Modified**: Multiple pages containing `/#contact` links (index, about, services, blog, aircraft-for-sale pages)
- **Dependencies**: Resend npm package for email delivery
- **Environment variables**: `RESEND_API_KEY`, `CONTACT_EMAIL` (optional)
- **Styling**: Uses existing Tailwind classes and component patterns (Section, Layout, icons)
