## ADDED Requirements

### Requirement: Service & Flight Training page displays hero section
The Service & Flight Training page SHALL display a hero section at the top of the page, below the navigation, matching the split-layout hero pattern used on other internal pages.

#### Scenario: Hero section displays on page load
- **WHEN** a user navigates to the Service & Flight Training page
- **THEN** a hero section is displayed with a dark background, two-column layout, headline, description, and call-to-action buttons

### Requirement: Hero section contains appropriate content
The hero section SHALL display:
- An accent label reading "Service & Training"
- A headline: "Find Service Centers & Flight Schools"
- A description paragraph about locating authorized service centers and flight schools
- A primary CTA button labeled "View Map" that scrolls to the map section
- A secondary CTA button labeled "Contact Us" that links to the contact section

#### Scenario: User clicks primary CTA
- **WHEN** a user clicks the "View Map" button in the hero
- **THEN** the page scrolls smoothly to the interactive map section

#### Scenario: User clicks secondary CTA
- **WHEN** a user clicks the "Contact Us" button in the hero
- **THEN** the user is navigated to the contact section on the homepage

### Requirement: Hero section displays image with decorative elements
The hero section SHALL display an image in the right column with decorative accent boxes positioned behind it, consistent with other page heroes.

#### Scenario: Hero image displays on desktop
- **WHEN** a user views the page on a desktop screen (lg breakpoint and above)
- **THEN** the hero displays a two-column layout with text on the left and image with decorative accents on the right

#### Scenario: Hero layout stacks on mobile
- **WHEN** a user views the page on a mobile screen (below lg breakpoint)
- **THEN** the hero layout stacks vertically with text content above the image

### Requirement: Map section follows hero
The interactive map section SHALL appear below the hero section and remain fully functional.

#### Scenario: Map displays below hero
- **WHEN** a user scrolls past the hero section
- **THEN** the interactive map section is visible and functional
