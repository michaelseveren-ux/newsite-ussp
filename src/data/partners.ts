export interface Certification {
  name: string;
  credential: string;
  description: string;
  logo: string;
}

export interface Brand {
  name: string;
  logo: string;
  href: string;
  external: boolean;
}

export const certifications: Certification[] = [
  {
    name: 'ROTAX',
    credential: 'Independent Repair Centre',
    description: 'Factory-authorized to service and repair all ROTAX aircraft engines.',
    logo: '/images/logos/rotax.png',
  },
  {
    name: 'ICON Aircraft',
    credential: 'Authorized Service Provider',
    description: 'Certified service center for ICON aircraft systems and components.',
    logo: '/images/logos/icon-aircraft.png',
  },
];

export const brands: Brand[] = [
  {
    name: 'Jabiru',
    logo: '/images/logos/jabiru.png',
    href: '/jabiru-aircraft',
    external: false,
  },
  {
    name: 'Aerotrek',
    logo: '/images/logos/aerotrek.png',
    href: 'https://www.aerotrek.aero',
    external: true,
  },
  {
    name: 'Tecnam',
    logo: '/images/logos/tecnam.png',
    href: 'https://www.tecnam.com',
    external: true,
  },
];
