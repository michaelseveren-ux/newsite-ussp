## ADDED Requirements

### Requirement: Company dropdown groups secondary links
The navigation SHALL provide a "Company" dropdown containing About Us, How We Help, Press & Videos, and Service & Flight Training links.

#### Scenario: Company dropdown reveals secondary links on hover
- **WHEN** a desktop user hovers over the "Company" nav item
- **THEN** a dropdown menu appears with four links: About Us, How We Help, Press & Videos, and Service & Flight Training

#### Scenario: Company dropdown links navigate correctly
- **WHEN** a user clicks any link inside the Company dropdown
- **THEN** the user is navigated to the corresponding page (/about, /services, /blog, /service-map)

### Requirement: Aircraft Inventory is a top-level flat link
The navigation SHALL display "Aircraft Inventory" as a direct, always-visible link at the top level of the desktop nav.

#### Scenario: Aircraft Inventory is visible without interaction
- **WHEN** a desktop user views any page
- **THEN** "Aircraft Inventory" is visible in the nav bar without hovering or clicking

#### Scenario: Aircraft Inventory link navigates correctly
- **WHEN** a user clicks "Aircraft Inventory"
- **THEN** the user is navigated to /aircraft-for-sale

### Requirement: Mobile menu mirrors desktop grouping
The mobile menu SHALL display a Company section with the same four links, consistent with the desktop structure.

#### Scenario: Mobile Company section is visible when menu is open
- **WHEN** a mobile user opens the menu
- **THEN** a "Company" section header is shown with indented links for About Us, How We Help, Press & Videos, and Service & Flight Training

#### Scenario: Mobile Aircraft Inventory link is accessible
- **WHEN** a mobile user opens the menu
- **THEN** "Aircraft Inventory" appears as a flat link between the Jabiru section and the Company section
