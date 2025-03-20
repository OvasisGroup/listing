"use client"; // Only for App Router

import { useEffect, useState } from "react";
import axios from "axios";

export default function UserCount() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await axios.get("/api/userCount");
        setCount(response.data.count);
        console.log(response.data.count);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch count");
      }
    }

    fetchCount();
  }, []);

  return (
    <div className="">
      {error ? (
        <p className="">{error}</p>
      ) : count !== null ? (
        <p>{count}</p>
      ) : (
        <small>Loading...</small>
      )}
    </div>
  );
}
