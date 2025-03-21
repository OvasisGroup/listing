"use client"; // Only for App Router

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function JobSeekerCount() {
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await axios.get("/api/jobSeekersCount");
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
        <motion.div
          className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      )}
    </div>
  );
}
