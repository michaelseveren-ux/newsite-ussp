## ADDED Requirements

### Requirement: Hero section spans full viewport
The hero section SHALL span the full width of the viewport and have a minimum height of 100vh (full viewport height).

#### Scenario: Hero fills initial viewport
- **WHEN** the homepage loads
- **THEN** the hero section fills the entire visible viewport (100vw width, 100vh minimum height)

### Requirement: Hero displays background image
The hero section SHALL display a full-coverage background image of an aircraft or aviation-related scene.

#### Scenario: Background image covers hero area
- **WHEN** the hero section renders
- **THEN** a background image covers the entire hero area using object-fit cover behavior

#### Scenario: Background image has overlay for contrast
- **WHEN** the hero section renders
- **THEN** a dark gradient or semi-transparent overlay appears over the background image to ensure text readability

### Requirement: Hero displays headline and tagline
The hero section SHALL display a primary headline (h1) and supporting tagline text.

#### Scenario: Headline is prominently displayed
- **WHEN** the hero section renders
- **THEN** a headline is displayed in large, bold typography (e.g., "Your Adventure Starts Here" or company tagline)

#### Scenario: Tagline supports the headline
- **WHEN** the hero section renders
- **THEN** a tagline appears below the headline providing additional context about the business

### Requirement: Hero displays call-to-action buttons
The hero section SHALL display one or two call-to-action buttons prompting user engagement.

#### Scenario: Primary CTA button is displayed
- **WHEN** the hero section renders
- **THEN** a primary CTA button is displayed (e.g., "View Aircraft" or "Contact Us") with prominent styling

#### Scenario: Secondary CTA button is optionally displayed
- **WHEN** the hero section renders
- **THEN** an optional secondary CTA button MAY be displayed with less prominent styling (outline style)

### Requirement: Hero content is vertically centered
The hero section content (headline, tagline, CTAs) SHALL be vertically centered or positioned in the lower third of the hero area.

#### Scenario: Content positioned for visual impact
- **WHEN** the hero section renders
- **THEN** the content block is vertically centered or positioned to not obscure the main visual focus of the background image

### Requirement: Hero is responsive
The hero section SHALL adapt typography and layout for mobile, tablet, and desktop viewports.

#### Scenario: Hero text scales on mobile
- **WHEN** the viewport width is less than 768px
- **THEN** headline and tagline text sizes reduce proportionally to fit mobile screens

#### Scenario: Hero buttons stack on mobile
- **WHEN** the viewport width is less than 640px
- **THEN** CTA buttons stack vertically instead of appearing side by side
