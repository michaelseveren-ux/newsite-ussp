## Context

The Jabiru website currently has no way for customers to discover service centers or flight schools. Users must contact support to find nearby facilities. The site is built with Astro and Tailwind CSS, with data stored in TypeScript files (`src/data/`). The existing pattern uses static data files that export typed arrays.

## Goals / Non-Goals

**Goals:**
- Provide an interactive map showing all Jabiru service centers and flight schools
- Allow users to quickly identify and get details about nearby locations
- Follow existing site patterns for data management and component structure
- Keep the implementation simple and maintainable

**Non-Goals:**
- Real-time location updates or user-submitted locations
- Directions or routing functionality
- Search by address/zip code (may be added later)
- Backend/database integration (static data is sufficient for now)

## Decisions

### 1. Map Library: Leaflet with OpenStreetMap

**Choice**: Leaflet.js with OpenStreetMap tiles

**Alternatives considered**:
- Google Maps: Requires API key, usage costs, overkill for this use case
- Mapbox: Nice features but adds cost and complexity
- Static image map: Not interactive enough for good UX

**Rationale**: Leaflet is free, lightweight (~40kb), well-documented, and works well with Astro. OpenStreetMap tiles are free with no API key required. This matches the simple, low-dependency approach of the existing site.

### 2. Data Structure: TypeScript file with typed locations

**Choice**: New `src/data/locations.ts` file exporting a typed array of locations

**Rationale**: Follows the existing pattern used by `aircraft.ts` and `posts.ts`. Type safety, easy to edit, no database needed.

```typescript
type LocationType = 'service-center' | 'flight-school';

interface Location {
  id: string;
  name: string;
  type: LocationType;
  coordinates: { lat: number; lng: number };
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
}
```

### 3. Component Architecture

**Choice**: Single Map component with internal filtering state

**Components**:
- `ServiceMap.astro` - Page wrapper with layout
- `MapContainer` - Client-side map component (needs `client:load` for Leaflet)
- Filter UI integrated into MapContainer

**Rationale**: Leaflet requires client-side JavaScript, so the map must be a client component. Keeping filtering in the same component avoids prop-drilling and state sync complexity.

### 4. Page Route

**Choice**: `/service-map`

**Alternatives considered**:
- `/locations` - Too generic
- `/find-service` - Doesn't include flight schools
- `/map` - Too vague

**Rationale**: Clear, descriptive, matches the feature name.

### 5. Marker Differentiation

**Choice**: Different colored markers for service centers (blue) vs flight schools (green)

**Rationale**: Visual distinction helps users quickly identify location types. Colors align with common conventions (blue for services, green for education).

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Leaflet bundle size impacts page load | Load map component with `client:visible` to defer until in viewport |
| Location data becomes stale | Document update process; consider future CMS integration |
| Map tiles slow in some regions | OpenStreetMap has good global coverage; can switch tile providers if needed |
| Mobile touch interactions | Leaflet has good mobile support out of the box |

## File Structure

```
src/
├── data/
│   └── locations.ts          # Location data
├── components/
│   └── MapContainer.tsx      # Client-side map component (React for Leaflet integration)
├── pages/
│   └── service-map.astro     # Map page
```

## Open Questions

1. **Initial map center/zoom**: Should it default to a national view, or try to detect user location?
   - *Recommendation*: Default to national center; geolocation adds complexity and privacy concerns

2. **Location data source**: Who will maintain the location data? Is there an existing list?
   - *Need input from user*
