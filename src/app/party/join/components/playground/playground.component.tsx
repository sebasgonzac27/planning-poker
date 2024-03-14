import styles from './playground.module.scss'
import { Desk } from "..";
import { usePartyContext } from "../../hooks";
import Player from '../player/player.component';

export default function Playground() {
    const { players, socket } = usePartyContext()
    const myPlayer = players.find(p => p.socketId === socket.id);
    const otherPlayers = players.filter(p => p.socketId !== socket.id);
    const topPlayers = otherPlayers.slice(0, 4);
    const leftPlayers = otherPlayers.slice(4, 6);
    const rightPlayers = otherPlayers.slice(6, 8);
    const bottomPlayers = otherPlayers.slice(8, 11);

    return (
        <section className={styles.content}>
            <div className={styles['content__top-players']}>
                {[...topPlayers].map((p) => <Player key={p.socketId} player={p} />)}
            </div>
            <div className={styles['content__middle-area']}>
                <div className={styles['content__side-players']}>
                    {[...leftPlayers].map((p) => <Player key={p.socketId} player={p} />)}
                </div>
                <Desk />
                <div className={styles['content__side-players']}>
                    {[...rightPlayers].map((p) => <Player key={p.socketId} player={p} />)}
                </div>
            </div>
            <div className={styles['content__top-players']}>
                {bottomPlayers[0] && <Player key={bottomPlayers[0].socketId} player={bottomPlayers[0]} />}
                {myPlayer && <Player key={myPlayer.socketId} player={myPlayer} />}
                {[...bottomPlayers].slice(1).map((p) => <Player key={p.socketId} player={p} />)}
            </div>
        </section>
    )
}