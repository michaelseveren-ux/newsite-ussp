/**
 * Aircraft data layer: uses Sanity CMS when SANITY_PROJECT_ID and SANITY_DATASET are set,
 * otherwise falls back to static data below.
 */

import {
  isSanityConfigured,
  fetchAllAircraftFromSanity,
  fetchAircraftBySlugFromSanity,
} from '../lib/sanity';
import type { Aircraft, FeaturedAircraft } from '../types/aircraft';
import type { AircraftType } from '../types/aircraft';

export const aircraft: Aircraft[] = [
  {
    slug: '2023-sling-tsi',
    title: '2023 Sling TSi',
    manufacturer: 'Sling',
    model: 'TSi',
    year: 2023,
    registration: 'N123SP',
    serialNumber: 'TSI-0456',
    status: 'available',
    type: 'light-sport',
    price: 285000,
    shortDescription:
      'High-performance 4-seat aircraft with exceptional range and speed. Perfect for cross-country adventures.',
    fullDescription: `This stunning 2023 Sling TSi represents the pinnacle of modern light sport aircraft design. With its sleek lines, spacious cabin, and impressive performance, it's perfect for pilots who demand more from their aircraft.

The TSi features a turbocharged Rotax 915iS engine producing 141 horsepower, giving you the power to climb quickly and cruise efficiently at higher altitudes. The glass cockpit with dual Garmin G3X displays provides all the information you need at a glance.

This particular aircraft has been meticulously maintained and includes several desirable options including leather interior, autopilot, and ADS-B In/Out.`,
    features: [
      'Rotax 915iS turbocharged engine (141 HP)',
      'Dual Garmin G3X Touch displays',
      'Garmin GFC 500 autopilot',
      'Leather interior with premium stitching',
      'ADS-B In/Out',
      'LED landing and taxi lights',
      'Tinted canopy',
      'Wheel fairings included',
    ],
    history:
      'Single owner since new. Always hangared. No damage history. All ADs complied with.',
    images: [
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Sling+TSi+Main',
        alt: '2023 Sling TSi exterior view',
        caption: 'Beautiful exterior profile',
      },
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Sling+TSi+Cockpit',
        alt: '2023 Sling TSi cockpit',
        caption: 'Modern glass cockpit with Garmin avionics',
      },
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Sling+TSi+Interior',
        alt: '2023 Sling TSi interior',
        caption: 'Spacious leather interior',
      },
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Sling+TSi+Engine',
        alt: '2023 Sling TSi engine',
        caption: 'Rotax 915iS turbocharged engine',
      },
    ],
    specs: {
      cruiseSpeed: '155 kts',
      maxSpeed: '165 kts',
      stallSpeed: '45 kts',
      range: '1,000+ nm',
      rateOfClimb: '1,200 fpm',
      serviceCeiling: '23,000 ft',
      takeoffDistance: '820 ft',
      landingDistance: '650 ft',
      fuelCapacity: '50 gal',
      fuelBurn: '8.5 gph',
      wingspan: '31.2 ft',
      length: '23.0 ft',
      height: '8.2 ft',
      wingArea: '124.4 sq ft',
      emptyWeight: '1,212 lbs',
      maxGrossWeight: '1,984 lbs',
      usefulLoad: '772 lbs',
      engine: 'Rotax 915iS',
      horsepower: '141 HP',
      propeller: 'MT 3-blade constant speed',
      avionics: 'Dual Garmin G3X Touch, GFC 500 Autopilot, GTN 650Xi',
    },
    totalTime: 285,
    engineTime: 285,
    propTime: 285,
    featured: true,
  },
  {
    slug: '2022-icon-a5',
    title: '2022 Icon A5',
    manufacturer: 'Icon',
    model: 'A5',
    year: 2022,
    registration: 'N456IA',
    serialNumber: 'A5-0892',
    status: 'available',
    type: 'amphibious',
    price: 389000,
    shortDescription:
      'Revolutionary amphibious light sport aircraft. Experience the freedom of water and land takeoffs.',
    fullDescription: `The Icon A5 is a game-changing amphibious sport aircraft that lets you explore like never before. Land on water, grass, or pavement - the choice is yours.

This 2022 model features Icon's signature folding wings for easy storage and trailering, along with their innovative angle of attack indicator that makes flying safer and more intuitive.

The aircraft is equipped with the optional Garmin aera 796 GPS and has been meticulously maintained by Icon-certified technicians.`,
    features: [
      'Rotax 912iS fuel-injected engine',
      'Folding wings for easy storage',
      'Spin-resistant airframe',
      'Angle of attack indicator',
      'Garmin aera 796 GPS',
      'Amphibious capability',
      'Composite construction',
      'Trailer included',
    ],
    history:
      'Dealer demo aircraft. Professionally maintained. Complete service records available.',
    images: [
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Icon+A5+Water',
        alt: '2022 Icon A5 on water',
        caption: 'The A5 in its element',
      },
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Icon+A5+Flight',
        alt: '2022 Icon A5 in flight',
        caption: 'Sleek lines and modern design',
      },
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Icon+A5+Cockpit',
        alt: '2022 Icon A5 cockpit',
        caption: 'Intuitive cockpit layout',
      },
    ],
    specs: {
      cruiseSpeed: '95 kts',
      maxSpeed: '109 kts',
      stallSpeed: '39 kts',
      range: '427 nm',
      rateOfClimb: '750 fpm',
      serviceCeiling: '12,000 ft',
      takeoffDistance: '750 ft (water: 900 ft)',
      landingDistance: '550 ft (water: 700 ft)',
      fuelCapacity: '20 gal',
      fuelBurn: '5 gph',
      wingspan: '34.8 ft',
      length: '23.0 ft',
      height: '8.1 ft',
      emptyWeight: '1,080 lbs',
      maxGrossWeight: '1,510 lbs',
      usefulLoad: '430 lbs',
      engine: 'Rotax 912iS',
      horsepower: '100 HP',
      propeller: '3-blade ground adjustable',
      avionics: 'Garmin aera 796 GPS, Dynon D10A backup',
    },
    totalTime: 156,
    engineTime: 156,
    featured: true,
  },
  {
    slug: '2021-tecnam-p2008',
    title: '2021 Tecnam P2008',
    manufacturer: 'Tecnam',
    model: 'P2008',
    year: 2021,
    registration: 'N789TC',
    serialNumber: 'P2008-0234',
    status: 'pending',
    type: 'light-sport',
    price: 195000,
    shortDescription:
      'Italian craftsmanship meets modern avionics. A reliable and efficient training and touring aircraft.',
    fullDescription: `The Tecnam P2008 combines Italian design excellence with practical everyday utility. This aircraft is equally at home as a primary trainer or a weekend touring machine.

With its high-wing configuration and excellent visibility, the P2008 is a joy to fly. The Rotax 912ULS engine provides smooth, reliable power while sipping fuel economically.

This example comes with a comprehensive Garmin avionics suite and has been used in a Part 141 flight school environment, ensuring impeccable maintenance.`,
    features: [
      'Rotax 912ULS engine (100 HP)',
      'Garmin G3X Touch display',
      'Garmin GTN 650 navigator',
      'High-wing design for excellent visibility',
      'All-metal construction',
      'Electric flaps',
      'Castering nosewheel',
      'Large baggage compartment',
    ],
    history:
      'Previously used in Part 141 flight school. Complete logbooks. Fresh annual inspection.',
    images: [
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Tecnam+P2008+Main',
        alt: '2021 Tecnam P2008 exterior',
        caption: 'Classic Italian design',
      },
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Tecnam+P2008+Panel',
        alt: '2021 Tecnam P2008 panel',
        caption: 'Full Garmin panel',
      },
    ],
    specs: {
      cruiseSpeed: '118 kts',
      maxSpeed: '135 kts',
      stallSpeed: '40 kts',
      range: '756 nm',
      rateOfClimb: '900 fpm',
      serviceCeiling: '14,000 ft',
      takeoffDistance: '660 ft',
      landingDistance: '920 ft',
      fuelCapacity: '26.4 gal',
      fuelBurn: '5.3 gph',
      wingspan: '28.4 ft',
      length: '21.8 ft',
      height: '8.0 ft',
      emptyWeight: '716 lbs',
      maxGrossWeight: '1,320 lbs',
      usefulLoad: '604 lbs',
      engine: 'Rotax 912ULS',
      horsepower: '100 HP',
      propeller: '2-blade ground adjustable',
      avionics: 'Garmin G3X Touch, GTN 650, GFC 500',
    },
    totalTime: 1250,
    engineTime: 450,
    propTime: 450,
    featured: true,
  },
  {
    slug: '2019-cub-crafters-sport-cub-s2',
    title: '2019 CubCrafters Sport Cub S2',
    manufacturer: 'CubCrafters',
    model: 'Sport Cub S2',
    year: 2019,
    registration: 'N234CC',
    serialNumber: 'SCS2-0178',
    status: 'available',
    type: 'light-sport',
    price: 175000,
    shortDescription:
      'Modern take on the classic Cub. Excellent short-field performance for backcountry adventures.',
    fullDescription: `The CubCrafters Sport Cub S2 brings modern engineering to the beloved Cub design. This is the ultimate backcountry aircraft for pilots who want to explore off the beaten path.

With its amazing short-field capabilities and rugged construction, the Sport Cub S2 can access airstrips that other aircraft can only dream of. The large tundra tires and extended gear make rough field operations a breeze.

This aircraft has been meticulously maintained and is ready for your next adventure.`,
    features: [
      'Continental O-200-D engine (100 HP)',
      'Extended landing gear',
      '29" tundra tires',
      'VGs installed',
      'Dual Garmin G5s',
      'Garmin 696 GPS',
      'Cabin heater',
      'Extended baggage',
    ],
    history:
      'Two owners. Always hangared. Full records. No damage history.',
    images: [
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Sport+Cub+S2',
        alt: '2019 CubCrafters Sport Cub S2',
        caption: 'Ready for adventure',
      },
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Sport+Cub+Panel',
        alt: 'Sport Cub S2 panel',
        caption: 'Modern avionics in a classic airframe',
      },
    ],
    specs: {
      cruiseSpeed: '87 kts',
      maxSpeed: '107 kts',
      stallSpeed: '32 kts',
      range: '360 nm',
      rateOfClimb: '1,050 fpm',
      serviceCeiling: '16,000 ft',
      takeoffDistance: '180 ft',
      landingDistance: '200 ft',
      fuelCapacity: '24 gal',
      fuelBurn: '6 gph',
      wingspan: '34.4 ft',
      length: '22.5 ft',
      height: '6.5 ft',
      emptyWeight: '896 lbs',
      maxGrossWeight: '1,320 lbs',
      usefulLoad: '424 lbs',
      engine: 'Continental O-200-D',
      horsepower: '100 HP',
      propeller: 'Sensenich wood',
      avionics: 'Dual Garmin G5, Garmin 696 GPS',
    },
    totalTime: 620,
    engineTime: 620,
  },
  {
    slug: '2018-pipistrel-virus-sw',
    title: '2018 Pipistrel Virus SW',
    manufacturer: 'Pipistrel',
    model: 'Virus SW',
    year: 2018,
    registration: 'N567PV',
    status: 'sold',
    type: 'light-sport',
    price: 155000,
    shortDescription:
      'Ultra-efficient European design with exceptional glide ratio and range.',
    fullDescription: `The Pipistrel Virus SW is renowned for its incredible efficiency and performance. With a glide ratio better than many gliders, this aircraft can travel vast distances on minimal fuel.

Slovenian engineering at its finest, the Virus SW features a sleek composite airframe and the reliable Rotax 912ULS engine. This example includes the rare SW121 wing for enhanced performance.`,
    features: [
      'Rotax 912ULS engine (100 HP)',
      'SW121 high-performance wing',
      'Full composite construction',
      'Electric trim',
      'Dynon SkyView HDX',
      'Exceptional glide ratio (16:1)',
      'Fuel-efficient cruise',
    ],
    history: 'SOLD - Two owners. Excellent condition.',
    images: [
      {
        url: 'https://placehold.co/1200x800/1e2a5e/ffffff?text=Pipistrel+Virus',
        alt: '2018 Pipistrel Virus SW',
        caption: 'Sleek and efficient',
      },
    ],
    specs: {
      cruiseSpeed: '140 kts',
      maxSpeed: '157 kts',
      stallSpeed: '37 kts',
      range: '1,100 nm',
      rateOfClimb: '1,200 fpm',
      serviceCeiling: '18,000 ft',
      fuelCapacity: '30 gal',
      fuelBurn: '4.2 gph',
      wingspan: '34.5 ft',
      length: '21.5 ft',
      emptyWeight: '639 lbs',
      maxGrossWeight: '1,320 lbs',
      usefulLoad: '681 lbs',
      engine: 'Rotax 912ULS',
      horsepower: '100 HP',
      avionics: 'Dynon SkyView HDX, dual EFIS',
    },
    totalTime: 890,
    engineTime: 890,
    featured: false,
  },
];

