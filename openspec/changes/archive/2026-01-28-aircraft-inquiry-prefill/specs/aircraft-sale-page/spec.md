# Spec: Aircraft Sale Page (Delta)

## ADDED Requirements

### Requirement: Inquiry button passes aircraft context
The "Inquire About This Aircraft" button on individual aircraft pages SHALL pass the aircraft title to the contact page via URL query parameter.

#### Scenario: Inquiry button links to contact with aircraft param
- **WHEN** user views an aircraft detail page for "2015 Cessna 172S Skyhawk"
- **AND** user clicks "Inquire About This Aircraft" button
- **THEN** user is navigated to `/contact?aircraft=2015+Cessna+172S+Skyhawk`

#### Scenario: Aircraft title is URL-encoded
- **WHEN** aircraft title contains special characters or spaces
- **THEN** the title is properly URL-encoded in the query parameter
