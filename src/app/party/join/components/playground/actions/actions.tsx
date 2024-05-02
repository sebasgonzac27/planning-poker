import { usePartyContext, useUserContext } from '../../../hooks'
import { Button } from '@/design-system'

const API_URL = process.env.API_URL || 'http://localhost:3001'

export default function Actions () {
  const { revealed, setRevealed, partyId } = usePartyContext()
  const { isOwner } = useUserContext()

  const handleReveal = () => {
    console.log('Click en revelar cartas')
    fetch(`${API_URL}/party/average`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ roomId: partyId })
    }).then(res => {
      if (res.status === 204) {
        setRevealed(true)
      }
    })
  }

  return (
  <>
    {!revealed && isOwner && <Button text="Revelar cartas" variant="tertiary" onClick={handleReveal} />}
    {revealed && isOwner && <Button text="Nueva votación" variant="tertiary" />}
  </>
  )
}
