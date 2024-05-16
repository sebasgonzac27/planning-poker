import { validateInput } from '@/utils'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createParty } from '@/services/api'

export function useCreateForm () {
  const [partyName, setPartyName] = useState<string>('')
  const [errors, setErrors] = useState<string[]>([])
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPartyName(e.target.value)
    setErrors(validateInput(e.target.value))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (errors.length > 0) {
      return
    }
    const id = await createParty(partyName)
    router.push(`/party/join?partyId=${id}`)
  }

  return {
    partyName,
    errors,
    handleChange,
    handleSubmit
  }
}
