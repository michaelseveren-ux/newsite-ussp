# Spec: Astro Site (Delta)

## MODIFIED Requirements

### Requirement: Navigation Links
The navigation component SHALL provide links to all main site sections.

#### Scenario: About link navigates to About page
- **WHEN** user clicks the "About" link in the navigation
- **THEN** user is navigated to the `/about` page
- **AND** the About page content is displayed

#### Scenario: Navigation displays on all pages
- **WHEN** user is on any page including the About page
- **THEN** the navigation bar is visible with all links functional
