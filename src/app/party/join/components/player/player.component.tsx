import styles from './player.module.scss'
import { Avatar, Card } from '@/design-system'
import { Player as PlayerT, PlayerRole } from '@/core'

export default function Player ({ player }: { player: PlayerT }) {
  return (
        <div className={styles.player}>
            {player.role === PlayerRole.Player && (
                <Card className={styles.player__card} variant='small' />
            )}
            {player.role === PlayerRole.Viewer && (
                <Avatar variant="large" initials={player.username.slice(0, 2)} />
            )}
            <span className={styles.player__name}>{player.username}</span>
        </div>
  )
}
