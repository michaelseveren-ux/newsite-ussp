## 1. Navigation Restructure

- [x] 1.1 Rename "Aircraft Sales" nav item to "Jabiru" and change it to a dropdown with links to J170-M, J430-M, J432-M, and View All Models (`/jabiru-aircraft/`)
- [x] 1.2 Add "Aircraft Inventory" as a standalone direct link to `/aircraft-for-sale/` (no dropdown)
- [x] 1.3 Update mobile menu: replace Aircraft Sales section header and sub-links with Jabiru section (J170-M, J430-M, J432-M, View All Models) and Aircraft Inventory as a standalone link
- [x] 1.4 Verify desktop dropdown hover behavior, keyboard accessibility, and close-on-leave all work correctly
- [x] 1.5 Verify mobile menu opens/closes correctly and all new links navigate to the correct pages

## 2. Individual Model Pages

- [x] 2.1 Create `src/pages/jabiru-aircraft/[slug].astro` using `jabiruModels` from `jabiru.ts` to drive content dynamically
- [x] 2.2 Display model name, tagline, and description as primary heading elements
- [x] 2.3 Display full specification set (performance, dimensions, weights, engine) for the model
- [x] 2.4 Display base price in USD format with a "Request Quote" CTA linking to `/contact?aircraft=jabiru-[slug]`
- [x] 2.5 Add contextual link to `/jabiru-aircraft/engine` near the engine specification
- [x] 2.6 Add breadcrumb or back-link to `/jabiru-aircraft/` hub
- [x] 2.7 Set page `<title>` to "Jabiru [Model Name] | US Sport Planes" per model
- [x] 2.8 Verify pages load at `/jabiru-aircraft/j170-m`, `/jabiru-aircraft/j430-m`, and `/jabiru-aircraft/j432-m`

## 3. Jabiru Engine Page

- [x] 3.1 Create `src/pages/jabiru-aircraft/engine.astro`
- [x] 3.2 Write trust-building content about the Jabiru engine family (reliability, simplicity, track record — not a technical datasheet)
- [x] 3.3 Include a section referencing which engine variant (2200, 3300) powers each M-Series model with links to those model pages
- [x] 3.4 Add a contact CTA at the bottom of the page
- [x] 3.5 Set page `<title>` to "Jabiru Engine | US Sport Planes"

## 4. Legacy Models Page

- [x] 4.1 Create `src/pages/jabiru-aircraft/legacy.astro`
- [x] 4.2 Add a 100 Series section listing individual model names and brief descriptions
- [x] 4.3 Add a 200 Series section listing individual model names and brief descriptions
- [x] 4.4 Add a "Browse Used Inventory" CTA near each series section linking to `/aircraft-for-sale/`
- [x] 4.5 Ensure all individual model names appear as readable text for search indexing
- [x] 4.6 Add a link to `/jabiru-aircraft/` for users who want to view current M-Series models
- [x] 4.7 Set page `<title>` to "Legacy Jabiru Models | US Sport Planes"

## 5. Jabiru Hub Page Updates

- [x] 5.1 Add "View Full Details" CTA to each model card on `/jabiru-aircraft/` linking to that model's page
- [x] 5.2 Add a link or section pointing to the engine page (`/jabiru-aircraft/engine`)
- [x] 5.3 Add a link or section pointing to the legacy models page (`/jabiru-aircraft/legacy`), framed for users interested in used or previous-generation aircraft
