## 1. Data Layer

- [x] 1.1 Create `src/data/jabiru.ts` with TypeScript types for Jabiru aircraft models
- [x] 1.2 Add data for J170-M model (specs, pricing, description, images)
- [x] 1.3 Add data for J430-M model (specs, pricing, description, images)
- [x] 1.4 Add data for J432-M model (specs, pricing, description, images)
- [x] 1.5 Create helper function `getAllJabiruModels()` to retrieve all models

## 2. Page Structure

- [x] 2.1 Create `src/pages/new-aircraft/index.astro` page file
- [x] 2.2 Add page layout with Navigation (non-transparent) and Footer
- [x] 2.3 Implement hero section with "Official Jabiru Importer" messaging
- [x] 2.4 Add meta tags for SEO (title, description)

## 3. Model Display

- [x] 3.1 Create model card/section component for displaying individual Jabiru aircraft
- [x] 3.2 Implement specifications display for each model (cruise speed, range, engine, seating, useful load)
- [x] 3.3 Add pricing display with USD formatting and "base price" notation
- [x] 3.4 Render all three models on the page in a grid or stacked layout

## 4. Ordering Process Section

- [x] 4.1 Create "How to Order" section with clear heading
- [x] 4.2 Add ordering steps content (inquiry, consultation, configuration, deposit, delivery)
- [x] 4.3 Add prominent CTA button linking to contact page

## 5. Navigation Update

- [x] 5.1 Add "New Aircraft" link to `navLinks` array in `Navigation.astro`
- [x] 5.2 Position "New Aircraft" as first item in navigation order
- [x] 5.3 Verify link navigates to `/new-aircraft/`

## 6. Polish & Verification

- [x] 6.1 Verify responsive layout on mobile and desktop
- [x] 6.2 Verify page matches site styling (colors, typography, spacing)
- [x] 6.3 Test all navigation links work correctly
- [x] 6.4 Verify CTA buttons link to contact page
