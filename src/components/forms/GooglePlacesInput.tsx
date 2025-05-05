'use client'

import React, { useRef, useEffect } from 'react'
import { Input } from '@/components/ui/input'

interface GooglePlacesInputProps {
  value?: string
  onChange: (value: string) => void
  placeholder?: string
}

export const GooglePlacesInput: React.FC<GooglePlacesInputProps> = ({
  value,
  onChange,
  placeholder = 'Enter address',
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const initAutocomplete = async () => {
      const { Loader } = await import('@googlemaps/js-api-loader')
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // <-- add this in your `.env`
        libraries: ['places'],
      })

      await loader.load()

      if (inputRef.current) {
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
          types: ['geocode'],
        })

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace()
          onChange(place.formatted_address || '')
        })
      }
    }

    initAutocomplete()
  }, [onChange])

  return (
    <Input
      ref={inputRef}
      defaultValue={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}
