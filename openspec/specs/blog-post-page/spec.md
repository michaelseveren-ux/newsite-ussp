## ADDED Requirements

### Requirement: Individual post page
The system SHALL render individual post pages at `/blog/[slug]` using Astro dynamic routing.

#### Scenario: Viewing a post
- **WHEN** a visitor navigates to `/blog/my-post-slug`
- **THEN** they SHALL see the full post content for the post with that slug

#### Scenario: Invalid slug redirect
- **WHEN** a visitor navigates to `/blog/nonexistent-slug`
- **THEN** they SHALL be redirected to `/blog`

### Requirement: Post page layout
The post page SHALL display:
- Breadcrumb navigation (Home > Blog > Post Title)
- Featured image (full width or hero style)
- Post title as h1
- Post metadata: author name, publish date, category badge
- Full post content

#### Scenario: Breadcrumb navigation
- **WHEN** viewing a post page
- **THEN** breadcrumbs SHALL show "Home > Blog > [Post Title]" with Home and Blog as clickable links

### Requirement: Article content rendering
For article posts, the page SHALL render the `content` field as HTML.

#### Scenario: Article rendering
- **WHEN** viewing a post with `contentType: 'article'`
- **THEN** the page SHALL display the `content` field rendered as formatted HTML with proper typography

### Requirement: Video content rendering
For video posts, the page SHALL embed the video player above or instead of text content.

#### Scenario: YouTube video embedding
- **WHEN** viewing a post with `contentType: 'video'` and a YouTube `videoUrl`
- **THEN** the page SHALL display an embedded YouTube player with the video

#### Scenario: Vimeo video embedding
- **WHEN** viewing a post with `contentType: 'video'` and a Vimeo `videoUrl`
- **THEN** the page SHALL display an embedded Vimeo player with the video

#### Scenario: Video with supplementary content
- **WHEN** a video post also has text in the `content` field
- **THEN** the text SHALL be displayed below the video player

### Requirement: Video URL validation
The system SHALL only embed videos from allowed domains (youtube.com, youtu.be, vimeo.com).

#### Scenario: Valid video URL
- **WHEN** a post has a `videoUrl` from youtube.com
- **THEN** the video SHALL be embedded

#### Scenario: Invalid video URL
- **WHEN** a post has a `videoUrl` from an unrecognized domain
- **THEN** the video SHALL NOT be embedded and a fallback link SHALL be shown

### Requirement: Back to blog link
The post page SHALL include a link to return to the blog listing.

#### Scenario: Back navigation
- **WHEN** viewing any post page
- **THEN** there SHALL be a "Back to Blog" link that navigates to `/blog`

### Requirement: Share functionality
The post page SHALL include a way to copy the post URL for sharing.

#### Scenario: Copy link
- **WHEN** a visitor clicks the share/copy link button
- **THEN** the current page URL SHALL be copied to clipboard and a confirmation message SHALL appear