async function getAircraftList(): Promise<Aircraft[]> {
  if (isSanityConfigured()) {
    try {
      return await fetchAllAircraftFromSanity();
    } catch (e) {
      console.warn('Sanity fetch failed, using static aircraft data:', e);
      return aircraft;
    }
  }
  return aircraft;
}

/** Get all aircraft (from Sanity or static data). */
export async function getAllAircraft(): Promise<Aircraft[]> {
  return getAircraftList();
}

/** Get featured aircraft for homepage (from Sanity or static). */
export async function getFeaturedAircraft(): Promise<FeaturedAircraft[]> {
  const list = await getAircraftList();
  return list
    .filter((a) => a.featured && a.status !== 'sold')
    .slice(0, 3)
    .map((a) => ({
      slug: a.slug,
      title: a.title,
      shortDescription: a.shortDescription,
      image: a.images[0]?.url || '',
      status: a.status,
      price: a.price,
      type: a.type,
    }));
}

/** Get aircraft by slug (from Sanity or static). */
export async function getAircraftBySlug(slug: string): Promise<Aircraft | undefined> {
  if (isSanityConfigured()) {
    try {
      const doc = await fetchAircraftBySlugFromSanity(slug);
      return doc ?? undefined;
    } catch (e) {
      console.warn('Sanity fetch by slug failed, falling back to static:', e);
    }
  }
  return aircraft.find((a) => a.slug === slug);
}

/** Get all unique manufacturers (from current data source). */
export async function getManufacturers(): Promise<string[]> {
  const list = await getAircraftList();
  return [...new Set(list.map((a) => a.manufacturer))].sort();
}

/** Get all unique aircraft types (from current data source). */
export async function getAircraftTypes(): Promise<AircraftType[]> {
  const list = await getAircraftList();
  return [...new Set(list.map((a) => a.type))];
}
