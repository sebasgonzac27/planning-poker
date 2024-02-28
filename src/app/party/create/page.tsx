"use client"
import { ButtonAtom, InputAtom } from "@/design-system";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const validateName = (name: string) => {
    // El nombre tiene entre 5 y 20 caracteres, no puede tener caracteres especiales (_,.*#/-), maximo puede tener 3 numeros el nombre, y no puede contener solo numeros
    const errors: string[] = [];
    if (name.length < 5) {
        errors.push('El nombre de la partida debe tener al menos 5 caracteres.');
    }
    if (name.length > 20) {
        errors.push('El nombre de la partida no debe tener más de 20 caracteres.');
    }
    if (name.match(/[_.*#/-]/)) {
        errors.push('El nombre de la partida no puede contener caracteres especiales.');
    }
    if ((name.match(/\d/g) ?? []).length > 3) {
        errors.push('El nombre de la partida no puede tener más de 3 números.');
    }
    return errors;
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
                <form action="" className="create-form" autoComplete="off" onSubmit={handleSubmit}>
                    <InputAtom label="Nombra la partida" name="name" type="text" placeholder="Nombre de la partida" value={name} required onChange={handleChange} errors={errors} />
                    <ButtonAtom text="Crear partida" variant="primary" isDisabled={errors.length > 0 || name == ''} />
                </form>
            </main>
        </section>
    )
}