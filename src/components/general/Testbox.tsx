/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

const MapWithLocationSearch = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const userMarker = useRef<mapboxgl.Marker | null>(null);
//   const [latitude, setLatitude] = useState<number | null>(null);
//   const [longitude, setLongitude] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [36.8219, -1.2921], // Default to Nairobi
      zoom: 12,
    });

    // Create marker on initial location
    userMarker.current = new mapboxgl.Marker({ color: 'blue' })
      .setLngLat([36.8219, -1.2921]) // Initial location (Nairobi)
      .addTo(map.current!);

    return () => {
      map.current?.remove();
    };
  }, []);

  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      // Fetch search results from Mapbox Geocoding API
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          query
        )}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
      );
      const data = await response.json();
      setSearchResults(data.features); // Set the results
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectPlace = (place: any) => {
    setSearchQuery(place.place_name);

    const location = [place.center[0], place.center[1]] as [number, number];
    // Center the map and add marker
    map.current?.setCenter(location);
    map.current?.setZoom(14);

    userMarker.current?.setLngLat(location);
    userMarker.current?.setPopup(new mapboxgl.Popup().setText(place.place_name));
    userMarker.current?.addTo(map.current!);

    // setLatitude(location[1]);
    // setLongitude(location[0]);
    setSearchResults([]); // Clear search results after selection
  };

  return (
    <div>
      {/* Location search box */}
      <div className="relative mb-4">
        <label htmlFor="location-search" className="block">Search Location</label>
        <input
          type="text"
          id="location-search"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for a place..."
          className="border px-4 py-2 w-full"
        />
        {searchResults.length > 0 && (
          <div className="absolute left-0 right-0 bg-white border mt-1 max-h-60 overflow-y-auto z-10">
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSelectPlace(result)}
              >
                {result.place_name}
              </div>
            ))}
          </div>
        )}
      </div>

      

      {/* Map container */}
      <div className="w-full h-[500px]" ref={mapContainer} />
    </div>
  );
};

export default MapWithLocationSearch;
