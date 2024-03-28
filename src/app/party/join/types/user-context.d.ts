import { Dispatch } from 'react'
import { PlayerRole, SetState } from '@/types'

export interface UserContext {
    username: string,
    setUsername: Dispatch<string>,
    role: PlayerRole
    setRole: SetState<PlayerRole>
    isOwner: boolean,
    setIsOwner: SetState<boolean>
}
