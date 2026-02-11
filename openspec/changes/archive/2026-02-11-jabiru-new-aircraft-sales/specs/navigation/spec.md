# Spec: Navigation

## MODIFIED Requirements

### Requirement: Navigation displays primary links
The navigation SHALL display primary navigation links: "New Aircraft", "About Us", "Aircraft Inventory", "How We Help", "Press & Videos", and "Service & Flight Training".

#### Scenario: Navigation links are visible on desktop
- **WHEN** the viewport width is 768px or greater
- **THEN** all primary navigation links are visible in the navigation bar

#### Scenario: New Aircraft link navigates to new aircraft page
- **WHEN** a user clicks the "New Aircraft" navigation link
- **THEN** the user is navigated to the `/new-aircraft/` page

#### Scenario: Navigation links appear in correct order
- **WHEN** the navigation bar is displayed
- **THEN** "New Aircraft" appears as the first navigation link
