"use client";

import {io} from "socket.io-client";
export const socket = io("https://chatsocket-q8do.onrender.com", { transports: ["websocket"] });
