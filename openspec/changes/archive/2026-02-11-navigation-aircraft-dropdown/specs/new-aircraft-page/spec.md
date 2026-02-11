# Spec: Jabiru Aircraft Page

## RENAMED Requirements

### Requirement: Page displays at /new-aircraft/ route
**FROM:** Page displays at /new-aircraft/ route
**TO:** Page displays at /jabiru-aircraft/ route

## MODIFIED Requirements

### Requirement: Page displays at /jabiru-aircraft/ route
The Jabiru aircraft page SHALL be accessible at the `/jabiru-aircraft/` URL path and display information about purchasing new Jabiru aircraft.

#### Scenario: Page loads successfully
- **WHEN** a user navigates to `/jabiru-aircraft/`
- **THEN** the page loads with a hero section, aircraft models, and ordering information

### Requirement: Page displays hero section
The page SHALL display a hero section introducing US Sport Planes as the official Jabiru importer for the Americas with "Jabiru Aircraft" as the page title.

#### Scenario: Hero section content is visible
- **WHEN** the Jabiru aircraft page loads
- **THEN** a hero section is visible with "Jabiru Aircraft" as the headline AND a subheading mentioning "Official Jabiru Importer for the Americas"

### Requirement: Page follows site design patterns
The page SHALL use the existing site layout, navigation, footer, and styling conventions with "Jabiru Aircraft" branding.

#### Scenario: Navigation and footer are present
- **WHEN** the Jabiru aircraft page loads
- **THEN** the site navigation is visible at the top AND the footer is visible at the bottom

#### Scenario: Page title reflects Jabiru branding
- **WHEN** viewing the page in a browser
- **THEN** the browser tab shows "Jabiru Aircraft | US Sport Planes"

#### Scenario: Page styling matches site theme
- **WHEN** viewing the Jabiru aircraft page
- **THEN** colors, typography, and spacing match the rest of the site
