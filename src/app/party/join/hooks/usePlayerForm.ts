import React, { useState } from "react";
import { PlayerRole } from "@/types";
import { usePartyContext, useUserContext } from ".";
import { validateInput } from "@/utils";

export default function usePlayerForm(partyId: string) {
    const { socket, setUserLoggedIn, userLoggedIn } = usePartyContext();
    const { setUsername, setRole: setRoleContext } = useUserContext();

    const [name, setName] = useState("");
    const [role, setRole] = useState<PlayerRole | null>(null);
    const [errors, setErrors] = useState<string[]>([]);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        setErrors(validateInput(e.target.value))
    };

    const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRole(e.target.value as PlayerRole);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        socket.emit('join-party', { partyId, name, role });
        setUsername(name);
        setRoleContext(role as PlayerRole);
        setUserLoggedIn(true);
    };

    return { name, role, errors, userLoggedIn, handleNameChange, handleRoleChange, handleSubmit };
}