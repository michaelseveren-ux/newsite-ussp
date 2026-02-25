## Why

US Sport Planes is the official Jabiru importer for the Americas, but the current navigation buries Jabiru under a generic "Aircraft Sales" dropdown alongside used inventory. Individual Jabiru models have no dedicated pages, limiting shareability for sales conversations and reducing SEO reach for prospective buyers researching specific models.

## What Changes

- Rename "Aircraft Sales" nav item to "Aircraft Inventory" as a direct link (no dropdown) pointing to `/aircraft-for-sale/`
- Add "Jabiru" as a top-level nav dropdown with links to each M-Series model and a "View All Models" link to the hub
- Create individual brochure-style pages for each current Jabiru model (J170-M, J430-M, J432-M) at `/jabiru-aircraft/[slug]`
- Create a trust-building engine page at `/jabiru-aircraft/engine`
- Create a legacy models page at `/jabiru-aircraft/legacy` covering the 100 and 200 series with a pathway to used inventory
- Update the Jabiru hub page to include internal navigation linking to model pages, engine page, and legacy section

## Capabilities

### New Capabilities
- `jabiru-model-page`: Individual brochure-style pages for each current M-Series Jabiru model, designed for shareability in sales conversations, with full specs, imagery, and inquiry CTA
- `jabiru-engine-page`: Trust-building informational page about the Jabiru engine at `/jabiru-aircraft/engine`, linked contextually from each model page
- `jabiru-legacy-page`: Single page covering Jabiru 100 and 200 series legacy models at `/jabiru-aircraft/legacy`, with used inventory pathway

### Modified Capabilities
- `navigation`: "Aircraft Sales" dropdown replaced — Jabiru becomes a top-level dropdown with M-Series model links; Aircraft Inventory becomes a standalone direct link
- `jabiru-aircraft-page`: Hub page gains internal navigation linking to model pages, engine page, and legacy models; model cards gain "View Full Details" CTAs

## Impact

- **Code**: `src/components/Navigation.astro` — nav link restructure; new pages under `src/pages/jabiru-aircraft/`
- **Data**: `src/data/jabiru.ts` — existing slug-based model data can drive model pages without schema changes
- **SEO**: New indexable pages for each model name and "Jabiru engine"; legacy page captures search traffic for 100/200 series model names
- **No breaking changes**: All existing URLs preserved; `/jabiru-aircraft/` hub remains accessible
