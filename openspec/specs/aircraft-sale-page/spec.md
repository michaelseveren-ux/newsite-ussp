# Aircraft Sale Page Spec

## ADDED Requirements

### Requirement: Aircraft For Sale page hero matches site-wide hero pattern
The Aircraft For Sale page hero section SHALL display a split-layout design consistent with other pages (About Us), including a text column, image column, and decorative elements.

#### Scenario: Desktop layout displays two columns
- **WHEN** user views Aircraft For Sale page on desktop (lg breakpoint and above)
- **THEN** hero displays text content on left and image on right in a two-column grid

#### Scenario: Mobile layout stacks vertically
- **WHEN** user views Aircraft For Sale page on mobile (below lg breakpoint)
- **THEN** hero content stacks vertically with text above image

#### Scenario: Hero contains required elements
- **WHEN** user views the Aircraft For Sale page hero
- **THEN** hero displays: subtitle tag, headline, description paragraph, primary CTA button, secondary CTA button, and hero image with decorative accents
