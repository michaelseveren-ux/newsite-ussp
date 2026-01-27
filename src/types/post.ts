// Post TypeScript interfaces
// Ready for Sanity CMS integration - types will remain the same

export type ContentType = 'article' | 'video';

export type PostCategory = 'news' | 'stories' | 'videos';

export interface PostImage {
  url: string;
  alt: string;
}

export interface Post {
  // Identification
  slug: string;
  title: string;

  // Classification
  contentType: ContentType;
  category: PostCategory;

  // Metadata
  publishDate: string; // ISO date string
  author: string;

  // Content
  excerpt: string; // max 200 chars, for listing cards
  content: string; // full article body, supports HTML
  videoUrl?: string; // required for video contentType (YouTube or Vimeo)

  // Media
  featuredImage: PostImage;
}
