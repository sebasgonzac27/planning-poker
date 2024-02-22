"use client"
import { ButtonAtom, PokerAtom } from "@/design-system";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import IO from "socket.io-client";

export default function JoinPartyPage() {
    const params = useSearchParams();
    const partyId = params.get("partyId");
    const [partyName, setPartyName] = useState("");

    useEffect(() => {
        const socket = IO("http://localhost:3001");
        socket.emit("join-party", partyId);
        socket.on("joined-party", (name) => setPartyName(name))

        return () => {
            socket.disconnect();
        }
    }, [partyId]);

    return (
        <section className="join-party">
            <header className="header">
                <PokerAtom />
                <h4 className="title-party">{partyName}</h4>
                <div className="right-badge">
                    <span className="initials-name">JU</span>
                    <ButtonAtom text="Invitar jugadores" variant="secondary" />
                </div>
            </header>
            <main className="join-content">
                <div className="table-outline">
                    <div className="table-middle">
                        <div className="table-inner">
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}