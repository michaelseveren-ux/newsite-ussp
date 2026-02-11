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
The navigation SHALL display primary navigation links: "Aircraft Sales" (dropdown), "About Us", "How We Help", "Press & Videos", and "Service & Flight Training".

#### Scenario: Navigation links are visible on desktop
- **WHEN** the viewport width is 768px or greater
- **THEN** all primary navigation links are visible in the navigation bar

#### Scenario: Navigation links appear in correct order
- **WHEN** the navigation bar is displayed
- **THEN** "Aircraft Sales" appears as the first navigation item

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
