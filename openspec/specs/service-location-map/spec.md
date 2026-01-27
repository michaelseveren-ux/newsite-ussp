# Service Location Map

Interactive map displaying Jabiru service centers and flight schools.

## ADDED Requirements

### Requirement: Map displays all locations
The system SHALL display an interactive map showing all service centers and flight schools on a single view.

#### Scenario: Initial map load
- **WHEN** user navigates to the service map page
- **THEN** the map SHALL display with all location markers visible
- **THEN** the map SHALL be centered to show the full coverage area

#### Scenario: Map is interactive
- **WHEN** the map is displayed
- **THEN** user SHALL be able to zoom in and out
- **THEN** user SHALL be able to pan/drag the map

---

### Requirement: Locations display with type-specific markers
The system SHALL display service centers and flight schools with visually distinct markers.

#### Scenario: Service center marker
- **WHEN** a service center location is displayed
- **THEN** it SHALL show a blue marker icon

#### Scenario: Flight school marker
- **WHEN** a flight school location is displayed
- **THEN** it SHALL show a green marker icon

---

### Requirement: Location info popup on click
The system SHALL display location details when a user clicks on a marker.

#### Scenario: View location details
- **WHEN** user clicks on a location marker
- **THEN** a popup SHALL appear showing the location name
- **THEN** the popup SHALL show the location address
- **THEN** the popup SHALL show contact information if available

#### Scenario: Close popup
- **WHEN** user clicks outside the popup or on the close button
- **THEN** the popup SHALL close

---

### Requirement: Filter locations by type
The system SHALL allow users to filter displayed locations by type.

#### Scenario: Filter to service centers only
- **WHEN** user selects "Service Centers" filter
- **THEN** only service center markers SHALL be visible
- **THEN** flight school markers SHALL be hidden

#### Scenario: Filter to flight schools only
- **WHEN** user selects "Flight Schools" filter
- **THEN** only flight school markers SHALL be visible
- **THEN** service center markers SHALL be hidden

#### Scenario: Show all locations
- **WHEN** user selects "All" filter (default)
- **THEN** both service center and flight school markers SHALL be visible

---

### Requirement: Responsive map display
The system SHALL display the map appropriately on all device sizes.

#### Scenario: Desktop view
- **WHEN** viewed on desktop screen (>768px)
- **THEN** the map SHALL fill the available content area
- **THEN** filter controls SHALL be visible alongside the map

#### Scenario: Mobile view
- **WHEN** viewed on mobile screen (<=768px)
- **THEN** the map SHALL be full width
- **THEN** filter controls SHALL be accessible above or overlaid on the map

---

### Requirement: Location data structure
Each location entry SHALL contain required and optional fields.

#### Scenario: Required fields present
- **WHEN** a location is defined
- **THEN** it SHALL have an id, name, type, coordinates (lat/lng), and address

#### Scenario: Optional fields supported
- **WHEN** a location has additional contact information
- **THEN** it MAY include phone, email, website, and description fields

---

### Requirement: Map page accessible from navigation
The service map page SHALL be accessible from the site navigation.

#### Scenario: Navigation link present
- **WHEN** user views the site header/navigation
- **THEN** a link to the service map page SHALL be visible

#### Scenario: Navigate to map
- **WHEN** user clicks the service map navigation link
- **THEN** they SHALL be taken to the `/service-map` page
