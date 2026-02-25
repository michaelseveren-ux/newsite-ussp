## ADDED Requirements

### Requirement: Legacy models page exists at /jabiru-aircraft/legacy
The site SHALL provide a dedicated page at `/jabiru-aircraft/legacy` covering discontinued Jabiru aircraft from the 100 and 200 series.

#### Scenario: Legacy page loads successfully
- **WHEN** a user navigates to `/jabiru-aircraft/legacy`
- **THEN** the page loads with content about Jabiru's legacy model lineup

### Requirement: Legacy page displays both the 100 Series and 200 Series
The legacy page SHALL display clearly labeled sections for the Jabiru 100 Series and 200 Series, each listing the individual model names within that series.

#### Scenario: Both series sections are present
- **WHEN** a user views the legacy page
- **THEN** a 100 Series section and a 200 Series section are both visible with distinct headings

#### Scenario: Individual model names are listed within each series
- **WHEN** a user views a series section
- **THEN** the individual model designations within that series are named and described briefly

### Requirement: Legacy page includes a used inventory pathway
The legacy page SHALL include a prominent link or CTA directing users to the Aircraft Inventory page to find used examples of legacy models.

#### Scenario: Used inventory CTA is visible
- **WHEN** a user views the legacy page
- **THEN** a call-to-action linking to `/aircraft-for-sale/` is prominently displayed, framed around finding used legacy Jabiru aircraft

#### Scenario: Used inventory link appears near each series section
- **WHEN** a user views a series section
- **THEN** a "Browse Used Inventory" link or equivalent is accessible without scrolling far from the model information

### Requirement: Legacy page is optimized to be findable by model name
The legacy page SHALL include each individual model name as readable text (not hidden in images or scripts) so that search engines can index it.

#### Scenario: Model names appear as text content
- **WHEN** a search engine crawls the legacy page
- **THEN** individual model names from both series appear as indexable text on the page

### Requirement: Legacy page links back to the Jabiru hub
The legacy page SHALL provide a navigation path back to the Jabiru hub page for users who want to explore current models.

#### Scenario: Hub link is accessible
- **WHEN** a user is on the legacy page
- **THEN** a link to `/jabiru-aircraft/` is accessible directing them to view current M-Series models

### Requirement: Legacy page has a descriptive browser title
The legacy page SHALL have a browser title that identifies its content.

#### Scenario: Browser title is set
- **WHEN** a user views the legacy page
- **THEN** the browser tab displays "Legacy Jabiru Models | US Sport Planes" or equivalent
