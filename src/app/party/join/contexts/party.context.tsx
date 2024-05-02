import { ReactElement, createContext, useState } from 'react'
import { io } from 'socket.io-client'
import { PartyContext as PartyContextType } from '../types'
import { Player } from '@/core'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

const socket = io(API_URL, {
  reconnection: false
})

export const PartyContext = createContext<PartyContextType | null>(null)

export function PartyProvider ({ children }: { children: ReactElement }) {
  const [partyId, setPartyId] = useState<string>('')
  const [partyName, setPartyName] = useState('')
  const [players, setPlayers] = useState<Player[]>([])
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [average, setAverage] = useState(0)
  const [totalCount, setTotalCount] = useState({})

  return (
        <PartyContext.Provider value={
            {
              socket,
              partyId,
              setPartyId,
              partyName,
              setPartyName,
              players,
              setPlayers,
              userLoggedIn,
              setUserLoggedIn,
              revealed,
              setRevealed,
              average,
              setAverage,
              totalCount,
              setTotalCount
            }
        }>
            {children}
        </PartyContext.Provider>
  )
}
