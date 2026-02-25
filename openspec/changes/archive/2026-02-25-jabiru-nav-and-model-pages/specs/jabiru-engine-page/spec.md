## ADDED Requirements

### Requirement: Engine page exists at /jabiru-aircraft/engine
The site SHALL provide a dedicated page at `/jabiru-aircraft/engine` covering the Jabiru engine family in a trust-building, informational format.

#### Scenario: Engine page loads successfully
- **WHEN** a user navigates to `/jabiru-aircraft/engine`
- **THEN** the page loads with content about the Jabiru engine

### Requirement: Engine page is trust-building, not a technical reference
The engine page SHALL present the Jabiru engine in terms of reliability, simplicity, and real-world track record — not as a technical datasheet.

#### Scenario: Page tone is informational and confidence-building
- **WHEN** a user reads the engine page
- **THEN** the content communicates why Jabiru engines are trusted, without directing users to this page for technical documentation (that remains the manufacturer's responsibility)

### Requirement: Engine page references which models use which engine variants
The engine page SHALL mention the engine variants (e.g., Jabiru 2200, Jabiru 3300) and which M-Series models they power.

#### Scenario: Engine-to-model relationship is clear
- **WHEN** a user reads the engine page
- **THEN** it is clear which engine variant powers each M-Series model

### Requirement: Engine page links back to relevant model pages
The engine page SHALL include links to the individual M-Series model pages.

#### Scenario: Model links are present
- **WHEN** a user is on the engine page
- **THEN** links to each M-Series model page are accessible

### Requirement: Engine page includes a contact CTA
The engine page SHALL include a call-to-action encouraging users to get in touch.

#### Scenario: CTA is visible
- **WHEN** a user reaches the bottom of the engine page
- **THEN** a prominent CTA links to the contact page

### Requirement: Engine page has a descriptive browser title
The engine page SHALL have a browser title that identifies its content.

#### Scenario: Browser title is set
- **WHEN** a user views the engine page
- **THEN** the browser tab displays "Jabiru Engine | US Sport Planes" or equivalent
