import { Dispatch } from "react";
import { Socket } from "socket.io-client";

export interface PartyContext {
    socket: Socket,
    isUserCreated: boolean,
    setIsUserCreated: Dispatch<boolean>
}