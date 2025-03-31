"use client";
import { useEffect, useState } from "react";
import axios from "axios";

// const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Correctly reference the environment variable

const GOOGLE_API_KEY = "AIzaSyCBOosoymByIVsJVirqw5k3e6mJFIbkvmc" // Correctly reference the environment variable

export default function LocationComponent() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation({ lat, lng });

          // Fetch address
          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
            );
            const results = response.data.results;
            console.log("Results: ", results);
            if (results.length > 0) {
              setAddress(results[0].formatted_address);
            } else {
              setAddress("Address not found");
            }
          } catch (error) {
            console.error("Error fetching address:", error);
          }
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <h2>Current Location</h2>
      {location ? (
        <p>
          Latitude: {location.lat}, Longitude: {location.lng}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}

      {address && <p>Address: {address}</p>}
    </div>
  );
}
