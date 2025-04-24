"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN!;

type Location = {
  lat: number;
  lng: number;
  address: string;
};

export default function MapPicker({
  onLocationSelect
}: {
  onLocationSelect: (loc: Location) => void;
}) {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const initialLng = 36.8219; // Nairobi longitude
    const initialLat = -1.2921; // Nairobi latitude

    const initMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [initialLng, initialLat],
      zoom: 12,
    });

    const initMarker = new mapboxgl.Marker({ draggable: true })
      .setLngLat([initialLng, initialLat])
      .addTo(initMap);

    async function updateLocation(lng: number, lat: number) {
      const address = await reverseGeocode(lng, lat);
      onLocationSelect({ lat, lng, address });
    }

    initMarker.on('dragend', async () => {
      const lngLat = initMarker.getLngLat();
      await updateLocation(lngLat.lng, lngLat.lat);
    });

    // Send initial location
    updateLocation(initialLng, initialLat);


    return () => initMap.remove();
  }, []);

  return <div ref={mapContainer} className="w-full h-96 rounded-lg shadow" />;
}

async function reverseGeocode(lng: number, lat: number): Promise<string> {
  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
  );
  const data = await res.json();
  return data?.features?.[0]?.place_name || "Unknown location";
}
