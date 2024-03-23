"use client"

import { ReactElement, createContext, useState } from "react"
import { io } from "socket.io-client";
import { PartyContext as PartyContextType } from "../types";
import { Player } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

const socket = io(API_URL, {
    reconnection: false,
})

export const PartyContext = createContext<PartyContextType | null>(null);

export function PartyProvider({ children }: { children: ReactElement }) {
    const [partyName, setPartyName] = useState("")
    const [players, setPlayers] = useState<Player[]>([])
    const [userLoggedIn, setUserLoggedIn] = useState(false)

    return (
        <PartyContext.Provider value={
            {
                socket,
                partyName,
                setPartyName,
                players,
                setPlayers,
                userLoggedIn,
                setUserLoggedIn
            }
        }>
            {children}
        </PartyContext.Provider>
    )
}
