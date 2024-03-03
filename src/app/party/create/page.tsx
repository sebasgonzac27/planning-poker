"use client"
import { ButtonAtom, InputAtom } from "@/design-system";
import { validateInput } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const validateName = (name: string) => {
    return validateInput(name);
}

export default function CreatePartyPage() {
    const [name, setName] = useState<string>('');
    const [errors, setErrors] = useState<string[]>([]);
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setErrors(validateName(e.target.value));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (errors.length > 0) {
            return;
        }
        const API_URL = process.env.API_URL || 'http://localhost:3001'
        fetch(`${API_URL}/party`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        })
            .then(response => response.json())
            .then(data => {
                router.push('/party/join?partyId=' + data.id);
            }).catch(error => {
                console.error('Error:', error);
            })
    }

    return (
        <section className="create-party">
            <header className="header">
                <div className="banner">
                    <Image src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} className="poker" />
                    <h1 className="title">Crear Partida</h1>
                </div>
            </header>
            <main className="create-content">
                <form action="" className="create-form" onSubmit={handleSubmit}>
                    <InputAtom label="Nombra la partida" name="name" type="text" placeholder="Nombre de la partida" value={name} required onChange={handleChange} errors={errors} />
                    <ButtonAtom text="Crear partida" variant="primary" isDisabled={errors.length > 0 || name == ''} />
                </form>
            </main>
        </section>
    )
}