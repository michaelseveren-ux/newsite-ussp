## Why

US Sport Planes is the official Jabiru importer for the Americas. Customers need a dedicated section to browse new Jabiru aircraft models, view specifications and pricing, and understand the ordering process. Currently, only pre-owned aircraft are listed on the site.

## What Changes

- Add a new "New Aircraft" page displaying all available Jabiru models for purchase
- Feature three models: J170-M, J430-M, and J432-M with full specifications and pricing for each
- Include an ordering process section explaining how customers can purchase a new aircraft
- Add "New Aircraft" navigation link to the main navigation bar

## Capabilities

### New Capabilities
- `new-aircraft-page`: Page displaying new Jabiru aircraft models with specs, pricing, and ordering information

### Modified Capabilities
- `navigation`: Add "New Aircraft" link to the primary navigation links

## Impact

- **Navigation**: Requires update to Navigation.astro component and navigation spec to include "New Aircraft" link
- **New Page**: New page at `/new-aircraft/` (or similar route)
- **New Components**: May need new components for model cards, specs display, pricing tables, and ordering process section
- **Data**: New data file or integration for Jabiru model specifications and pricing
- **Existing Components**: May be able to reuse patterns from existing AircraftCard, AircraftSpecs components used for pre-owned aircraft
