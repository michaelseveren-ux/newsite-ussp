# Spec: Contact Page

## Requirements

### Requirement: Contact page route
The site SHALL provide a dedicated Contact page at the `/contact` URL path.

#### Scenario: User navigates to Contact page
- **WHEN** user visits `/contact`
- **THEN** the Contact page is displayed
- **AND** the page uses the site's standard Layout component with Navigation and Footer

### Requirement: Contact form display
The Contact page SHALL display a contact form for visitor inquiries.

#### Scenario: Form fields are displayed
- **WHEN** user views the Contact page
- **THEN** a contact form is visible with the following fields:
  - Name (text input, required)
  - Email (email input, required)
  - Phone (tel input, optional)
  - Subject (select dropdown, required)
  - Message (textarea, required)
- **AND** a submit button is visible

#### Scenario: Subject dropdown options
- **WHEN** user clicks the Subject dropdown
- **THEN** the following options are available:
  - General Inquiry
  - Aircraft Purchase
  - Aircraft Sale
  - Flight Training
  - Service Request
  - Other

### Requirement: Contact form validation
The contact form SHALL validate required fields before submission.

#### Scenario: Empty required field validation
- **WHEN** user attempts to submit the form with an empty required field
- **THEN** the form does not submit
- **AND** the invalid field is indicated visually

#### Scenario: Invalid email format validation
- **WHEN** user enters an invalid email format
- **AND** user attempts to submit the form
- **THEN** the form does not submit
- **AND** the email field indicates the format is invalid

### Requirement: Contact form submission
The contact form SHALL submit inquiries to the team via the `/api/contact` endpoint.

#### Scenario: Successful form submission
- **WHEN** user fills all required fields with valid data
- **AND** user clicks the submit button
- **THEN** the form data is submitted to the API endpoint
- **AND** an email is sent to the team via Resend
- **AND** a success message is displayed to the user
- **AND** the form is reset or hidden

#### Scenario: Form submission loading state
- **WHEN** user clicks the submit button
- **THEN** the submit button shows a loading indicator
- **AND** the button is disabled to prevent duplicate submissions

#### Scenario: Form submission error
- **WHEN** form submission fails (network error or service error)
- **THEN** an error message is displayed to the user
- **AND** the user can retry the submission

### Requirement: Contact information display
The Contact page SHALL display contact information alongside the form.

#### Scenario: Contact info cards are displayed
- **WHEN** user views the Contact page
- **THEN** contact information is visible including:
  - Phone number (clickable tel: link)
  - Email address (clickable mailto: link)
  - Physical address

### Requirement: Page layout responsiveness
The Contact page SHALL be responsive across device sizes.

#### Scenario: Desktop layout
- **WHEN** user views the Contact page on desktop (md breakpoint and above)
- **THEN** the form and contact info are displayed in a two-column layout

#### Scenario: Mobile layout
- **WHEN** user views the Contact page on mobile (below md breakpoint)
- **THEN** the form and contact info are stacked vertically

### Requirement: Navigation link to Contact page
The site navigation SHALL link to the Contact page.

#### Scenario: Get in Touch button links to Contact page
- **WHEN** user clicks the "Get in Touch" button in the navigation
- **THEN** user is navigated to the `/contact` page

#### Scenario: Mobile nav Get in Touch button
- **WHEN** user clicks the "Get in Touch" button in the mobile navigation menu
- **THEN** user is navigated to the `/contact` page

### Requirement: Site-wide contact links update
All existing `/#contact` links throughout the site SHALL be updated to `/contact`.

#### Scenario: Footer contact link
- **WHEN** user clicks "Contact" in the footer navigation
- **THEN** user is navigated to the `/contact` page

#### Scenario: Page CTA contact links
- **WHEN** user clicks "Contact Us" or "Get in Touch" CTA buttons on any page
- **THEN** user is navigated to the `/contact` page

### Requirement: Aircraft inquiry message prefill
The Contact page SHALL pre-fill the message field when accessed with an `aircraft` query parameter.

#### Scenario: Message prefilled from aircraft parameter
- **WHEN** user navigates to `/contact?aircraft=2015+Cessna+172S+Skyhawk`
- **THEN** the message textarea is pre-filled with "I am interested in the 2015 Cessna 172S Skyhawk. Please contact me with more information."

#### Scenario: Subject auto-selected for aircraft inquiry
- **WHEN** user navigates to `/contact` with an `aircraft` query parameter
- **THEN** the Subject dropdown is automatically set to "Aircraft Purchase"

#### Scenario: No query parameter preserves default behavior
- **WHEN** user navigates to `/contact` without query parameters
- **THEN** the message textarea remains empty
- **AND** the Subject dropdown shows the default placeholder

#### Scenario: User can edit prefilled message
- **WHEN** user arrives with a prefilled message
- **THEN** the textarea is editable
- **AND** user can modify or add to the prefilled text before submitting
