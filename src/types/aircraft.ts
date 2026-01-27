// Aircraft TypeScript interfaces
// Ready for Sanity CMS integration - types will remain the same

export type AircraftStatus = 'available' | 'pending' | 'sold';

export type AircraftType =
  | 'light-sport'
  | 'experimental'
  | 'ultralight'
  | 'amphibious'
  | 'gyroplane';

export interface AircraftImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface AircraftSpecs {
  // Performance
  cruiseSpeed?: string;
  maxSpeed?: string;
  stallSpeed?: string;
  range?: string;
  rateOfClimb?: string;
  serviceCeiling?: string;
  takeoffDistance?: string;
  landingDistance?: string;
  fuelCapacity?: string;
  fuelBurn?: string;

  // Dimensions
  wingspan?: string;
  length?: string;
  height?: string;
  wingArea?: string;

  // Weights
  emptyWeight?: string;
  maxGrossWeight?: string;
  usefulLoad?: string;

  // Engine
  engine?: string;
  horsepower?: string;
  propeller?: string;

  // Avionics
  avionics?: string;
}

export interface Aircraft {
  // Identification
  slug: string;
  title: string;
  manufacturer: string;
  model: string;
  year: number;
  registration?: string;
  serialNumber?: string;

  // Classification
  status: AircraftStatus;
  type: AircraftType;

  // Pricing
  price?: number; // undefined = "Price on Request"

  // Description
  shortDescription: string;
  fullDescription: string;
  features: string[];
  history?: string;

  // Media
  images: AircraftImage[];

  // Specifications
  specs: AircraftSpecs;

  // Times
  totalTime?: number; // in hours
  engineTime?: number;
  propTime?: number;

  // Metadata
  featured?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Helper type for featured aircraft display on homepage
export interface FeaturedAircraft {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  status: AircraftStatus;
  price?: number;
  type: AircraftType;
}
