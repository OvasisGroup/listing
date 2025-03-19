"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Window */}
      {open && (
        <div className="absolute bottom-16 right-0 w-80 bg-white shadow-lg rounded-lg p-4 border">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Chat</h2>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="mt-3">
            <p className="text-sm text-gray-600">How can I help you?</p>
          </div>
        </div>
      )}

      {/* Floating Chat Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-foreground transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
