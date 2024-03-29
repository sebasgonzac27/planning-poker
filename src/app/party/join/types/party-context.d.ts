import { Player, SetState } from "@/types";
import { Dispatch } from "react";
import { Socket } from "socket.io-client";

export interface PartyContext {
    socket: Socket,
    partyName: string,
    setPartyName: SetState<string>,
    players: Player[]
    setPlayers: SetState<Player[]>,
    userLoggedIn: boolean,
    setUserLoggedIn: SetState<boolean>
}