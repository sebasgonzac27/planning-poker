import { useEffect, useState } from "react";
import { usePartyContext } from ".";
import { Player } from "@/types";

export function useSplitPlayers() {
    const { socket, players, setPlayers } = usePartyContext()
    const [topPlayers, setTopPlayers] = useState<Player[]>([])
    const [middlePlayers, setMiddlePlayers] = useState<Player[]>([])
    const [bottomPlayers, setBottomPlayers] = useState<Player[]>([])

    useEffect(() => {
        const splitPlayers = () => {
            const playersCopy = [...players].filter((p) => p.socketId !== socket.id)
            const top = playersCopy?.slice(0, 3)
            const middle = playersCopy?.slice(3, 5)
            const bottom = playersCopy?.slice(5, 8)

            setTopPlayers(top)
            setMiddlePlayers(middle)
            setBottomPlayers(bottom)
        }

        splitPlayers()
    }, [players, socket, setPlayers])

    return {
        topPlayers,
        middlePlayers,
        bottomPlayers
    }
}