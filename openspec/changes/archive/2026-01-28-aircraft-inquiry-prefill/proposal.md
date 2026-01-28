## Why

When users browse individual aircraft listings and click "Inquire About This Aircraft", they're taken to a blank contact form with no context. This creates friction—users must manually type which aircraft they're interested in, and staff receiving the inquiry may not have clear details about which listing prompted the contact. Pre-filling the message improves user experience and ensures inquiries contain the specific aircraft information needed for follow-up.

## What Changes

- The "Inquire About This Aircraft" button will pass aircraft details (title, year, manufacturer, model) via URL query parameters to the contact page
- The contact page will read these query parameters on load and auto-populate the message field with a formatted inquiry template (e.g., "I am interested in the 2015 Cessna 172S Skyhawk. Please contact me with more information.")
- If no query parameters are present, the contact form behaves as normal (empty message field)

## Capabilities

### New Capabilities

None - this enhancement extends existing capabilities.

### Modified Capabilities

- `contact-page`: Add support for reading `aircraft` query parameter and pre-filling the message textarea with an aircraft inquiry template
- `aircraft-sale-page`: Update the "Inquire About This Aircraft" button to pass aircraft details via URL query parameters instead of a plain `/contact` link

## Impact

- **Files affected**:
  - `src/pages/contact.astro` - Add client-side JS to read URL params and populate message
  - `src/pages/aircraft-for-sale/[slug].astro` - Update inquiry button href to include query params
- **No breaking changes**: The contact form continues to work normally without query params
- **No API changes**: This is purely a frontend enhancement
- **No new dependencies**: Uses built-in URLSearchParams API
