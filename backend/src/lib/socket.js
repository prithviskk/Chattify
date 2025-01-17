import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // client URL
    methods: ["GET", "POST"],
    credentials: true, // Allow credentials
  },
});

export function getReceiverSocketId(userId){
    return userSocketMap[userId];
}
const userSocketMap={};
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  const userId =socket.handshake.query.userId;
  if(userId) userSocketMap[userId]=socket.id;

  //send events to all connected clients (broadcast)
  io.emit("getOnlineUsers",Object.keys(userSocketMap));

  // listen for the disconnect event for the specific user
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

  });
});

export { io, app, server };
