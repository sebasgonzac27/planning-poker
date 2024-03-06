
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { usePartyContext } from "../../join/hooks";

const API_URL = process.env.API_URL || 'http://localhost:3001'

export function useCreateParty() {
    const router = useRouter();
    const [error, setError] = useState<string>('')

    const createParty = ({ partyName }: { partyName: string }) => {
        fetch(`${API_URL}/party`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: partyName })
        })
            .then(response => response.json())
            .then(data => {
                router.push('/party/join?partyId=' + data.id);
            }).catch(error => {
                setError(error.message)
            })
    }

    return { createParty, error }
}