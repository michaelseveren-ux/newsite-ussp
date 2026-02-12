/**
 * Sanity client and helpers for fetching aircraft from the headless CMS.
 * Set SANITY_PROJECT_ID and SANITY_DATASET in .env to use Sanity; otherwise the site uses static data.
 */

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { Aircraft, AircraftImage, AircraftSpecs } from '../types/aircraft';

const projectId = import.meta.env.SANITY_PROJECT_ID ?? '';
const dataset = import.meta.env.SANITY_DATASET ?? 'production';
const apiVersion = import.meta.env.SANITY_API_VERSION ?? '2024-01-01';

let _client: ReturnType<typeof createClient> | null = null;
function getClient(): ReturnType<typeof createClient> {
  if (!_client) {
    if (!projectId) throw new Error('Sanity projectId is required');
    _client = createClient({ projectId, dataset, apiVersion, useCdn: true });
  }
  return _client;
}
function getBuilder(): ReturnType<typeof imageUrlBuilder> {
  return imageUrlBuilder({ projectId, dataset });
}

export function urlFor(source: { _type: string; asset?: { _ref: string } } | string) {
  return getBuilder().image(source as Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0]);
}

/** Raw aircraft document from Sanity (GROQ projection). */
export interface SanityAircraftDoc {
  _id: string;
  slug?: string;
  title?: string;
  manufacturer?: string;
  model?: string;
  year?: number;
  registration?: string;
  serialNumber?: string;
  status?: 'available' | 'pending' | 'sold';
  type?: 'light-sport' | 'experimental' | 'ultralight' | 'amphibious' | 'gyroplane';
  price?: number;
  shortDescription?: string;
  fullDescription?: string;
  features?: string[];
  history?: string;
  images?: Array<{
    _key: string;
    asset?: { _ref?: string; url?: string };
    alt?: string;
    caption?: string;
  }>;
  specs?: AircraftSpecs;
  totalTime?: number;
  engineTime?: number;
  propTime?: number;
  featured?: boolean;
}

const AIRCRAFT_GROQ = `*[_type == "aircraft" && defined(slug.current)] | order(year desc) {
  _id,
  "slug": slug.current,
  title,
  manufacturer,
  model,
  year,
  registration,
  serialNumber,
  status,
  type,
  price,
  shortDescription,
  fullDescription,
  features,
  history,
  "images": images[] {
    _key,
    asset->,
    alt,
    caption
  },
  specs,
  totalTime,
  engineTime,
  propTime,
  featured
}`;

const AIRCRAFT_BY_SLUG_GROQ = `*[_type == "aircraft" && slug.current == $slug][0] {
  _id,
  "slug": slug.current,
  title,
  manufacturer,
  model,
  year,
  registration,
  serialNumber,
  status,
  type,
  price,
  shortDescription,
  fullDescription,
  features,
  history,
  "images": images[] {
    _key,
    asset->,
    alt,
    caption
  },
  specs,
  totalTime,
  engineTime,
  propTime,
  featured
}`;

function mapImage(img: NonNullable<SanityAircraftDoc['images']>[number]): AircraftImage {
  const asset = img?.asset as { url?: string; _ref?: string } | undefined;
  let url = asset?.url ?? '';
  if (!url && asset?._ref) url = urlFor(asset).width(1200).height(800).url();
  return {
    url: typeof url === 'string' ? url : '',
    alt: img?.alt ?? '',
    caption: img?.caption,
  };
}

function mapDocToAircraft(doc: SanityAircraftDoc): Aircraft {
  const slug = (typeof doc.slug === 'string' ? doc.slug : doc._id) ?? doc._id;
  const images = (doc.images ?? []).map(mapImage);

  return {
    slug,
    title: doc.title ?? '',
    manufacturer: doc.manufacturer ?? '',
    model: doc.model ?? '',
    year: doc.year ?? 0,
    registration: doc.registration,
    serialNumber: doc.serialNumber,
    status: doc.status ?? 'available',
    type: doc.type ?? 'light-sport',
    price: doc.price,
    shortDescription: doc.shortDescription ?? '',
    fullDescription: doc.fullDescription ?? '',
    features: doc.features ?? [],
    history: doc.history,
    images,
    specs: doc.specs ?? {},
    totalTime: doc.totalTime,
    engineTime: doc.engineTime,
    propTime: doc.propTime,
    featured: doc.featured ?? false,
  };
}

export function isSanityConfigured(): boolean {
  return Boolean(projectId && dataset);
}

export async function fetchAllAircraftFromSanity(): Promise<Aircraft[]> {
  const docs = await getClient().fetch<SanityAircraftDoc[]>(AIRCRAFT_GROQ);
  return (docs ?? []).map(mapDocToAircraft);
}

export async function fetchAircraftBySlugFromSanity(slug: string): Promise<Aircraft | null> {
  const doc = await getClient().fetch<SanityAircraftDoc | null>(AIRCRAFT_BY_SLUG_GROQ, { slug });
  if (!doc) return null;
  return mapDocToAircraft(doc);
}
