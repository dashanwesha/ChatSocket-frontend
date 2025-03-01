"use client";

import {io} from "socket.io-client";
export const socket = io("https://chatsocket-j5j5.onrender.com", { transports: ["websocket"] });
