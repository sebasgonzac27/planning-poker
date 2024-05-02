import styles from './cards.module.scss'
import { Card } from '@/design-system'
import { usePartyContext, useUserContext } from '../../hooks'
import { PlayerRole } from '@/core'

const POINTS = ['1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?', '☕️']
const API_URL = process.env.API_URL || 'http://localhost:3001'

export default function Cards () {
  const { role, vote, setVote } = useUserContext()
  const { userLoggedIn, revealed, socket, partyId } = usePartyContext()

  const handleCardClick = (point: string) => {
    let votePoint: string | null
    if (vote === point) {
      votePoint = null
    } else {
      votePoint = point
    }

    setVote(votePoint)

    fetch(`${API_URL}/party/vote`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ vote: votePoint, roomId: partyId, userId: socket.id })
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Error voting')
      }
    }).catch((error) => {
      console.error(error)
    })
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
