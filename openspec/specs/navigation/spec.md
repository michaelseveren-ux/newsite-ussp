# Spec: Navigation

## Requirements

### Requirement: Navigation bar displays at top of page
The navigation component SHALL render as a horizontal bar fixed to the top of the viewport, containing the site logo, navigation links, and a call-to-action button.

#### Scenario: Navigation renders on page load
- **WHEN** the homepage loads
- **THEN** a navigation bar is visible at the top of the viewport spanning the full width

#### Scenario: Navigation stays fixed on scroll
- **WHEN** the user scrolls down the page
- **THEN** the navigation bar remains fixed at the top of the viewport

### Requirement: Navigation displays site logo
The navigation SHALL display the US Sport Planes logo on the left side, linking to the homepage.

#### Scenario: Logo is visible and clickable
- **WHEN** the navigation bar is displayed
- **THEN** the site logo appears on the left side AND clicking the logo navigates to the homepage

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

### Requirement: Navigation displays call-to-action button
The navigation SHALL display a prominent CTA button labeled "Get in Touch" or "Request Info" that links to the contact section.

#### Scenario: CTA button is visible and styled distinctly
- **WHEN** the navigation bar is displayed on desktop
- **THEN** a CTA button is visible on the right side with distinct styling (filled background color)

### Requirement: Navigation provides mobile menu
The navigation SHALL provide a hamburger menu icon on mobile viewports that toggles a mobile menu.

#### Scenario: Hamburger icon displays on mobile
- **WHEN** the viewport width is less than 768px
- **THEN** primary navigation links are hidden AND a hamburger menu icon is displayed

#### Scenario: Mobile menu opens on hamburger click
- **WHEN** the user clicks the hamburger menu icon
- **THEN** a mobile menu expands showing all navigation links and the CTA button

#### Scenario: Mobile menu closes after link click
- **WHEN** the user clicks a navigation link in the mobile menu
- **THEN** the mobile menu closes AND the page scrolls to the corresponding section

### Requirement: Navigation has visual contrast with content
The navigation SHALL have a semi-transparent or solid background that provides sufficient contrast for readability over hero images.

#### Scenario: Navigation readable over hero section
- **WHEN** the navigation overlays the hero section
- **THEN** navigation text and logo have sufficient contrast to be readable (background blur or solid color applied)

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
