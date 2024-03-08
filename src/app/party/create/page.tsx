"use client"
import { Button, Input } from "@/components";
import Image from "next/image";
import { useCreateForm } from "./hooks/useCreateForm";

export default function CreatePartyPage() {
    const { partyName, handleChange, handleSubmit, errors } = useCreateForm();

    return (
        <main className="create-party">
            <header className="header">
                <div className="banner">
                    <Image src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} className="poker" />
                    <h1 className="title">Crear Partida</h1>
                </div>
            </header>
            <section className="create-content">
                <form action="" className="create-form" onSubmit={handleSubmit}>
                    <Input label="Nombra la partida" name="name" type="text" placeholder="Nombre de la partida" value={partyName} required onChange={handleChange} errors={errors} />
                    <Button text="Crear partida" variant="primary" isDisabled={errors.length > 0 || partyName == ''} />
                </form>
            </section>
        </main>
    )
}