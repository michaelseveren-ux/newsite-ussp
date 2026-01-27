## Context

This is a static Astro site deployed to Vercel (`.vercel` folder present). The current contact experience uses `#contact` anchor links to scroll to contact sections on various pages. These sections display contact info (phone, email, address) with mailto links but have no form for lead capture.

The site uses:
- Astro with TypeScript
- Tailwind CSS for styling
- Existing components: Layout, Section, Navigation, Footer, Icon components
- No existing form patterns in the codebase

## Goals / Non-Goals

**Goals:**
- Create a dedicated `/contact` page with a functional inquiry form
- Capture visitor inquiries (name, email, message) and route them to the team
- Maintain visual consistency with existing pages
- Provide clear feedback on form submission (success/error states)

**Non-Goals:**
- CRM integration or lead tracking beyond email delivery
- CAPTCHA or advanced bot protection (can be added later if spam becomes an issue)
- Multi-step forms or complex validation beyond required fields
- Storing submissions in a database

## Decisions

### 1. Form Submission Service: Resend via Vercel API Route

**Decision**: Use [Resend](https://resend.com) with a custom Vercel serverless API route.

**Rationale**:
- Full control over form handling and email content
- No third-party form service dependency
- Generous free tier (3,000 emails/month)
- Modern, developer-friendly API
- Keeps all infrastructure within Vercel

**Implementation**:
- API route at `/api/contact` handles form POST requests
- Resend sends formatted email to the team
- Environment variables: `RESEND_API_KEY`, `CONTACT_EMAIL`

**Alternatives considered**:
- **Formspree**: Simpler but third-party dependency, limited free tier (50/month)
- **SendGrid**: Established but more complex setup
- **Nodemailer + SMTP**: Requires managing SMTP credentials

### 2. Form Fields

**Decision**: Collect minimal required information:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Name | text | Yes | Full name |
| Email | email | Yes | For reply |
| Phone | tel | No | Optional callback number |
| Subject | select | Yes | Inquiry type dropdown |
| Message | textarea | Yes | Their question/request |

**Subject options**:
- General Inquiry
- Aircraft Purchase
- Aircraft Sale
- Flight Training
- Service Request
- Other

**Rationale**: Keeps form short (higher completion rate) while capturing enough context for the team to respond effectively.

### 3. Page Layout

**Decision**: Two-column layout on desktop, stacked on mobile:
- Left: Contact form
- Right: Contact information cards (phone, email, address) + business hours

**Rationale**: Matches the visual pattern of other pages (services, about) and provides multiple contact options for visitors who prefer phone/email.

### 4. Form Validation & Feedback

**Decision**:
- Client-side HTML5 validation (required, email format)
- JavaScript-enhanced submission with loading state
- Success: Show thank-you message, optionally redirect
- Error: Show inline error message, allow retry

**Rationale**: HTML5 validation covers basics without JS complexity. Progressive enhancement keeps form functional if JS fails.

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Resend free tier limit (3,000/mo) | Monitor usage; upgrade to paid tier if needed |
| Spam submissions | Honeypot field implemented; add CAPTCHA later if needed |
| Resend service outage | Form shows error message; users can use direct email/phone |
| Breaking existing `#contact` anchor links | All references updated site-wide to `/contact` |

## Open Questions

1. **Resend API key**: Need to create Resend account and add `RESEND_API_KEY` to Vercel environment variables
2. **Sender domain**: For production, verify domain with Resend to send from `@ussportplanes.com` (otherwise use Resend's default sender)
3. **Email recipients**: Set `CONTACT_EMAIL` env var (defaults to `info@ussportplanes.com`)
