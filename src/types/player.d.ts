import { PlayerRole } from ".";

export interface Player {
    socketId: string
    username: string,
    role: PlayerRole,
    isOwner: boolean,
    vote?: number
}