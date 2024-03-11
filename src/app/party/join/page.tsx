"use client"
import { redirect, useSearchParams } from "next/navigation"
import { PartyProvider, UserProvider } from "./contexts"
import { Header, NewPlayer, Playground } from "./components"

export default function JoinPartyPage() {
    const searchParams = useSearchParams()
    const partyId = searchParams.get('partyId') || '';

    if (!partyId) {
        redirect('/party/create')
    }

    return (
        <PartyProvider>
            <UserProvider>
                <main className="join-party">
                    <NewPlayer partyId={partyId} />
                    <Header />
                    <Playground />
                </main>
            </UserProvider>
        </PartyProvider>
    )
}