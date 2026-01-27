## ADDED Requirements

### Requirement: Blog index page
The system SHALL render a blog listing page at `/blog` that displays all posts.

#### Scenario: Viewing blog index
- **WHEN** a visitor navigates to `/blog`
- **THEN** they SHALL see a page with the title "Blog" and a grid of post cards

### Requirement: Post card display
Each post in the listing SHALL display as a card showing:
- Featured image as card thumbnail
- Post title
- Category badge
- Publish date (formatted as "Month Day, Year")
- Excerpt text
- Content type indicator (article icon or video play icon)

#### Scenario: Article card display
- **WHEN** a post with `contentType: 'article'` is rendered
- **THEN** the card SHALL display an article icon indicator

#### Scenario: Video card display
- **WHEN** a post with `contentType: 'video'` is rendered
- **THEN** the card SHALL display a play icon overlay on the thumbnail

### Requirement: Category filtering
The blog listing SHALL provide category filter buttons for: All, News, Stories, Videos.

#### Scenario: Default filter state
- **WHEN** a visitor lands on `/blog`
- **THEN** the "All" filter SHALL be active and all posts SHALL be visible

#### Scenario: Filtering by category
- **WHEN** a visitor clicks the "News" filter button
- **THEN** only posts with `category: 'news'` SHALL be displayed and the "News" button SHALL appear active

#### Scenario: Clearing filter
- **WHEN** a visitor clicks "All" after filtering
- **THEN** all posts SHALL be displayed again

### Requirement: Chronological ordering
Posts SHALL be displayed in reverse chronological order (newest first).

#### Scenario: Post ordering
- **WHEN** the blog listing renders
- **THEN** the first post shown SHALL be the one with the most recent `publishDate`

### Requirement: Empty state
The blog listing SHALL handle the case when no posts exist or no posts match the filter.

#### Scenario: No posts exist
- **WHEN** the posts array is empty
- **THEN** the page SHALL display a message "No posts yet. Check back soon!"

#### Scenario: No posts match filter
- **WHEN** a category filter is applied and no posts match
- **THEN** the page SHALL display a message "No posts found in this category."

### Requirement: Navigation link
The main navigation SHALL include a "Blog" link that navigates to `/blog`.

#### Scenario: Blog navigation link
- **WHEN** a visitor views any page on the site
- **THEN** the navigation SHALL include a "Blog" link between existing nav items
