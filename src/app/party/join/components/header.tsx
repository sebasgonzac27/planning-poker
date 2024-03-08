import { Avatar, Button } from "@/components";
import Image from "next/image";
import { usePartyContext, useUserContext } from "../hooks";

export default function Header() {
    const { partyName } = usePartyContext()
    const { username } = useUserContext()

    return (
        <header className="header">
            <Image priority src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} className="poker" />
            <h4 className="title-party">{partyName}</h4>
            <div className="right-badge">
                <Avatar variant="md" initials={username.slice(0, 2) || ''} />
                <Button text="Invitar jugadores" variant="secondary" />
            </div>
        </header>
    )
}