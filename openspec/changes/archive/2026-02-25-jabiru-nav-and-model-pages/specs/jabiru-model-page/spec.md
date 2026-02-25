## ADDED Requirements

### Requirement: Individual model page exists for each M-Series Jabiru
The site SHALL provide a dedicated page for each current Jabiru M-Series model at `/jabiru-aircraft/[slug]` (e.g., `/jabiru-aircraft/j170-m`).

#### Scenario: Model page is accessible by slug
- **WHEN** a user navigates to `/jabiru-aircraft/j170-m`, `/jabiru-aircraft/j430-m`, or `/jabiru-aircraft/j432-m`
- **THEN** the page loads successfully and displays content specific to that model

#### Scenario: Invalid slug returns 404
- **WHEN** a user navigates to a slug that does not match a known model
- **THEN** the page returns a 404 response

### Requirement: Model page displays the aircraft name and tagline prominently
The model page SHALL display the aircraft model name (e.g., "Jabiru J170-M") and its tagline as the primary heading elements.

#### Scenario: Model name and tagline are visible on load
- **WHEN** a model page loads
- **THEN** the aircraft model name is displayed as the primary heading AND the model's tagline is displayed beneath it

### Requirement: Model page displays full specifications
The model page SHALL display the complete specification set for that model, including performance, dimensions, weights, and engine data.

#### Scenario: All spec categories are present
- **WHEN** a user views a model page
- **THEN** performance specs (cruise speed, max speed, range, rate of climb, fuel burn), dimension specs (wingspan, length), and weight specs (empty weight, useful load) are all visible

### Requirement: Model page displays base price and inquiry CTA
The model page SHALL display the model's base price and a prominent call-to-action to request a quote.

#### Scenario: Price and CTA are visible
- **WHEN** a user views a model page
- **THEN** the base price is displayed in USD format AND a "Request Quote" button links to the contact page with the model pre-identified

### Requirement: Model page links to the Jabiru engine page
The model page SHALL include a contextual reference to the Jabiru engine page.

#### Scenario: Engine page link is present
- **WHEN** a user views a model page
- **THEN** a link or reference to `/jabiru-aircraft/engine` is visible in context of the engine specification

### Requirement: Model page links back to the Jabiru hub
The model page SHALL provide a navigation path back to the Jabiru aircraft hub page.

#### Scenario: Hub link is accessible
- **WHEN** a user is on a model page
- **THEN** a link to `/jabiru-aircraft/` is accessible (breadcrumb or nav element)

### Requirement: Model page has a unique, shareable browser title
The model page SHALL have a browser title that identifies the specific model.

#### Scenario: Browser title includes model name
- **WHEN** a user or salesperson shares the page URL
- **THEN** the browser tab and link preview display a title in the format "Jabiru [Model] | US Sport Planes"
