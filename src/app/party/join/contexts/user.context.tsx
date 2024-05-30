import { ReactElement, createContext, useState } from 'react'
import { UserContext as UserContextType } from '../types'
import { PlayerRole } from '@/core'

export const UserContext = createContext<UserContextType | null>(null)

export function UserProvider ({ children }: { children: ReactElement }) {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState<PlayerRole>(PlayerRole.Player)
  const [isOwner, setIsOwner] = useState(false)
  const [vote, setVote] = useState<string | null>(null)

  return (
        <UserContext.Provider value={
            {
              username,
              setUsername,
              role,
              setRole,
              isOwner,
              setIsOwner,
              vote,
              setVote
            }
        }>
            {children}
        </UserContext.Provider>
  )
}
