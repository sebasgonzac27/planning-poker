import { useMemo } from 'react'
import { usePartyContext, useUserContext } from '../../../hooks'
import { Button } from '@/design-system'
import { getAverage, resetParty } from '@/services'

export default function Actions () {
  const { revealed, partyId, players } = usePartyContext()
  const { isOwner } = useUserContext()

  const votesCount = useMemo(() => {
    return players.reduce((acc, player) => {
      if (player.vote) {
        acc++
      }
      return acc
    }, 0)
  }, [players])

  const handleReveal = async () => {
    await getAverage(partyId)
  }

  const handleReset = async () => {
    await resetParty(partyId)
  }

  return (
  <>
    {!revealed && isOwner && votesCount > 0 && <Button text="Revelar cartas" variant="tertiary" onClick={handleReveal} />}
    {revealed && isOwner && <Button text="Nueva votación" variant="tertiary" onClick={handleReset}/>}
  </>
  )
}
