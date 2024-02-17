"use client"
import { useSearchParams } from "next/navigation";

export default function JoinPartyPage() {
   const params = useSearchParams();
   const partyId = params.get("partyId");

    return (
        <div>
            <h1>Join Party</h1>
            <p>Party ID: {partyId}</p>
        </div>
    );
}