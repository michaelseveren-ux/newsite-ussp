## Context

The site is built with Astro and Tailwind CSS. Currently there is:
- A single layout (`Layout.astro`) providing basic HTML structure
- A minimal homepage (`index.astro`) with only a centered title
- Standard Tailwind setup via `global.css`
- No components directory or reusable UI elements

The target design draws from Icon Aircraft, Sling Aircraft, and Tecnam Aircraft homepages which share common patterns: sticky navigation with dropdowns, hero sections with media backgrounds, modular content grids, and comprehensive footers.

## Goals / Non-Goals

**Goals:**
- Create a professional aircraft sales homepage matching industry standards
- Build reusable Astro components for navigation, hero, content sections, and footer
- Implement fully responsive design (mobile-first)
- Establish design system foundations (colors, typography, spacing)
- Enable easy content updates through component props

**Non-Goals:**
- CMS integration or dynamic content management
- E-commerce/shopping cart functionality
- User authentication or accounts
- Aircraft configurator tools
- Multi-page site structure (other pages beyond homepage)
- Animation libraries or complex motion design

## Decisions

### 1. Component Architecture

**Decision:** Create Astro components in `src/components/` organized by feature.

```
src/components/
├── Navigation.astro      # Top nav with logo, links, mobile menu
├── Hero.astro            # Full-width hero with background
├── Section.astro         # Reusable content section wrapper
├── FeatureCard.astro     # Card for aircraft/feature display
├── Footer.astro          # Site footer
└── icons/                # SVG icon components
```

**Rationale:** Astro components are zero-JS by default, keeping the site fast. Each component is self-contained with its own styles via Tailwind classes.

**Alternatives considered:**
- React/Vue components: Adds unnecessary JS bundle for static content
- Single-file approach: Less maintainable, harder to update individual sections

### 2. Styling Approach

**Decision:** Use Tailwind utility classes directly in components, with custom theme extensions in `tailwind.config.mjs`.

**Theme extensions:**
```js
colors: {
  primary: { /* brand blue/navy */ },
  accent: { /* action color for CTAs */ }
},
fontFamily: {
  heading: ['Inter', 'sans-serif'],
  body: ['Inter', 'sans-serif']
}
```

**Rationale:** Tailwind provides consistent spacing, responsive utilities, and design constraints. Custom theme ensures brand consistency.

**Alternatives considered:**
- CSS Modules: More boilerplate, less utility-first flexibility
- Styled-components: Requires JS runtime, overkill for static site

### 3. Navigation Pattern

**Decision:** Sticky top navigation with:
- Logo on left
- Primary nav links center/right
- CTA button on far right
- Mobile: hamburger menu with slide-out drawer

**Implementation:**
- Use CSS `position: sticky` with `top-0`
- Mobile menu state managed with simple `<details>` element or CSS-only toggle (no JS required)
- Transparent on hero, solid on scroll using `backdrop-blur`

**Rationale:** Matches industry standard. CSS-only approach keeps bundle minimal.

### 4. Hero Section Pattern

**Decision:** Full-viewport hero with:
- Background image (CSS `background-image` with overlay gradient)
- Centered or left-aligned content block
- Headline (h1), tagline (p), and 1-2 CTA buttons
- Optional scroll indicator

**Implementation:**
- `min-h-screen` for full viewport
- Dark gradient overlay for text contrast: `bg-gradient-to-r from-black/60`
- Responsive text sizing with Tailwind's `text-4xl md:text-6xl`

**Rationale:** Video backgrounds add complexity and loading time. Static images with CSS effects achieve similar impact with better performance.

**Alternatives considered:**
- Video background: Higher bandwidth, autoplay issues on mobile
- Carousel/slider: Adds JS complexity, lower engagement than static hero

### 5. Content Sections Structure

**Decision:** Modular section pattern with consistent spacing:
- Alternating background colors (white/gray)
- Container with max-width and horizontal padding
- Section title + optional subtitle
- Content area (grid of cards, text blocks, etc.)

**Grid system:**
- 1 column mobile
- 2 columns tablet (`md:grid-cols-2`)
- 3-4 columns desktop (`lg:grid-cols-3`)

**Rationale:** Predictable rhythm makes content easy to scan. Grid adapts naturally to content quantity.

### 6. Image Strategy

**Decision:** Use placeholder images initially, designed for easy replacement.

**Implementation:**
- Store images in `public/images/`
- Use descriptive filenames: `hero-aircraft.jpg`, `feature-1.jpg`
- Specify dimensions in components for layout stability
- Use `loading="lazy"` for below-fold images

**Rationale:** Allows development to proceed without final assets. Placeholder services or stock images work during development.

### 7. Icon Approach

**Decision:** Inline SVG icons as Astro components.

**Implementation:**
- Create icon components in `src/components/icons/`
- Common icons: menu, close, chevron, phone, email, social (facebook, instagram, youtube)

**Rationale:** No external dependency, tree-shaking not needed since we control which icons are used, full styling control.

**Alternatives considered:**
- Icon font (FontAwesome): Large bundle, less flexible styling
- astro-icon package: Additional dependency for simple needs

## Risks / Trade-offs

**[Risk] Placeholder images may not match final aspect ratios**
→ Mitigation: Use common aspect ratios (16:9 for hero, 4:3 for cards) and `object-cover` for flexibility

**[Risk] No mobile menu JS means limited animation**
→ Mitigation: CSS transitions on `max-height` or `transform` can provide smooth open/close. Accept simpler animation for zero-JS benefit.

**[Risk] Content may need frequent updates**
→ Mitigation: Component props make content changes straightforward. Future CMS integration remains possible.

**[Trade-off] Static images vs video hero**
→ Accepting: Faster load time and better mobile experience outweigh dynamic hero benefits

**[Trade-off] No dropdown menus in navigation**
→ Accepting: Single-page homepage doesn't need deep navigation. Can add later for multi-page expansion.

## Open Questions

1. **Brand colors**: What are the primary brand colors for US Sport Planes? (Currently planning navy/blue primary with accent color for CTAs)

2. **Logo asset**: Is there an existing logo file to use, or should a text-based logo be created?

3. **Hero image**: What aircraft image should be featured? (Will use placeholder initially)

4. **Content priorities**: Which content sections are most important? Suggested order:
   - Hero (brand statement)
   - Featured Aircraft
   - About/Why Choose Us
   - Services
   - Contact/CTA
   - Footer
