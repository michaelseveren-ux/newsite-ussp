/**
 * Jabiru new aircraft data
 * US Sport Planes - Official Jabiru Importer for the Americas
 */

export interface JabiruSpecs {
  // Performance
  cruiseSpeed: string;
  maxSpeed: string;
  stallSpeed: string;
  range: string;
  rateOfClimb: string;
  serviceCeiling: string;
  takeoffDistance: string;
  landingDistance: string;
  fuelCapacity: string;
  fuelBurn: string;

  // Dimensions
  wingspan: string;
  length: string;
  height: string;
  wingArea: string;

  // Weights
  emptyWeight: string;
  maxGrossWeight: string;
  usefulLoad: string;

  // Engine
  engine: string;
  horsepower: string;
  propeller: string;

  // Capacity
  seating: string;
}

export interface JabiruModel {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: JabiruSpecs;
  basePrice: number;
  images: {
    url: string;
    alt: string;
  }[];
}

export const jabiruModels: JabiruModel[] = [
  {
    slug: 'j170-m',
    name: 'J170-M',
    tagline: 'The Perfect Trainer & Sport Aircraft',
    description:
      'The Jabiru J170-M is an exceptional two-seat aircraft ideal for flight training and recreational flying. With its efficient Jabiru 2200 engine, low operating costs, and forgiving flight characteristics, the J170-M is the perfect choice for pilots seeking an affordable, reliable aircraft.',
    highlights: [
      'Excellent visibility with bubble canopy',
      'Low fuel consumption (4.5 gal/hr)',
      'Proven Jabiru 2200 engine',
      'Easy maintenance and low operating costs',
      'Ideal for flight training',
      'Gentle stall characteristics',
    ],
    specs: {
      cruiseSpeed: '105 kts',
      maxSpeed: '120 kts',
      stallSpeed: '44 kts',
      range: '550 nm',
      rateOfClimb: '700 fpm',
      serviceCeiling: '14,000 ft',
      takeoffDistance: '700 ft',
      landingDistance: '600 ft',
      fuelCapacity: '24 gal',
      fuelBurn: '4.5 gph',
      wingspan: '27.6 ft',
      length: '19.0 ft',
      height: '6.6 ft',
      wingArea: '102 sq ft',
      emptyWeight: '660 lbs',
      maxGrossWeight: '1,150 lbs',
      usefulLoad: '490 lbs',
      engine: 'Jabiru 2200',
      horsepower: '85 HP',
      propeller: '2-blade ground adjustable',
      seating: '2 seats (side-by-side)',
    },
    basePrice: 89000,
    images: [
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Jabiru+J170-M',
        alt: 'Jabiru J170-M in flight',
      },
    ],
  },
  {
    slug: 'j430-m',
    name: 'J430-M',
    tagline: 'Four-Seat Touring Excellence',
    description:
      'The Jabiru J430-M is a spacious four-seat aircraft designed for cross-country touring and family flying. Powered by the Jabiru 3300 engine, it offers comfortable seating, generous baggage capacity, and the range to make meaningful trips. Experience the freedom of four-seat flying at light sport aircraft operating costs.',
    highlights: [
      'Spacious four-seat cabin',
      'Generous baggage compartment',
      'Jabiru 3300 six-cylinder engine',
      'Excellent range for cross-country flying',
      'Comfortable long-distance touring',
      'Lower operating costs than comparable 4-seaters',
    ],
    specs: {
      cruiseSpeed: '120 kts',
      maxSpeed: '135 kts',
      stallSpeed: '48 kts',
      range: '700 nm',
      rateOfClimb: '800 fpm',
      serviceCeiling: '15,000 ft',
      takeoffDistance: '900 ft',
      landingDistance: '700 ft',
      fuelCapacity: '40 gal',
      fuelBurn: '7.5 gph',
      wingspan: '29.5 ft',
      length: '21.3 ft',
      height: '7.2 ft',
      wingArea: '125 sq ft',
      emptyWeight: '992 lbs',
      maxGrossWeight: '1,874 lbs',
      usefulLoad: '882 lbs',
      engine: 'Jabiru 3300',
      horsepower: '120 HP',
      propeller: '3-blade ground adjustable',
      seating: '4 seats (2+2 configuration)',
    },
    basePrice: 149000,
    images: [
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Jabiru+J430-M',
        alt: 'Jabiru J430-M four-seat aircraft',
      },
    ],
  },
  {
    slug: 'j432-m',
    name: 'J432-M',
    tagline: 'Ultimate Performance & Comfort',
    description:
      'The Jabiru J432-M represents the pinnacle of the Jabiru lineup. This refined four-seat aircraft features enhanced performance, upgraded interior appointments, and improved aerodynamics. For pilots who want the best in Australian aircraft engineering, the J432-M delivers an unmatched combination of performance, comfort, and efficiency.',
    highlights: [
      'Enhanced aerodynamic design',
      'Premium interior appointments',
      'Upgraded Jabiru 3300A engine',
      'Improved cruise performance',
      'Extended range capability',
      'Advanced avionics ready',
    ],
    specs: {
      cruiseSpeed: '130 kts',
      maxSpeed: '145 kts',
      stallSpeed: '46 kts',
      range: '750 nm',
      rateOfClimb: '900 fpm',
      serviceCeiling: '15,000 ft',
      takeoffDistance: '850 ft',
      landingDistance: '650 ft',
      fuelCapacity: '42 gal',
      fuelBurn: '7.8 gph',
      wingspan: '29.5 ft',
      length: '21.7 ft',
      height: '7.2 ft',
      wingArea: '127 sq ft',
      emptyWeight: '1,020 lbs',
      maxGrossWeight: '1,984 lbs',
      usefulLoad: '964 lbs',
      engine: 'Jabiru 3300A',
      horsepower: '130 HP',
      propeller: '3-blade constant speed',
      seating: '4 seats (2+2 configuration)',
    },
    basePrice: 179000,
    images: [
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Jabiru+J432-M',
        alt: 'Jabiru J432-M premium four-seat aircraft',
      },
    ],
  },
];

/** Get all Jabiru models available for purchase */
export function getAllJabiruModels(): JabiruModel[] {
  return jabiruModels;
}

/** Get a specific Jabiru model by slug */
export function getJabiruModelBySlug(slug: string): JabiruModel | undefined {
  return jabiruModels.find((model) => model.slug === slug);
}
