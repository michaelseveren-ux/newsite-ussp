## Context

US Sport Planes currently has a minimal "Why Choose Us" section on the homepage accessible via `/#about`. The site uses Astro with Tailwind CSS and follows a component-based architecture with reusable Section components. Other pages (blog, aircraft-for-sale, service-map) follow a consistent pattern using the Layout component and Navigation.

The About page needs to showcase company story, values, team, and history—similar to competitor sites like Van Bortel Aircraft and Sling Aircraft.

## Goals / Non-Goals

**Goals:**
- Create a dedicated `/about` route with comprehensive company information
- Maintain visual consistency with existing site design (Tailwind, Section components)
- Build reusable components that could be used elsewhere (e.g., team cards)
- Update navigation to point to the new dedicated page

**Non-Goals:**
- CMS integration for content management (content will be static/hardcoded initially)
- Team member detail pages (just cards on the About page)
- Interactive timeline or animations (keep it simple, consistent with site style)
- Changing the homepage "Why Choose Us" section beyond adding a link

## Decisions

### 1. Page Structure: Single page with multiple sections
**Decision**: Use a single `about.astro` page with the existing Section component for each content area.

**Alternatives considered**:
- Multiple sub-pages (`/about/team`, `/about/history`) - rejected as overcomplicated for current content needs
- Tabbed interface - rejected as inconsistent with site patterns

**Rationale**: Matches existing page patterns (index, blog, aircraft-for-sale). Simpler navigation, better SEO with all content on one URL.

### 2. Component Approach: Extend existing patterns
**Decision**: Use existing Section component. Create minimal new components only if needed (e.g., TeamMemberCard if team section is added).

**Alternatives considered**:
- Create entirely new About-specific layout - rejected as unnecessary duplication
- Inline all HTML without components - rejected as less maintainable

**Rationale**: Consistency with codebase. Section component already handles backgrounds, titles, spacing.

### 3. Content Data: Co-located in page file
**Decision**: Define content arrays (team members, values, history items) in the page frontmatter, similar to how `index.astro` defines services and values.

**Alternatives considered**:
- Separate data file in `src/data/about.ts` - could do this if content grows
- External CMS - out of scope per non-goals

**Rationale**: Follows existing pattern in `index.astro`. Easy to find and update.

### 4. Navigation Update: Direct link change
**Decision**: Change `Navigation.astro` link from `/#about` to `/about`.

**Rationale**: Simple, one-line change. No breaking changes as the old anchor still exists on homepage.

## Risks / Trade-offs

**[Content placeholder text]** → Will need real company content (story, team info, photos). Initial implementation can use placeholder text that clearly needs replacement.

**[Image assets]** → About page likely needs hero image and team photos. May need to source these. Can use placeholder images initially.

**[SEO duplication]** → Homepage still has "Why Choose Us" content. → Keep homepage section brief as a teaser, link to full About page for details. Not a significant SEO concern.

## File Changes Summary

| File | Change Type | Description |
|------|-------------|-------------|
| `src/pages/about.astro` | New | Main About page |
| `src/components/Navigation.astro` | Modify | Update About link href |
| `src/components/TeamMemberCard.astro` | New (optional) | If team section needed |
