'use client';

import { useEffect, useRef } from 'react';

interface Props {
  onLocationSelect: (location: string) => void;
}

export default function GoogleLocationInput({ onLocationSelect }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!window.google || !inputRef.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        onLocationSelect(place.formatted_address);
      }
    });
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search location..."
      className="input"
    />
  );
}
