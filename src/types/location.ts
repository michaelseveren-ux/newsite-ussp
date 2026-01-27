export type LocationType = 'service-center' | 'flight-school';

export interface Location {
  id: string;
  name: string;
  type: LocationType;
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
}
