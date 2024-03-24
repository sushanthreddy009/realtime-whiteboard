import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:3000"; // Replace with your actual server URL

const socket = io(SOCKET_URL);

export const initializeSocketConnection = () => {
  socket.on("connect", () => {
    console.log(`Connected with socket id ${socket.id}`);
  });

  // Add more event listeners as needed for your application
};

export default socket;
