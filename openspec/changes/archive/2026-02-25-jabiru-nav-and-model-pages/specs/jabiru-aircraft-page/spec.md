## MODIFIED Requirements

### Requirement: Each model section links to its dedicated model page
Each aircraft model section on the hub page SHALL include a "View Full Details" link to that model's individual page.

#### Scenario: View Full Details CTA is present per model
- **WHEN** a user views a model section on the hub page
- **THEN** a "View Full Details" button or link is visible that navigates to `/jabiru-aircraft/[slug]` for that model

### Requirement: Hub page provides navigation to supporting Jabiru pages
The hub page SHALL include visible navigation or links to the engine page and legacy models page, so users can explore the full Jabiru section from the hub.

#### Scenario: Engine page link is accessible from the hub
- **WHEN** a user is on the Jabiru hub page
- **THEN** a link or section referencing the Jabiru engine page (`/jabiru-aircraft/engine`) is visible

#### Scenario: Legacy models link is accessible from the hub
- **WHEN** a user is on the Jabiru hub page
- **THEN** a link or section referencing the legacy models page (`/jabiru-aircraft/legacy`) is visible, framed for users interested in used or previous-generation aircraft
