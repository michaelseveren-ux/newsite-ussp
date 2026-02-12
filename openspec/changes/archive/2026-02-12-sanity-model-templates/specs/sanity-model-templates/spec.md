## ADDED Requirements

### Requirement: Model Template Document Type
The system SHALL provide a "Model Template" document type in Sanity Studio that allows editors to create and manage reusable aircraft model templates.

#### Scenario: Create new model template
- **WHEN** editor creates a new Model Template document
- **THEN** the document SHALL include fields for: name, description (optional), manufacturer, model, aircraft type, and all specification fields (cruise speed, max speed, range, etc.)

#### Scenario: Model template appears in studio navigation
- **WHEN** editor opens Sanity Studio
- **THEN** "Model Templates" SHALL appear in the content navigation alongside "Aircraft"

#### Scenario: Edit existing template
- **WHEN** editor opens an existing Model Template
- **THEN** editor SHALL be able to modify any field and publish changes

### Requirement: Template Selector Field
The Aircraft document type SHALL include a template selector field that allows editors to choose a model template and auto-fill specifications.

#### Scenario: Template selector displays available templates
- **WHEN** editor views the template selector dropdown on an Aircraft document
- **THEN** the dropdown SHALL list all published Model Template documents by name

#### Scenario: Empty state when no templates exist
- **WHEN** no Model Template documents exist
- **THEN** the dropdown SHALL display "No templates available" and be disabled

### Requirement: Auto-fill Behavior
When a template is selected, the system SHALL copy the template's values into the aircraft document's corresponding fields.

#### Scenario: Applying a template fills specification fields
- **WHEN** editor selects a template from the dropdown
- **THEN** the following fields SHALL be populated from the template: manufacturer, model, aircraft type, and all specs (cruise speed, max speed, stall speed, range, rate of climb, service ceiling, takeoff distance, landing distance, fuel capacity, fuel burn, wingspan, length, height, wing area, empty weight, max gross weight, useful load, engine, horsepower, propeller, avionics)

#### Scenario: Non-template fields are not affected
- **WHEN** editor applies a template
- **THEN** the following fields SHALL NOT be modified: title, slug, year, registration, serial number, price, status, featured, short description, full description, features, history, images, total time, engine time, prop time

#### Scenario: Values are copied not referenced
- **WHEN** editor applies a template and later the template is modified
- **THEN** the aircraft document SHALL retain its original copied values (not update automatically)

#### Scenario: Applied values can be customized
- **WHEN** editor applies a template
- **THEN** editor SHALL be able to manually edit any of the auto-filled fields

### Requirement: Template Selector Placement
The template selector field SHALL be positioned at the top of the Identity group for visibility.

#### Scenario: Selector appears first in Identity tab
- **WHEN** editor opens an Aircraft document and views the Identity group
- **THEN** the template selector SHALL appear as the first field before title
