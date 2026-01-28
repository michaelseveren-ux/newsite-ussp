# Spec: Contact Page (Delta)

## ADDED Requirements

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
