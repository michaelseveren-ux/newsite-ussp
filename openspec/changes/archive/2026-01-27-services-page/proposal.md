## Why

The website currently lacks a dedicated Services page to showcase what US Sport Planes offers customers beyond aircraft sales. Visitors need a clear overview of all business capabilities to understand the full value proposition and engage with the right service for their needs.

## What Changes

- Add a new `/services` page to the site navigation
- Create a hero section introducing the services offering
- Build individual service sections covering:
  - **Aircraft Sales** - Helping customers find and purchase the right sport aircraft
  - **Aircraft Acquisition** - Sourcing specific aircraft for buyers with particular requirements
  - **Maintenance** - Aircraft maintenance and service support
  - **Parts Sales** - OEM and aftermarket parts supply
  - **Regulatory Compliance** - FAA documentation, registration, and compliance assistance
- Include a CTA section to drive inquiries
- Add "Services" link to the main navigation

## Capabilities

### New Capabilities
- `services-page`: A dedicated page showcasing all business services with hero, service sections, and contact CTA following the existing site design patterns (Section component, card layouts)

### Modified Capabilities
<!-- No existing spec requirements are changing -->

## Impact

- **New files**: `src/pages/services.astro`
- **Modified files**: `src/components/Navigation.astro` (add Services link)
- **Design**: Follows existing patterns from `about.astro` - uses Layout, Navigation, Section, Footer components
- **No breaking changes** to existing functionality
