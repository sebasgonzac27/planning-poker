'use client'
import styles from './main.module.scss'
import { Header, NewPlayer, Playground, Cards, Stats } from '..'
import { useEffect } from 'react'
import { usePartyContext, useUserContext } from '../../hooks'
import { Player } from '@/core'

interface Props {
    partyId: string;
}

export default function Main ({ partyId }: Props) {
  const { socket, setPartyName, setPlayers, setPartyId, setAverage, setTotalCount } = usePartyContext()
  const { setUsername, setRole, setIsOwner } = useUserContext()

  useEffect(() => {
    setPartyId(partyId)

    const updatePlayers = (players: Player[]) => {
      setPlayers(players)
      const me = players.find((p: Player) => p.socketId === socket.id)
      if (me) {
        setUsername(me.username)
        setRole(me.role)
        setIsOwner(me.isOwner)
      }
    }

    socket.on('join-party', ({ party, players }) => {
      setPartyName(party.name)
      updatePlayers(players)
    })

    socket.on('update-players', ({ players }) => {
      updatePlayers(players)
    })

    socket.on('reveal-cards', ({ average, votesCount }) => {
      console.log('Entro a reveal-cards')
      setAverage(average)
      setTotalCount(votesCount)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
        <main className={styles.join}>
            <NewPlayer />
            <Header />
            <Playground />
            <Cards />
            <Stats/>
        </main>
  )
}
