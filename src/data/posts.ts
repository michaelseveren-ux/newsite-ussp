// Blog posts data
// This will be replaced by Sanity CMS queries later

import type { Post, PostCategory } from '../types/post';

export const posts: Post[] = [
  {
    slug: 'sling-aircraft-showcase-2024',
    title: 'US Sport Planes Featured at Sling Aircraft Showcase 2024',
    contentType: 'article',
    category: 'news',
    publishDate: '2024-03-15',
    author: 'US Sport Planes Team',
    excerpt:
      'We had an incredible time at the Sling Aircraft Showcase, meeting fellow aviation enthusiasts and showcasing our latest inventory.',
    content: `<p>The annual Sling Aircraft Showcase brought together pilots, builders, and aviation enthusiasts from across the country, and US Sport Planes was proud to be part of the action.</p>

<p>Our team had the opportunity to display several aircraft from our current inventory, including the stunning 2023 Sling TSi that drew crowds throughout the weekend. Visitors were impressed by the craftsmanship and modern avionics packages available in today's light sport aircraft.</p>

<p>We connected with dozens of prospective buyers and current owners, sharing insights about maintenance, performance, and the joy of flying these remarkable machines. Events like this remind us why we're passionate about connecting people with their dream aircraft.</p>

<p>Thank you to everyone who stopped by our booth. If you missed us at the show, we'd love to hear from you – reach out anytime to discuss your aviation goals.</p>`,
    featuredImage: {
      url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Aircraft+Showcase',
      alt: 'US Sport Planes booth at Sling Aircraft Showcase 2024',
    },
  },
  {
    slug: 'choosing-your-first-light-sport-aircraft',
    title: "A Beginner's Guide to Choosing Your First Light Sport Aircraft",
    contentType: 'article',
    category: 'stories',
    publishDate: '2024-02-28',
    author: 'US Sport Planes Team',
    excerpt:
      "Thinking about buying your first LSA? Here's what you need to know about finding the perfect aircraft for your flying style.",
    content: `<p>Purchasing your first light sport aircraft is an exciting milestone. With so many options on the market, it can feel overwhelming to know where to start. Here's our guide to help you make an informed decision.</p>

<h3>Define Your Mission</h3>
<p>Before browsing listings, ask yourself: What will I primarily use this aircraft for? Cross-country trips require different capabilities than local flying. Consider range, speed, and passenger capacity based on your typical flights.</p>

<h3>New vs. Pre-Owned</h3>
<p>New aircraft come with warranties and the latest technology, but quality pre-owned aircraft can offer exceptional value. A well-maintained used LSA with complete logbooks can be an excellent choice for first-time buyers.</p>

<h3>Get a Pre-Buy Inspection</h3>
<p>Never skip the pre-buy inspection. An experienced A&P mechanic familiar with your aircraft type can identify potential issues and give you peace of mind about your investment.</p>

<h3>Factor in Operating Costs</h3>
<p>Beyond the purchase price, consider fuel consumption, insurance, hangar fees, and maintenance. Some aircraft types have lower operating costs than others, which adds up over years of ownership.</p>

<p>Ready to start your search? Browse our current inventory or contact us to discuss what you're looking for.</p>`,
    featuredImage: {
      url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=First+LSA+Guide',
      alt: 'Light sport aircraft on a sunny runway',
    },
  },
  {
    slug: 'flight-training-tips-crosswind-landings',
    title: 'Mastering Crosswind Landings: Tips from Our Pilots',
    contentType: 'video',
    category: 'videos',
    publishDate: '2024-02-10',
    author: 'US Sport Planes Team',
    excerpt:
      'Watch our experienced pilots share their techniques for handling crosswind landings in light sport aircraft.',
    content: `<p>Crosswind landings are one of the most challenging skills for pilots to master. In this video, our team breaks down the key techniques that will help you land confidently in gusty conditions.</p>

<p>We cover the crab method, wing-low technique, and combination approaches, with real cockpit footage demonstrating each method. Whether you're a student pilot or looking to sharpen your skills, these tips will help you handle crosswinds with confidence.</p>`,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    featuredImage: {
      url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Crosswind+Landing+Video',
      alt: 'Pilot performing crosswind landing technique',
    },
  },
  {
    slug: 'icon-a5-amphibious-review',
    title: 'Icon A5 Amphibious: A Closer Look',
    contentType: 'video',
    category: 'videos',
    publishDate: '2024-01-20',
    author: 'US Sport Planes Team',
    excerpt:
      "Take a tour of the Icon A5, the revolutionary amphibious light sport aircraft that's changing the game.",
    content: `<p>The Icon A5 represents a bold vision for personal aviation – an amphibious aircraft designed from the ground up for adventure. In this walkthrough video, we explore what makes this aircraft special.</p>

<p>From its folding wings for easy storage to its intuitive cockpit design, the A5 was built to make flying accessible and fun. We'll show you the features that set it apart and discuss what it's like to fly both on land and water.</p>`,
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    featuredImage: {
      url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Icon+A5+Review',
      alt: 'Icon A5 amphibious aircraft on water',
    },
  },
];

// Helper functions

export function getAllPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: PostCategory): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}
