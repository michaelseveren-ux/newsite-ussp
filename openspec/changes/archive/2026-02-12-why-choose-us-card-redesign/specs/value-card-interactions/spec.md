# Value Card Interactions

Hover effects and visual styling for the "Why Choose Us" value proposition cards on the homepage.

## ADDED Requirements

### Requirement: Cards have visual contrast from section background
The "Why Choose Us" section SHALL use the `paper` background color to provide contrast against the white value cards.

#### Scenario: Section background is paper color
- **WHEN** viewing the "Why Choose Us" section on the homepage
- **THEN** the section background SHALL be the paper color (#F5F2EB)

### Requirement: Cards scale on hover
Each value card SHALL scale up to 105% of its original size when hovered.

#### Scenario: Card scales on mouse hover
- **WHEN** user hovers over a value card
- **THEN** the card SHALL scale to 1.05x its original size

#### Scenario: Card returns to normal on hover exit
- **WHEN** user moves cursor away from a hovered value card
- **THEN** the card SHALL return to 1.0x scale

### Requirement: Cards elevate shadow on hover
Each value card SHALL display an elevated shadow effect when hovered to create a "lift" appearance.

#### Scenario: Shadow deepens on hover
- **WHEN** user hovers over a value card
- **THEN** the card shadow SHALL change from `shadow-md` to `shadow-xl`

### Requirement: Card transitions are smooth
All hover effects SHALL animate smoothly with consistent timing.

#### Scenario: Hover transition timing
- **WHEN** user hovers or un-hovers a value card
- **THEN** all visual changes (scale, shadow, border) SHALL animate over 200ms with ease-out timing
