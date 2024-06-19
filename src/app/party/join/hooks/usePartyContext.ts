import { useContext } from 'react'
import { PartyContext } from '../contexts'

export default function usePartyContext () {
  const partyContext = useContext(PartyContext)
  if (!partyContext) {
    throw new Error('usePartyContext must be used within a PartyProvider')
  }
  return partyContext
}
