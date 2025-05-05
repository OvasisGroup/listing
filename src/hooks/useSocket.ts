// hooks/useSocket.ts
import { useEffect, useRef } from "react";
import { io, Socket } from "socket.io-client";

export default function useSocket() {
    const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(undefined, {
      path: "/api/socket_io",
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return socketRef.current;
}
