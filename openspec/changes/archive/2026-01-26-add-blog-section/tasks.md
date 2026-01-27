## 1. Types and Data Structure

- [x] 1.1 Create `src/types/post.ts` with Post interface (slug, title, contentType, category, publishDate, author, excerpt, featuredImage, content, videoUrl)
- [x] 1.2 Create `src/data/posts.ts` with empty posts array and helper functions (getAllPosts, getPostBySlug, getPostsByCategory)
- [x] 1.3 Add sample posts data (2-3 articles, 1-2 videos) for development and testing

## 2. Components

- [x] 2.1 Create `PostCard.astro` component displaying thumbnail, title, category badge, date, excerpt, and content type indicator
- [x] 2.2 Create `CategoryFilter.astro` component with filter buttons (All, News, Stories, Videos)
- [x] 2.3 Create `VideoEmbed.astro` component that parses YouTube/Vimeo URLs and renders appropriate iframe

## 3. Blog Listing Page

- [x] 3.1 Create `src/pages/blog/index.astro` with page layout, title, and post grid
- [x] 3.2 Integrate CategoryFilter component with client-side filtering logic
- [x] 3.3 Add empty state handling for no posts and no matching filter results

## 4. Blog Post Detail Page

- [x] 4.1 Create `src/pages/blog/[slug].astro` with getStaticPaths and post fetching
- [x] 4.2 Add breadcrumb navigation (Home > Blog > Post Title)
- [x] 4.3 Implement article content rendering with proper typography
- [x] 4.4 Implement video embedding for video posts using VideoEmbed component
- [x] 4.5 Add post metadata display (author, date, category badge)
- [x] 4.6 Add "Back to Blog" link and share/copy URL functionality

## 5. Navigation Integration

- [x] 5.1 Update `Navigation.astro` to include "Blog" link in the main nav
