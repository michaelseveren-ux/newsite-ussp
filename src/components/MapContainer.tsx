import { useState, useEffect } from 'react';
import { MapContainer as LeafletMapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { Location, LocationType } from '../types/location';
import { locations } from '../data/locations';
import 'leaflet/dist/leaflet.css';

// Custom marker icons
const createIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${color};
      width: 24px;
      height: 24px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });
};

const serviceIcon = createIcon('#2563eb'); // Blue
const schoolIcon = createIcon('#16a34a');  // Green

type FilterType = 'all' | LocationType;

export default function MapContainer() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredLocations = locations.filter((location) => {
    if (filter === 'all') return true;
    return location.type === filter;
  });

  // Calculate center of all locations
  const center: [number, number] = [39.8283, -98.5795]; // Geographic center of US
  const zoom = 4;

  if (!mounted) {
    return (
      <div className="w-full h-[500px] md:h-[600px] bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-2 mb-4 p-4 bg-gray-50 rounded-lg">
        <span className="text-sm font-medium text-gray-700 self-center mr-2">Filter:</span>
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'all'
              ? 'bg-gray-800 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          All Locations
        </button>
        <button
          onClick={() => setFilter('service-center')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'service-center'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          <span className="inline-block w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
          Service Centers
        </button>
        <button
          onClick={() => setFilter('flight-school')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            filter === 'flight-school'
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
          }`}
        >
          <span className="inline-block w-3 h-3 bg-green-600 rounded-full mr-2"></span>
          Flight Schools
        </button>
      </div>

      {/* Map */}
      <div className="w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
        <LeafletMapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredLocations.map((location) => (
            <Marker
              key={location.id}
              position={[location.coordinates.lat, location.coordinates.lng]}
              icon={location.type === 'service-center' ? serviceIcon : schoolIcon}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                  <p className="text-xs text-gray-500 uppercase mb-2">
                    {location.type === 'service-center' ? 'Service Center' : 'Flight School'}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">{location.address}</p>
                  {location.description && (
                    <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                  )}
                  <div className="text-sm space-y-1">
                    {location.phone && (
                      <p>
                        <span className="font-medium">Phone:</span>{' '}
                        <a href={`tel:${location.phone}`} className="text-blue-600 hover:underline">
                          {location.phone}
                        </a>
                      </p>
                    )}
                    {location.email && (
                      <p>
                        <span className="font-medium">Email:</span>{' '}
                        <a href={`mailto:${location.email}`} className="text-blue-600 hover:underline">
                          {location.email}
                        </a>
                      </p>
                    )}
                    {location.website && (
                      <p>
                        <a
                          href={location.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Visit Website →
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </LeafletMapContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 bg-blue-600 rounded-full"></span>
          <span>Service Center ({locations.filter(l => l.type === 'service-center').length})</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 bg-green-600 rounded-full"></span>
          <span>Flight School ({locations.filter(l => l.type === 'flight-school').length})</span>
        </div>
      </div>
    </div>
  );
}
