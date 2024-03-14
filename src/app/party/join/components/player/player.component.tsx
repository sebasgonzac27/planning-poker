import styles from './player.module.scss';
import { Avatar, Card } from "@/components";
import { Player } from "@/types";

const ROL = {
    player: 'player',
    viewer: 'viewer',
}

export default function Player({ player }: { player: Player }) {
    return (
        <div className={styles.player}>
            {player.role === ROL.player && (
                <Card variant='small' />
            )}
            {player.role === ROL.viewer && (
                <Avatar variant="large" initials={player.username.slice(0, 2)} />
            )}
            <span>{player.username}</span>
        </div>
    )
}