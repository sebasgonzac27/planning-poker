import styles from './playground.module.scss'
import { Desk } from '..'
import { usePartyContext } from '../../hooks'
import Player from '../player/player.component'
import { Player as PlayerT } from '@/core'
// import useWindowDimensions from '../../hooks/useWindowDimensions'

export default function Playground () {
  const { players, socket } = usePartyContext()
  const myPlayer = players.find(p => p.socketId === socket.id) as PlayerT
  const otherPlayers = players.filter(p => p.socketId !== socket.id)

  // const { width } = useWindowDimensions()

  // Variables para la distribución circular
  let currentZone = 0 // Índice de la zona actual (0: arriba, 1: izquierda, 2: derecha, 3: abajo)
  let playerIndex = 0 // Índice del jugador actual

  const topPlayers: PlayerT[] = []
  const leftPlayers: PlayerT[] = []
  const rightPlayers: PlayerT[] = []
  const bottomPlayers: PlayerT[] = [myPlayer]

  const containers = [topPlayers, leftPlayers, rightPlayers, bottomPlayers]
  const maxSizes = [4, 2, 2, 4]

  while (playerIndex < otherPlayers.length) {
    const player = otherPlayers[playerIndex]
    containers[currentZone].push(player)
    playerIndex++

    // Avanzar a la siguiente zona
    currentZone = (currentZone + 1) % containers.length

    // Si la zona actual está llena, avanzar a la siguiente
    if (containers[currentZone].length >= maxSizes[currentZone]) {
      currentZone = (currentZone + 1) % containers.length
    }
  }

  return (
    <section className={styles.content}>
      <div className={styles['content__top-players']}>
        {topPlayers.map((p) => <Player key={p.socketId} player={p} />)}
      </div>
      <div className={styles['content__middle-area']}>
        <div className={styles['content__side-players']}>
          {leftPlayers.map((p) => <Player key={p.socketId} player={p} />)}
        </div>
        <Desk />
        <div className={styles['content__side-players']}>
          {rightPlayers.map((p) => <Player key={p.socketId} player={p} />)}
        </div>
      </div>
      <div className={styles['content__top-players']}>
        {bottomPlayers.map((p) => p && <Player key={p.socketId} player={p} />)}
      </div>
    </section>
  )
}
