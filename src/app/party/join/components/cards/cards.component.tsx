import styles from './cards.module.scss'
import { Card } from '@/design-system'
import { usePartyContext, useUserContext } from '../../hooks'
import { PlayerRole } from '@/core'
import { vote as Vote } from '@/services/api'

const POINTS = ['1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?', '☕️']

export default function Cards () {
  const { role, vote, setVote } = useUserContext()
  const { userLoggedIn, revealed, socket, partyId } = usePartyContext()

  const handleCardClick = async (point: string) => {
    let votePoint: string | null
    if (vote === point) {
      votePoint = null
    } else {
      votePoint = point
    }

    setVote(votePoint)
    await Vote({ vote: votePoint as string, roomId: partyId, userId: socket.id ?? '' })
  }

  return (
    <>
      {userLoggedIn && !revealed && role === PlayerRole.Player && (
        <div className={styles.cards}>
          <h3 className={styles.cards__title}>Elige una carta 👇</h3>
          <div className={styles.cards__container}>
            {POINTS.map((point, index) => (
              <Card className={styles.cards__card} variant='large' fill={point === vote} key={index} onClick={() => handleCardClick(point)}>{point}</Card>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
