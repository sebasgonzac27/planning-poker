import { Button, Input, Modal, RadioGroup, Radio } from "@/design-system"
import { usePartyContext, useUserContext } from "../hooks"
import React, { useEffect, useState } from "react"
import { Player, PlayerRole } from "@/types"
import { validateInput } from "@/utils"

export default function NewPlayer({ partyId }: { partyId: string }) {
    const { socket, userLoggedIn, setUserLoggedIn, setPlayers, setPartyName } = usePartyContext()
    const { setUsername, setRole, setIsOwner } = useUserContext()
    const [errors, setErrors] = useState<string[]>([])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)
        const name = formData.get('name') as string
        const role = formData.get('role-player') as PlayerRole

        socket.emit('join-party', { partyId, name, role })
        setUserLoggedIn(true)
    }

    useEffect(() => {
        socket.on('join-party', ({ party, players }) => {
            setPartyName(party.name)
            const me = players.find((p: Player) => p.socketId === socket.id)
            setPlayers(players)
            setUsername(me.username)
            setRole(me.role)
            setIsOwner(me.isOwner)
        })
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrors(validateInput(e.target.value))
    }

    return (
        <>
            {!userLoggedIn && (
                <Modal contentClassName="modal-name">
                    <Modal.Body>
                        <form className="form-name" onSubmit={handleSubmit}>
                            <Input
                                label="Tu nombre"
                                type="text"
                                placeholder="John Doe"
                                name="name"
                                onChange={handleChange}
                                errors={errors}
                            />
                            <RadioGroup>
                                <Radio label='Jugador' name="role-player" value={'player'} defaultChecked />
                                <Radio label='Espectador' name="role-player" value={'viewer'} />
                            </RadioGroup>
                            <Button text="Continuar" variant="primary" disabled={errors.length > 0} />
                        </form>
                    </Modal.Body>
                </Modal>
            )}
        </>
    )
}