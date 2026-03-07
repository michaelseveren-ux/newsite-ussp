## ADDED Requirements

### Requirement: Logos always display at full color
Brand partner logos SHALL render at full color and full opacity by default, with no grayscale or opacity reduction applied.

#### Scenario: Logo default state
- **WHEN** a visitor loads the page
- **THEN** all brand partner logos display at full color with no grayscale filter or reduced opacity

### Requirement: Hover interaction conveys lift
Brand partner logos SHALL respond to hover with a subtle upward translate and drop shadow that follows the logo shape.

#### Scenario: Logo hover
- **WHEN** a user hovers over a brand partner logo
- **THEN** the logo shifts up slightly and a drop shadow appears conforming to the logo's silhouette

#### Scenario: Hover transition is smooth
- **WHEN** a user hovers onto or off of a logo
- **THEN** the translate and shadow animate smoothly via CSS transition

### Requirement: Logo assets use transparent backgrounds
Brand partner logo PNG files SHALL have transparent backgrounds so that hover drop shadows follow the logo shape rather than the image bounding box.

#### Scenario: Aerotrek logo transparency
- **WHEN** the Aerotrek logo is rendered with a drop shadow
- **THEN** the shadow follows the circular badge outline, not a rectangle

### Requirement: Jabiru logo appears in center position
The Jabiru logo SHALL be the center item in the brand partners logo strip.

#### Scenario: Logo strip order
- **WHEN** the brand partners section is rendered
- **THEN** the logo order is: Aerotrek, Jabiru, Tecnam — with Jabiru in the middle
