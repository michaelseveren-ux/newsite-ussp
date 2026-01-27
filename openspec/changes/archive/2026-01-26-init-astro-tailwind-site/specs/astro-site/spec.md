# Spec: Astro Site

## ADDED Requirements

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
