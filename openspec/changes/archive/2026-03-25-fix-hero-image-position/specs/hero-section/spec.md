## MODIFIED Requirements

### Requirement: Hero section spans full viewport
The hero section SHALL span the full width of the viewport, have a minimum height of 100vh (full viewport height), and a maximum height of 900px to prevent unconstrained growth on large monitors.

#### Scenario: Hero fills initial viewport
- **WHEN** the homepage loads on a viewport shorter than 900px
- **THEN** the hero section fills the entire visible viewport (100vw width, 100vh minimum height)

#### Scenario: Hero is capped on large viewports
- **WHEN** the homepage loads on a viewport taller than 900px
- **THEN** the hero section height does not exceed 900px, keeping the background image subject within the natural focal zone
