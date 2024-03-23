import { validateInput } from "@/utils";
import React, { useState } from "react";
import { useCreateParty } from ".";

export function useCreateForm() {
    const [partyName, setPartyName] = useState<string>('')
    const [errors, setErrors] = useState<string[]>([])

    const { createParty } = useCreateParty();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPartyName(e.target.value)
        setErrors(validateInput(e.target.value))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (errors.length > 0) {
            return;
        }

        createParty({ partyName });
    }

    return {
        partyName,
        errors,
        handleChange,
        handleSubmit
    }
}
