import React, { useState } from 'react'
import { PlayerRole } from '@/core'
import { usePartyContext, useUserContext } from '.'
import { validateInput } from '@/utils'
import { toast } from 'sonner'

export default function usePlayerForm (partyId: string) {
  const { socket, setUserLoggedIn, userLoggedIn } = usePartyContext()
  const { setUsername, setRole: setRoleContext } = useUserContext()

  const [name, setName] = useState<string>('')
  const [role, setRole] = useState<PlayerRole>(PlayerRole.Player)
  const [errors, setErrors] = useState<string[]>([])

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setErrors(validateInput(e.target.value))
  }

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value as PlayerRole)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (errors.length > 0) {
      toast.error('Ingrese un nombre válido.')
      return
    }
    socket.emit('join-party', { partyId, name, role })
    setUsername(name)
    setRoleContext(role as PlayerRole)
    setUserLoggedIn(true)
  }

  return { name, role, errors, userLoggedIn, handleNameChange, handleRoleChange, handleSubmit }
}
