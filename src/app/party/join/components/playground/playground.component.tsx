import styles from './playground.module.scss'
import { Desk } from '..'
import { usePartyContext } from '../../hooks'
import Player from '../player/player.component'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export default function Playground () {
  const { players, socket } = usePartyContext()
  const myPlayer = players.find(p => p.socketId === socket.id)
  const otherPlayers = players.filter(p => p.socketId !== socket.id)

  const { width } = useWindowDimensions()

  let topPlayers, leftPlayers, rightPlayers, bottomPlayers

  if (width < 768) {
    topPlayers = otherPlayers.slice(0, 2)
    leftPlayers = otherPlayers.slice(2, 6)
    rightPlayers = otherPlayers.slice(6, 10)
    bottomPlayers = otherPlayers.slice(10, 11)
  } else {
    topPlayers = otherPlayers.slice(0, 4)
    leftPlayers = otherPlayers.slice(4, 6)
    rightPlayers = otherPlayers.slice(6, 8)
    bottomPlayers = otherPlayers.slice(8, 11)
  }

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
