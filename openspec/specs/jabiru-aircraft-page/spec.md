# Spec: Jabiru Aircraft Page

## Requirements

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

### Requirement: Page displays all three Jabiru models
The page SHALL display cards or sections for each available Jabiru model: J170-M, J430-M, and J432-M.

#### Scenario: All models are displayed
- **WHEN** the Jabiru aircraft page loads
- **THEN** the J170-M, J430-M, and J432-M models are all visible on the page

#### Scenario: Each model has identifying information
- **WHEN** a user views a model section
- **THEN** the model name is prominently displayed AND a brief description of the aircraft is visible

### Requirement: Each model displays specifications
Each aircraft model section SHALL display key specifications including performance data, dimensions, and engine information.

#### Scenario: Specifications are visible for each model
- **WHEN** a user views a model section
- **THEN** specifications are displayed including cruise speed, range, engine type, seating capacity, and useful load

#### Scenario: Specifications are formatted consistently
- **WHEN** comparing specifications across models
- **THEN** all models use the same specification categories and formatting

### Requirement: Each model displays pricing
Each aircraft model section SHALL display the current price for that model.

#### Scenario: Price is visible and formatted
- **WHEN** a user views a model section
- **THEN** the price is displayed in USD format (e.g., "$XXX,XXX")

#### Scenario: Price reflects base configuration
- **WHEN** a user views a model price
- **THEN** text indicates this is the base price AND notes that options may affect final price

### Requirement: Page displays ordering process section
The page SHALL include a section explaining how customers can order a new Jabiru aircraft.

#### Scenario: Ordering process section is visible
- **WHEN** a user scrolls to the ordering section
- **THEN** a clearly titled "How to Order" or "Ordering Process" section is visible

#### Scenario: Ordering steps are explained
- **WHEN** a user reads the ordering section
- **THEN** clear steps are provided explaining the inquiry, consultation, configuration, deposit, and delivery process

#### Scenario: Contact call-to-action is present
- **WHEN** a user views the ordering section
- **THEN** a prominent button or link to contact US Sport Planes is visible

### Requirement: Page includes call-to-action for inquiries
The page SHALL include prominent call-to-action elements encouraging users to inquire about purchasing.

#### Scenario: CTA button links to contact
- **WHEN** a user clicks a "Request Quote" or "Inquire Now" button
- **THEN** the user is navigated to the contact page or contact form

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
