"use client";
import useSocket from "@/hooks/useSocket";
import { useState, useEffect } from "react";


export default function Chat() {
  const socket = useSocket();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (!socket) return;

    socket.on("receive-message", (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, [socket]);

  const sendMessage = () => {
    if (socket && message) {
      socket.emit("send-message", message);
      setMessages((prev) => [...prev, message]);
      setMessage("");
    }
  };

  return (
    <div className="p-4 border rounded max-w-md mx-auto">
      <div className="h-60 overflow-y-scroll border mb-4 p-2">
        {messages.map((msg, i) => (
          <div key={i} className="mb-1">{msg}</div>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full"
        placeholder="Type your message"
      />
      <button onClick={sendMessage} className="mt-2 p-2 bg-blue-600 text-white w-full">Send</button>
    </div>
  );
}
