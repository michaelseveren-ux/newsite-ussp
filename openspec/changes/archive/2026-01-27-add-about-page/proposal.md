## Why

The current About content is limited to a brief "Why Choose Us" section on the homepage. A dedicated About page will better showcase US Sport Planes' company story, values, and team—building trust with potential customers and differentiating from competitors. This is standard for aviation sales companies (as seen on Van Bortel and Sling Aircraft sites) and provides a destination for the existing "About" navigation link.

## What Changes

- Create a new dedicated `/about` page with comprehensive company information
- Update the navigation "About" link from `/#about` to `/about`
- Add new reusable components for About page sections (hero, story timeline, team, values)
- The homepage "Why Choose Us" section remains as a summary with a link to the full About page

## Capabilities

### New Capabilities

- `about-page`: Dedicated About page displaying company story, mission/values, team profiles, and company history with visual sections inspired by aviation industry sites (Van Bortel, Sling Aircraft)

### Modified Capabilities

- `astro-site`: Navigation component update to link to the new `/about` route instead of the homepage anchor

## Impact

- **New files**: `src/pages/about.astro`, potentially new components for About-specific sections
- **Modified files**: `src/components/Navigation.astro` (update About link href)
- **Content needed**: Company story/history, team member information, mission statement, values
- **Design patterns**: Follows existing Section component pattern, uses Tailwind CSS consistent with site styling
