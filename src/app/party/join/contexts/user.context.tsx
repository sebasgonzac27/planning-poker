import { ReactElement, createContext, useState } from 'react'
import { UserContext as UserContextType } from '../types'
import { PlayerRole } from '@/types'

export const UserContext = createContext<UserContextType | null>(null)

export function UserProvider ({ children }: { children: ReactElement }) {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState<PlayerRole>('player')
  const [isOwner, setIsOwner] = useState(false)

  return (
        <UserContext.Provider value={
            {
              username,
              setUsername,
              role,
              setRole,
              isOwner,
              setIsOwner
            }
        }>
            {children}
        </UserContext.Provider>
  )
}
