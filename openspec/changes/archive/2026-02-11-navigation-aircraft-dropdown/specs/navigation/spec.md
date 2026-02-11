# Spec: Navigation

## MODIFIED Requirements

### Requirement: Navigation displays primary links
The navigation SHALL display primary navigation links: "Aircraft Sales" (dropdown), "About Us", "How We Help", "Press & Videos", and "Service & Flight Training".

#### Scenario: Navigation links are visible on desktop
- **WHEN** the viewport width is 768px or greater
- **THEN** all primary navigation links are visible in the navigation bar

#### Scenario: Navigation links appear in correct order
- **WHEN** the navigation bar is displayed
- **THEN** "Aircraft Sales" appears as the first navigation item

## ADDED Requirements

### Requirement: Navigation displays Aircraft Sales dropdown
The navigation SHALL display an "Aircraft Sales" dropdown menu containing links to aircraft-related pages.

#### Scenario: Dropdown appears on hover
- **WHEN** a user hovers over "Aircraft Sales" on desktop
- **THEN** a dropdown menu appears showing "Jabiru Aircraft" and "Aircraft Inventory" links

#### Scenario: Dropdown is keyboard accessible
- **WHEN** a user focuses on "Aircraft Sales" using keyboard navigation
- **THEN** the dropdown menu becomes visible

#### Scenario: Jabiru Aircraft link navigates correctly
- **WHEN** a user clicks "Jabiru Aircraft" in the dropdown
- **THEN** the user is navigated to `/jabiru-aircraft/`

#### Scenario: Aircraft Inventory link navigates correctly
- **WHEN** a user clicks "Aircraft Inventory" in the dropdown
- **THEN** the user is navigated to `/aircraft-for-sale/`

#### Scenario: Dropdown closes when mouse leaves
- **WHEN** a user moves mouse away from the dropdown area
- **THEN** the dropdown menu closes

### Requirement: Navigation mobile menu shows aircraft links
The mobile navigation menu SHALL display aircraft links as indented sub-items under "Aircraft Sales".

#### Scenario: Mobile menu shows aircraft section
- **WHEN** the mobile menu is open
- **THEN** "Aircraft Sales" appears as a section header with "Jabiru Aircraft" and "Aircraft Inventory" as indented sub-links

#### Scenario: Mobile aircraft links navigate correctly
- **WHEN** a user taps "Jabiru Aircraft" or "Aircraft Inventory" in the mobile menu
- **THEN** the user is navigated to the correct page and the menu closes

## REMOVED Requirements

### Requirement: New Aircraft link navigates to new aircraft page
**Reason**: Replaced by Aircraft Sales dropdown with "Jabiru Aircraft" sub-item
**Migration**: Use "Jabiru Aircraft" link in dropdown which navigates to `/jabiru-aircraft/`
