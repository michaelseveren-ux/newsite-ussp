## Context

Currently, the aircraft detail page (`/aircraft-for-sale/[slug]`) has an "Inquire About This Aircraft" button that links directly to `/contact` with no context. The contact page has a message textarea that starts empty. Users must manually describe which aircraft they're inquiring about.

The contact form already uses client-side JavaScript to handle form submission via the Resend API. Adding URL parameter parsing fits naturally into the existing client-side pattern.

## Goals / Non-Goals

**Goals:**
- Pre-fill the contact form message when coming from an aircraft listing
- Provide clear context about which aircraft the user is interested in
- Maintain normal contact form behavior when accessed directly

**Non-Goals:**
- Pre-filling other form fields (name, email, phone) - these should always come from the user
- Persisting the aircraft context if user navigates away and returns
- Adding aircraft selection dropdown to contact form (out of scope)

## Decisions

### 1. Query Parameter Structure

**Decision**: Use a single `aircraft` query parameter with the full aircraft title.

**Format**: `/contact?aircraft=2015+Cessna+172S+Skyhawk`

**Rationale**:
- Simple to construct and parse
- Human-readable in the URL
- The title already contains year, manufacturer, and model
- Alternative considered: Multiple params (`year`, `make`, `model`) - rejected as overly complex for this use case

### 2. Message Template Format

**Decision**: Use a friendly, complete sentence as the pre-filled message.

**Template**: `I am interested in the {aircraft title}. Please contact me with more information.`

**Example**: `I am interested in the 2015 Cessna 172S Skyhawk. Please contact me with more information.`

**Rationale**:
- Professional tone that staff can immediately understand
- Leaves room for users to add their own questions
- Alternative considered: Just the aircraft name with no context - rejected as less clear for recipients

### 3. Implementation Approach

**Decision**: Parse URL params in the existing `<script>` block on the contact page, populate the textarea on DOMContentLoaded.

**Rationale**:
- No new dependencies required
- Uses standard `URLSearchParams` API (broad browser support)
- Fits existing client-side JS pattern on the page
- Alternative considered: Server-side rendering with Astro - rejected as unnecessary complexity for simple prefill

## Risks / Trade-offs

**[Risk] URL encoding issues with special characters** → Use `encodeURIComponent()` when building the URL and let `URLSearchParams` handle decoding automatically.

**[Risk] Very long aircraft titles could make ugly URLs** → Acceptable trade-off; titles are typically under 50 characters. Could truncate if needed in future.

**[Risk] User might not notice pre-filled text** → The textarea will be visibly filled; users naturally review before submitting. No mitigation needed.
