import styles from './player.module.scss'
import { Avatar, Card } from '@/design-system'

import { Player as PlayerT } from '@/types'

const ROL = {
  player: 'player',
  viewer: 'viewer'
}

export default function Player ({ player }: { player: PlayerT }) {
  return (
        <div className={styles.player}>
            {player.role === ROL.player && (
                <Card className={styles.player__card} variant='small' />
            )}
            {player.role === ROL.viewer && (
                <Avatar variant="large" initials={player.username.slice(0, 2)} />
            )}
            <span className={styles.player__name}>{player.username}</span>
        </div>
  )
}
