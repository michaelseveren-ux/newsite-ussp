### Requirement: Site uses Oswald for headings
The site SHALL use Oswald font family for all heading elements (h1-h6) via the `font-heading` Tailwind utility.

#### Scenario: Heading font renders correctly
- **WHEN** a page loads with heading elements
- **THEN** headings display in Oswald font family

### Requirement: Site uses Inter for body text
The site SHALL use Inter font family for body text via the `font-body` Tailwind utility.

#### Scenario: Body font renders correctly
- **WHEN** a page loads with body text
- **THEN** body text displays in Inter font family

### Requirement: Fonts load from Google Fonts
The site SHALL load Oswald and Inter fonts from Google Fonts CDN with display=swap for progressive loading.

#### Scenario: Fonts load without blocking render
- **WHEN** a page loads
- **THEN** content displays immediately with fallback fonts, then swaps to custom fonts when loaded
