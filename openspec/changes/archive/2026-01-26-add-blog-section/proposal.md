## Why

The website currently focuses on aircraft listings but lacks a content section to showcase brand presence, share industry news, and publish engaging stories or videos. A blog section will help establish authority in the aviation space, improve SEO, and give visitors reasons to return beyond browsing inventory.

## What Changes

- Add a new `/blog` section with a listing page showing all posts
- Create individual post pages at `/blog/[slug]` for articles and videos
- Support multiple content types: articles (text-based) and videos (embedded)
- Add content categorization (news, stories, videos) for filtering
- Include post metadata: title, date, author, category, featured image/thumbnail
- Add pagination or "load more" for the post listing
- Integrate blog link into the main navigation

## Capabilities

### New Capabilities
- `blog-content`: Content management for blog posts including articles and videos, with support for categories, authors, dates, and media embedding
- `blog-listing`: Blog index page with filtering by category and chronological display of all posts
- `blog-post-page`: Individual post detail pages with full content rendering, related posts, and share functionality

### Modified Capabilities
<!-- No existing specs require modification -->

## Impact

- **New pages**: `/blog/index.astro`, `/blog/[slug].astro`
- **New data**: `src/data/posts.ts` with post type definitions
- **New types**: `src/types/post.ts` for Post interface
- **New components**: PostCard, PostList, CategoryFilter, VideoEmbed
- **Modified components**: Navigation.astro (add Blog link)
- **Design consistency**: Will follow existing patterns from aircraft-for-sale section (card layouts, detail page structure, breadcrumbs)
