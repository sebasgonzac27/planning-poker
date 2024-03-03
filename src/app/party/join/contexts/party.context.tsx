"use client"

import { ReactElement, createContext, useState } from "react"
import { io } from "socket.io-client";
import { PartyContext as PartyContextType } from "../types";

const socket = io('http://localhost:3001', {
    reconnection: false
})

export const PartyContext = createContext<PartyContextType | null>(null);

export function ClassroomProvider({ children }: { children: ReactElement | JSX.Element }) {
    const [isUserCreated, setIsUserCreated] = useState(false)


    return (
        <PartyContext.Provider value={
            {
                socket,
                isUserCreated,
                setIsUserCreated
            }
        }>
            {children}
        </PartyContext.Provider>
    )
}