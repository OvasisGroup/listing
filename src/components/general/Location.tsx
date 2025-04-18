/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useEffect, useState } from 'react';

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function LocationFetcher() {
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string>('');
  const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  console.log('Mapbox Token:', token);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${token}`
          );
          const data = await res.json();

          if (data.features && data.features.length > 0) {
            setAddress(data.features[0].place_name);
          } else {
            setError('No address found for this location.');
          }
        } catch (err) {
          setError('Failed to fetch address from Mapbox.');
        }
      },
      (err) => {
        setError(`Geolocation error: ${err.message}`);
      }
    );
  }, []);

  return (
    <div>
      {address && <p>{address}</p>}
      {error && <p>{error}</p>}
      {!address && !error && <p>Fetching your location...</p>}
    </div>
  );
}
