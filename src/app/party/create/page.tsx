"use client"
import { ButtonAtom, InputAtom, PokerAtom } from "@/design-system";
import { useState } from "react";

export default function CreateParty() {
    const [name, setName] = useState<string>('');

    return (
        <section className="create-party">
            <header className="header">
                <div className="banner">
                    <PokerAtom />
                    <h1 className="title">Crear Partida</h1>
                </div>
            </header>
            <main className="create-content">
                <form action="" className="create-form">
                    <InputAtom label="Nombra la partida" name="name" type="text" placeholder="Nombre de la partida" value={name} onChange={(e) => setName(e.target.value)} />
                    <ButtonAtom text="Crear partida" variant="primary" />
                </form>
            </main>
        </section>
    )
}