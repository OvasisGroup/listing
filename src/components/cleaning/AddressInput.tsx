/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";
// import mapboxgl from "mapbox-gl";
import * as mapboxgl from "mapbox-gl";

import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

// Set access token (type cast to avoid TS error)
(mapboxgl as any).accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;


type Props = {
  onSelect: (value: { address: string; lat: number; lng: number }) => void;
};

export default function AddressInput({ onSelect }: Props) {
  const geocoderContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!geocoderContainer.current) return;

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      placeholder: "Search address...",
      mapboxgl,
    });

    geocoder.addTo(geocoderContainer.current);

    geocoder.on("result", (e) => {
      const place = e.result;
      const address = place.place_name;
      const [lng, lat] = place.geometry.coordinates;
      onSelect({ address, lat, lng });
    });

    return () => geocoder.clear();
  }, []);

  return <div ref={geocoderContainer} className="mb-4" />;
}

