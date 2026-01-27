# Spec: About Page

## Requirements

### Requirement: About page route
The site SHALL provide a dedicated About page at the `/about` URL path.

#### Scenario: User navigates to About page
- **WHEN** user visits `/about`
- **THEN** the About page is displayed with company information
- **AND** the page uses the site's standard Layout component

### Requirement: About page hero section
The About page SHALL display a hero section at the top of the page.

#### Scenario: Hero section displays
- **WHEN** user views the About page
- **THEN** a hero section is visible with a headline about the company
- **AND** the hero has a background image or color consistent with site branding

### Requirement: Company story section
The About page SHALL include a section describing the company's story and history.

#### Scenario: Story section content
- **WHEN** user views the company story section
- **THEN** narrative text describing the company's founding and journey is displayed
- **AND** the section has a clear heading identifying it as the company story

### Requirement: Mission and values section
The About page SHALL display the company's mission statement and core values.

#### Scenario: Values are displayed
- **WHEN** user views the mission and values section
- **THEN** the company mission statement is visible
- **AND** core values are displayed in a visually distinct format (cards or list)

### Requirement: Team section
The About page SHALL include a section introducing key team members.

#### Scenario: Team members displayed
- **WHEN** user views the team section
- **THEN** team member cards are displayed with name, role, and optional photo
- **AND** each team member has a brief description or bio

### Requirement: Page sections use consistent styling
All About page sections SHALL follow the site's established visual patterns.

#### Scenario: Section styling consistency
- **WHEN** the About page renders
- **THEN** sections use the existing Section component or equivalent styling
- **AND** alternating background colors (white/gray) are applied for visual separation
- **AND** typography matches site-wide styles

### Requirement: Responsive layout
The About page SHALL be fully responsive across device sizes.

#### Scenario: Mobile responsiveness
- **WHEN** user views the About page on a mobile device
- **THEN** all content is readable without horizontal scrolling
- **AND** team member cards stack vertically on small screens
- **AND** navigation remains functional
