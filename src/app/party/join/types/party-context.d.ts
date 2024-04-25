import { Player, SetState } from '@/core'
import { Socket } from 'socket.io-client'

export interface PartyContext {
    socket: Socket,
    partyName: string,
    setPartyName: SetState<string>,
    players: Player[]
    setPlayers: SetState<Player[]>,
    userLoggedIn: boolean,
    setUserLoggedIn: SetState<boolean>,
    revealed: boolean,
    setRevealed: SetState<boolean>
}
