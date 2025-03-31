"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Switch } from '@/components/ui/switch';
import { Calendar } from "@/components/ui/calendar"


const Availability = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/availability").then(({ data }) => {
      if (data) {
        setIsAvailable(data.isAvailable);
        setStartDate(data.startDate ? new Date(data.startDate) : null);
        setEndDate(data.endDate ? new Date(data.endDate) : null);
        setStartTime(data.startTime || "");
        setEndTime(data.endTime || "");
      }
      setLoading(false);
    });
  }, []);

  const updateAvailability = async () => {
    setLoading(true);
    await axios.post("/api/availability", {
      isAvailable,
      startDate,
      endDate,
      startTime,
      endTime,
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg">
      <div className="flex items-center gap-2">
        <span>{loading ? "Loading..." : isAvailable ? "Available" : "Unavailable"}</span>
        <Switch checked={isAvailable} onCheckedChange={setIsAvailable} disabled={loading} />
      </div>

      {isAvailable && (
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-2 w-full">
            <p>Start Date</p>
            <Calendar mode="single" selected={startDate || undefined} onSelect={(day) => setStartDate(day || null)} className="w-full"/>
            {startDate && <p className="text-sm">{format(startDate, "PPP")}</p>}
          </div>
          <div>
            <p>End Date</p>
            <Calendar mode="single" selected={endDate || undefined} onSelect={(day) => setEndDate(day || null)} />
            {endDate && <p className="text-sm">{format(endDate, "PPP")}</p>}
          </div>
          <div>
            <p>Start Time</p>
            <Input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </div>
          <div>
            <p>End Time</p>
            <Input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </div>
        </div>
      )}

      <Button
        onClick={updateAvailability}
        disabled={loading || (isAvailable && (!startDate || !endDate || !startTime || !endTime))}
      >
        {loading ? "Saving..." : "Save Availability"}
      </Button>
    </div>
  );
};

export default Availability;
