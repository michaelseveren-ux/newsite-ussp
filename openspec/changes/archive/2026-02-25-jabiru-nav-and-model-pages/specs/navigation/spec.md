## MODIFIED Requirements

### Requirement: Navigation displays primary links
The navigation SHALL display primary navigation links: "Jabiru" (dropdown), "Aircraft Inventory", "About Us", "How We Help", "Press & Videos", and "Service & Flight Training".

#### Scenario: Navigation links are visible on desktop
- **WHEN** the viewport width is 768px or greater
- **THEN** all primary navigation links are visible in the navigation bar

#### Scenario: Navigation links appear in correct order
- **WHEN** the navigation bar is displayed
- **THEN** "Jabiru" appears as the first navigation item, followed by "Aircraft Inventory" as a direct link

### Requirement: Navigation displays Jabiru dropdown
The navigation SHALL display a "Jabiru" dropdown menu containing direct links to each M-Series model page and a link to the full Jabiru hub.

#### Scenario: Jabiru dropdown appears on hover
- **WHEN** a user hovers over "Jabiru" on desktop
- **THEN** a dropdown menu appears showing "J170-M", "J430-M", "J432-M", and "View All Models" links

#### Scenario: Jabiru dropdown is keyboard accessible
- **WHEN** a user focuses on "Jabiru" using keyboard navigation
- **THEN** the dropdown menu becomes visible

#### Scenario: J170-M link navigates correctly
- **WHEN** a user clicks "J170-M" in the Jabiru dropdown
- **THEN** the user is navigated to `/jabiru-aircraft/j170-m`

#### Scenario: J430-M link navigates correctly
- **WHEN** a user clicks "J430-M" in the Jabiru dropdown
- **THEN** the user is navigated to `/jabiru-aircraft/j430-m`

#### Scenario: J432-M link navigates correctly
- **WHEN** a user clicks "J432-M" in the Jabiru dropdown
- **THEN** the user is navigated to `/jabiru-aircraft/j432-m`

#### Scenario: View All Models link navigates correctly
- **WHEN** a user clicks "View All Models" in the Jabiru dropdown
- **THEN** the user is navigated to `/jabiru-aircraft/`

#### Scenario: Dropdown closes when mouse leaves
- **WHEN** a user moves mouse away from the dropdown area
- **THEN** the dropdown menu closes

### Requirement: Aircraft Inventory is a direct navigation link
The navigation SHALL display "Aircraft Inventory" as a direct link to `/aircraft-for-sale/` with no dropdown.

#### Scenario: Aircraft Inventory link navigates correctly
- **WHEN** a user clicks "Aircraft Inventory" in the navigation
- **THEN** the user is navigated to `/aircraft-for-sale/`

### Requirement: Navigation mobile menu shows Jabiru model links
The mobile navigation menu SHALL display Jabiru model links as indented sub-items under a "Jabiru" section header, followed by "Aircraft Inventory" as a standalone link.

#### Scenario: Mobile menu shows Jabiru section
- **WHEN** the mobile menu is open
- **THEN** "Jabiru" appears as a section header with "J170-M", "J430-M", "J432-M", and "View All Models" as indented sub-links

#### Scenario: Mobile Jabiru links navigate correctly
- **WHEN** a user taps a model link or "View All Models" in the mobile menu
- **THEN** the user is navigated to the correct page and the menu closes

#### Scenario: Mobile Aircraft Inventory link navigates correctly
- **WHEN** a user taps "Aircraft Inventory" in the mobile menu
- **THEN** the user is navigated to `/aircraft-for-sale/` and the menu closes
