## Why

Customers frequently contact us asking where they can get their Jabiru aircraft serviced. Currently there's no easy way for them to find this information on the website. A visual map showing service centers and flight schools with Jabiru aircraft will provide convenient self-service access to this information, reducing support inquiries and helping customers quickly locate nearby facilities.

## What Changes

- Add a new "Service Map" page to the website displaying an interactive map of the country
- Display service center locations with icons and information popups
- Display flight school locations (schools using Jabiru aircraft) with distinct icons
- Each location shows relevant details: name, address, contact info, services offered
- Users can filter by location type (service centers vs flight schools)
- Responsive design for mobile and desktop viewing

## Capabilities

### New Capabilities
- `service-location-map`: Interactive map component displaying service centers and flight schools with filtering, location data management, and info popups

### Modified Capabilities
<!-- No existing capabilities are being modified -->

## Impact

- **New page**: `/service-map` or similar route
- **New components**: Map component, location markers, filter controls, info popups
- **New data**: Location data file (`src/data/locations.ts`) storing service center and flight school information
- **Dependencies**: Map library integration (e.g., Leaflet, Google Maps, or Mapbox)
- **Navigation**: Update site navigation to include link to the new map page
