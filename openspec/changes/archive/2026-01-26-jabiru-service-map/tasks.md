# Implementation Tasks

## 1. Setup & Dependencies

- [x] 1.1 Install Leaflet and React dependencies (`leaflet`, `react-leaflet`, `@astrojs/react`)
- [x] 1.2 Create Location type definition in `src/types/location.ts`
- [x] 1.3 Add Leaflet CSS import to the project

## 2. Location Data

- [x] 2.1 Create `src/data/locations.ts` with typed location array
- [x] 2.2 Add sample service center entries with coordinates
- [x] 2.3 Add sample flight school entries with coordinates

## 3. Map Component

- [x] 3.1 Create `MapContainer.tsx` React component with Leaflet map initialization
- [x] 3.2 Implement location markers with type-specific colors (blue for service centers, green for flight schools)
- [x] 3.3 Add info popup display on marker click showing name, address, and contact info
- [x] 3.4 Implement filter controls (All / Service Centers / Flight Schools)
- [x] 3.5 Add responsive styling for mobile and desktop views

## 4. Map Page

- [x] 4.1 Create `src/pages/service-map.astro` page
- [x] 4.2 Import and render MapContainer component with `client:load` directive
- [x] 4.3 Add page title and introductory text

## 5. Navigation

- [x] 5.1 Add "Service Map" link to site header/navigation component

## 6. Polish & Verification

- [x] 6.1 Test map interactions (zoom, pan, marker clicks)
- [x] 6.2 Test filter functionality
- [x] 6.3 Verify responsive behavior on mobile viewport
- [x] 6.4 Verify all location popups display correct information
