"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Chat({ userId }: { userId: string }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { id: string; text: string; sender: { name: string }; receiver?: { name: string } }[]
  >([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("/api/messages");
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages", err);
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      await axios.post("/api/messages", { text: message, senderId: userId, receiverId: "receiver-user-id" });
      setMessage("");
      fetchMessages();
    } catch (err) {
      console.error("Failed to send message", err);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md">
      <div className="h-60 overflow-y-auto mb-4 border p-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`p-2 rounded my-1 ${msg.sender.name === "Current User" ? "bg-blue-200 text-right" : "bg-gray-200"}`}>
            <strong>{msg.sender.name}</strong>: {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 w-full"
        placeholder="Type a message..."
      />
      <button onClick={sendMessage} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
}

