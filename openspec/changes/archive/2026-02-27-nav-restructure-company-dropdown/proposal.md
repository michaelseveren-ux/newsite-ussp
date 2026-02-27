## Why

The navigation bar contained too many top-level items (Jabiru dropdown + 5 flat links + CTA), making it overly wide on desktop and difficult to scan. Condensing secondary links into a grouped "Company" dropdown reduces visual clutter while keeping the most important destination — Aircraft Inventory — prominent and directly accessible.

## What Changes

- Remove the flat nav links for About Us, How We Help, Press & Videos, and Service & Flight Training
- Add a "Company" dropdown containing those four links
- Keep Aircraft Inventory as a standalone flat link
- Keep the Jabiru dropdown unchanged
- Update the mobile menu to reflect the same structure (Company section replaces the four flat links)

## Capabilities

### New Capabilities
- `navigation`: Top-level navigation structure with Jabiru dropdown, Aircraft Inventory flat link, Company dropdown, and Get in Touch CTA

### Modified Capabilities
<!-- No existing spec for navigation — treating as new -->

## Impact

- `src/components/Navigation.astro`: Primary file changed — nav link data restructured, Company dropdown added to desktop and mobile layouts
- No new dependencies introduced
- No breaking route or URL changes — all hrefs unchanged
