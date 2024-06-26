import { Player, SetState } from '@/core'
import { Socket } from 'socket.io-client'
import { Distribution } from './distribution'

export interface PartyContext {
    socket: Socket,
    partyId: string,
    setPartyId: SetState<string>,
    partyName: string,
    setPartyName: SetState<string>,
    players: Player[]
    setPlayers: SetState<Player[]>,
    userLoggedIn: boolean,
    setUserLoggedIn: SetState<boolean>,
    revealed: boolean,
    setRevealed: SetState<boolean>,
    average: number,
    setAverage: SetState<number>,
    totalCount: Record<string, number>,
    setTotalCount: SetState<Record<string, number>>,
    inviteModal: boolean,
    setInviteModal: SetState<boolean>,
    menuModal: boolean,
    setMenuModal: SetState<boolean>,
    distribution: Distribution | null,
    setDistribution: SetState<Distribution | null>
}
