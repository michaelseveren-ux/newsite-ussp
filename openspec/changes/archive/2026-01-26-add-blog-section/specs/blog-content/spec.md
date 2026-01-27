## ADDED Requirements

### Requirement: Post data structure
The system SHALL define a `Post` interface in `src/types/post.ts` with the following fields:
- `slug`: unique URL-friendly identifier (string)
- `title`: post title (string)
- `contentType`: either 'article' or 'video'
- `category`: either 'news', 'stories', or 'videos'
- `publishDate`: ISO date string
- `author`: author name (string)
- `excerpt`: short description for listing cards (string, max 200 chars)
- `featuredImage`: object with `url` and `alt` properties
- `content`: full article body (string, supports HTML)
- `videoUrl`: optional, required for video content type (YouTube or Vimeo URL)

#### Scenario: Article post structure
- **WHEN** a post has `contentType: 'article'`
- **THEN** the `content` field SHALL contain the full article text and `videoUrl` MAY be omitted

#### Scenario: Video post structure
- **WHEN** a post has `contentType: 'video'`
- **THEN** the `videoUrl` field SHALL contain a valid YouTube or Vimeo URL and `content` MAY contain supplementary text

### Requirement: Posts data file
The system SHALL store all posts in `src/data/posts.ts` as an array of `Post` objects.

#### Scenario: Accessing posts
- **WHEN** a page imports from `src/data/posts.ts`
- **THEN** it SHALL receive an array of all posts sorted by `publishDate` descending

### Requirement: Post helper functions
The system SHALL export helper functions from `src/data/posts.ts`:
- `getAllPosts()`: returns all posts sorted by date descending
- `getPostBySlug(slug)`: returns a single post or undefined
- `getPostsByCategory(category)`: returns posts filtered by category

#### Scenario: Get all posts
- **WHEN** `getAllPosts()` is called
- **THEN** it SHALL return all posts sorted by `publishDate` descending (newest first)

#### Scenario: Get post by slug
- **WHEN** `getPostBySlug('my-post')` is called with a valid slug
- **THEN** it SHALL return the matching post object

#### Scenario: Get post by invalid slug
- **WHEN** `getPostBySlug('nonexistent')` is called with an invalid slug
- **THEN** it SHALL return `undefined`

#### Scenario: Get posts by category
- **WHEN** `getPostsByCategory('news')` is called
- **THEN** it SHALL return only posts where `category` equals 'news', sorted by date descending
