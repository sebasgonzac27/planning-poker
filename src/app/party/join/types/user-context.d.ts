import { Dispatch } from 'react'
import { PlayerRole } from '@/types'
import { SetState } from '@/core'

export interface UserContext {
    username: string,
    setUsername: Dispatch<string>,
    role: PlayerRole
    setRole: SetState<PlayerRole>
    isOwner: boolean,
    setIsOwner: SetState<boolean>
}
