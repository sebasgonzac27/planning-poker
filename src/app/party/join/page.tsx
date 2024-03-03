"use client"
import { AvatarAtom, ButtonAtom, InputAtom, ModalMolecule } from "@/design-system";
import RadioAtom from "@/design-system/atoms/radio.atom";
import { validateInput } from "@/utils";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import IO from "socket.io-client";

type Role = "Jugador" | "Espectador";
type Player = {
    name: string,
    role: Role,
    socketId: string
}

const ROLES = {
    PLAYER: "Jugador",
    SPECTATOR: "Espectador"
} as const;

const validateName = (name: string) => {
    return validateInput(name);
}

export default function JoinPartyPage() {
    const params = useSearchParams();
    const partyId = params.get("partyId");
    const [partyName, setPartyName] = useState("");
    const [modalOpen, setModalOpen] = useState(true);
    const [name, setName] = useState("");
    const [role, setRole] = useState<Role>(ROLES.PLAYER);
    const [errors, setErrors] = useState<string[]>([]);
    const [players, setPlayers] = useState<Player[]>([])

    const socket = useMemo(() => IO("http://localhost:3001"), []);

    useEffect(() => {
        socket.on("joined-party", (name) => setPartyName(name))
        socket.on("players", (players) => setPlayers(players));

        return () => {
            socket.disconnect();
        }
    }, [socket, partyId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setErrors(validateName(e.target.value));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (errors.length > 0 || name === "") {
            return;
        }
        const userData = {
            name: name,
            role: role,
            partyId: partyId
        };
        socket.emit("join-party", userData);
        setModalOpen(false);
    }


    return (
        <section className="join-party">
            <header className="header">
                <Image src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} className="poker" />
                <h4 className="title-party">{partyName}</h4>
                <div className="right-badge">
                    <AvatarAtom variant="md" initials={players.find(player => player.socketId === socket.id)?.name.slice(0, 2) || ' '} />
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
                <ol>
                    {players.map((player, index) => {
                        return <li key={index}>{player.name}</li>
                    })}
                </ol>
            </main>
            <ModalMolecule isOpen={modalOpen} onClose={() => setModalOpen(false)} contentClassName="modal-name">
                <form className="form-name" onSubmit={handleSubmit}>
                    <InputAtom
                        label="Tu nombre"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={handleChange}
                        name="name"
                        errors={errors}
                    />
                    <div className="radio-group">
                        <RadioAtom label={ROLES.PLAYER} name="role-player" value={ROLES.PLAYER} isChecked={role === ROLES.PLAYER} onChange={(e) => setRole(e.target.value as Role)} />
                        <RadioAtom label={ROLES.SPECTATOR} name="role-player" value={ROLES.SPECTATOR} isChecked={role === ROLES.SPECTATOR} onChange={(e) => setRole(e.target.value as Role)} />
                    </div>
                    <ButtonAtom text="Continuar" variant="primary" isDisabled={errors.length > 0 || name == ''} />
                </form>
            </ModalMolecule>
        </section>
    );
}