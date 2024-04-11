import styles from './cards.module.scss'
import { Card } from '@/design-system'
import { usePartyContext, useUserContext } from '../../hooks'
import { PlayerRole } from '@/core'

const POINTS = ['1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?', '☕️']

export default function Cards () {
  const { role } = useUserContext()
  const { userLoggedIn } = usePartyContext()
  return (
    <>
      {userLoggedIn && role === PlayerRole.Player && (
        <div className={styles.cards}>
          <h3 className={styles.cards__title}>Elige una carta 👇</h3>
          <div className={styles.cards__container}>
            {POINTS.map((point, index) => (
              <Card className={styles.cards__card} variant='large' key={index}>{point}</Card>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
