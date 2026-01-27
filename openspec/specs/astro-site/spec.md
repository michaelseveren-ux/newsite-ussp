# Spec: Astro Site

## Requirements

### Requirement: Development Server

The site must run a local development server for rapid iteration.

#### Scenario: Start development server

- **WHEN** developer runs `npm run dev`
- **THEN** Astro dev server starts on localhost:4321
- **AND** hot module reloading is active

### Requirement: Production Build

The site must build optimized static assets for deployment.

#### Scenario: Build for production

- **WHEN** developer runs `npm run build`
- **THEN** optimized static files are generated in `dist/`
- **AND** build is configured for Vercel deployment

### Requirement: Base Layout

All pages must share a consistent HTML structure.

#### Scenario: Page uses layout

- **WHEN** a page component uses the Layout component
- **THEN** the page receives proper HTML document structure
- **AND** Tailwind styles are applied
- **AND** meta tags are configurable per-page

### Requirement: Tailwind Integration

Utility classes must be available throughout the site.

#### Scenario: Use Tailwind classes

- **WHEN** a component uses Tailwind utility classes
- **THEN** the corresponding CSS is included in the build
- **AND** unused classes are purged in production

### Requirement: Navigation Links

The navigation component SHALL provide links to all main site sections.

#### Scenario: About link navigates to About page

- **WHEN** user clicks the "About" link in the navigation
- **THEN** user is navigated to the `/about` page
- **AND** the About page content is displayed

#### Scenario: Navigation displays on all pages

- **WHEN** user is on any page including the About page
- **THEN** the navigation bar is visible with all links functional
