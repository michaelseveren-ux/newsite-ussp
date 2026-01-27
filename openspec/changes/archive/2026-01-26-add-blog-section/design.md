## Context

The site is an Astro-based aircraft sales website using Tailwind CSS. It currently has an aircraft listing section (`/aircraft-for-sale`) with a proven pattern: TypeScript data files, list page with cards, and detail pages with dynamic routing (`[slug].astro`). The blog section will follow this same architecture for consistency and maintainability.

Content is currently managed via TypeScript files (`src/data/aircraft.ts`) with plans to migrate to Sanity CMS later. The blog will use the same approach—TypeScript data files now, CMS-ready structure for future migration.

## Goals / Non-Goals

**Goals:**
- Provide a content section for articles and embedded videos
- Follow existing site patterns (data files, components, page structure)
- Support categorization and chronological browsing
- Enable easy content creation via TypeScript data files
- Maintain design consistency with aircraft section

**Non-Goals:**
- CMS integration (future enhancement, not this change)
- User comments or social features
- Full-text search within blog posts
- RSS feed generation
- Author profile pages

## Decisions

### 1. Data Structure: Single posts.ts file
**Decision**: Store all posts in `src/data/posts.ts` with a `Post` type definition.

**Rationale**: Matches the existing aircraft data pattern. Simple to maintain for small-to-medium content volume. Easy to migrate to CMS later since the structure mirrors typical CMS schemas.

**Alternative considered**: Markdown files with frontmatter. Rejected because the aircraft section uses TypeScript data files—consistency is more valuable than the marginal authoring convenience of Markdown.

### 2. Content Types: Unified Post model with `contentType` field
**Decision**: Single `Post` interface with a `contentType: 'article' | 'video'` field rather than separate Article and Video types.

**Rationale**: Simplifies querying and rendering. Both share most fields (title, date, category, slug). Videos just have an additional `videoUrl` field for embedding.

### 3. URL Structure: `/blog/[slug]`
**Decision**: Use `/blog` as the base path with individual posts at `/blog/[slug]`.

**Rationale**: Clean, SEO-friendly URLs. "Blog" is universally understood. Matches the `/aircraft-for-sale/[slug]` pattern.

**Alternative considered**: `/news` or `/media`. Rejected because "blog" better encompasses articles, news, and videos together.

### 4. Video Embedding: YouTube/Vimeo URL parsing
**Decision**: Store video URLs as strings, parse and render appropriate embed iframe in the component.

**Rationale**: Simple data entry (just paste the URL). Component handles the embed logic. Supports YouTube and Vimeo initially.

### 5. Category Filtering: Client-side filtering
**Decision**: Filter posts by category on the client using simple JavaScript/Astro.

**Rationale**: With expected content volume (<100 posts), client-side filtering is performant and simpler than building separate category pages. Can revisit if content scales significantly.

## Risks / Trade-offs

**[Content volume scaling]** → If posts exceed ~100 items, consider pagination or static category pages. Current design handles this volume well.

**[Video embed security]** → Only allow YouTube and Vimeo URLs to prevent XSS from arbitrary iframes. Component will validate and sanitize URLs.

**[No preview for editors]** → TypeScript data files require dev server to preview changes. Acceptable for now; CMS migration will solve this.

**[SEO for videos]** → Video posts may have less text content for search indexing. Mitigate by requiring descriptions and transcripts for video posts.
