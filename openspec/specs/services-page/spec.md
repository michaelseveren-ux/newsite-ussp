## ADDED Requirements

### Requirement: Services page exists at /services route
The system SHALL serve a Services page at the `/services` URL path.

#### Scenario: User navigates to services page
- **WHEN** user visits `/services`
- **THEN** system displays the Services page with all service sections

### Requirement: Services page has hero section
The page SHALL display a hero section with headline, description text, and call-to-action buttons.

#### Scenario: Hero section renders correctly
- **WHEN** services page loads
- **THEN** hero section displays with "Our Services" messaging and CTA buttons

### Requirement: Services page displays Aircraft Sales service
The page SHALL include an Aircraft Sales section describing the aircraft sales service offering.

#### Scenario: Aircraft Sales service is visible
- **WHEN** user views the services page
- **THEN** Aircraft Sales service is displayed with title, description, and relevant details

### Requirement: Services page displays Aircraft Acquisition service
The page SHALL include an Aircraft Acquisition section describing aircraft sourcing services for buyers with specific requirements.

#### Scenario: Aircraft Acquisition service is visible
- **WHEN** user views the services page
- **THEN** Aircraft Acquisition service is displayed with title, description, and relevant details

### Requirement: Services page displays Maintenance service
The page SHALL include a Maintenance section describing aircraft maintenance and service support offerings.

#### Scenario: Maintenance service is visible
- **WHEN** user views the services page
- **THEN** Maintenance service is displayed with title, description, and relevant details

### Requirement: Services page displays Parts Sales service
The page SHALL include a Parts Sales section describing OEM and aftermarket parts supply services.

#### Scenario: Parts Sales service is visible
- **WHEN** user views the services page
- **THEN** Parts Sales service is displayed with title, description, and relevant details

### Requirement: Services page displays Regulatory Compliance service
The page SHALL include a Regulatory Compliance section describing FAA documentation, registration, and compliance assistance.

#### Scenario: Regulatory Compliance service is visible
- **WHEN** user views the services page
- **THEN** Regulatory Compliance service is displayed with title, description, and relevant details

### Requirement: Services page has contact CTA section
The page SHALL include a call-to-action section encouraging visitors to contact the business.

#### Scenario: CTA section displays with contact link
- **WHEN** user scrolls to bottom of services page
- **THEN** CTA section is visible with link to contact form or contact page

### Requirement: Navigation includes Services link
The main site navigation SHALL include a link to the Services page.

#### Scenario: Services link appears in navigation
- **WHEN** user views any page on the site
- **THEN** navigation bar includes "Services" link that navigates to `/services`

### Requirement: Services page follows site design patterns
The page SHALL use the site's standard Layout, Navigation, Section, and Footer components.

#### Scenario: Page uses consistent styling
- **WHEN** services page loads
- **THEN** page styling matches other site pages (about, aircraft-for-sale)
