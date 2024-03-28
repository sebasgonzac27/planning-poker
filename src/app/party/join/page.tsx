'use client'
import { redirect, useSearchParams } from 'next/navigation'
import { PartyProvider, UserProvider } from './contexts'
import { Main } from './components'

export default function JoinPartyPage () {
  const searchParams = useSearchParams()
  const partyId = searchParams.get('partyId') || ''

  if (!partyId) {
    redirect('/party/create')
  }

  return (
        <PartyProvider>
            <UserProvider>
                <Main partyId={partyId} />
            </UserProvider>
        </PartyProvider>
  )
}
