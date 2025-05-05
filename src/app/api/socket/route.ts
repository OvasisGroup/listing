// pages/api/socket.ts (for Pages Router)
// or app/api/socket/route.ts (for App Router using handler)

import { Server as HTTPServer } from "http";
import { Socket as NetSocket } from "net";
import { Server as IOServer } from "socket.io";
import type { NextApiRequest, NextApiResponse } from "next";

type NextApiResponseWithSocket = NextApiResponse & {
  socket: NetSocket & {
    server: HTTPServer & {
      io?: IOServer;
    };
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponseWithSocket) {
  if (!res.socket.server.io) {
    console.log("New Socket.io server...");
    const io = new IOServer(res.socket.server);
    
    io.on("connection", (socket) => {
      console.log("User connected");

      socket.on("send-message", (msg) => {
        socket.broadcast.emit("receive-message", msg);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });

    res.socket.server.io = io;
  }
  res.end();
}
