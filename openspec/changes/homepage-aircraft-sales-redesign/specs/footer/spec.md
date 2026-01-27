## ADDED Requirements

### Requirement: Footer displays at bottom of page
The footer component SHALL render at the bottom of the page with a dark background contrasting with content sections.

#### Scenario: Footer renders after all content sections
- **WHEN** the homepage renders
- **THEN** the footer appears at the bottom of the page after all content sections

#### Scenario: Footer has dark background
- **WHEN** the footer renders
- **THEN** it has a dark background color (e.g., navy, dark gray, or black) with light text

### Requirement: Footer displays site navigation links
The footer SHALL display navigation links to main sections of the site.

#### Scenario: Footer navigation links displayed
- **WHEN** the footer renders
- **THEN** links to Aircraft, About, Services, and Contact sections are displayed

### Requirement: Footer displays contact information
The footer SHALL display business contact information including phone number, email address, and physical location.

#### Scenario: Contact details visible in footer
- **WHEN** the footer renders
- **THEN** phone number, email address, and business location are displayed

### Requirement: Footer displays social media links
The footer SHALL display links to social media profiles with recognizable icons.

#### Scenario: Social media icons displayed
- **WHEN** the footer renders
- **THEN** social media icons (Facebook, Instagram, YouTube) are displayed as clickable links

#### Scenario: Social links open in new tab
- **WHEN** a user clicks a social media icon
- **THEN** the social media profile opens in a new browser tab

### Requirement: Footer displays copyright notice
The footer SHALL display a copyright notice with the current year and company name.

#### Scenario: Copyright notice displayed
- **WHEN** the footer renders
- **THEN** a copyright notice is displayed (e.g., "© 2025 US Sport Planes. All rights reserved.")

### Requirement: Footer is responsive
The footer layout SHALL adapt for mobile, tablet, and desktop viewports.

#### Scenario: Footer columns stack on mobile
- **WHEN** the viewport width is less than 768px
- **THEN** footer content columns stack vertically instead of appearing side by side

#### Scenario: Footer content remains readable on all devices
- **WHEN** the footer renders on any viewport size
- **THEN** all text and links remain readable with appropriate sizing and spacing
