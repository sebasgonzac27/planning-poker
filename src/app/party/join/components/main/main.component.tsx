'use client'
import styles from './main.module.scss'
import { Header, NewPlayer, Playground, Cards } from '..'
import { useEffect } from 'react'
import { usePartyContext, useUserContext } from '../../hooks'
import { Player } from '@/core'

interface Props {
    partyId: string;
}

export default function Main ({ partyId }: Props) {
  const { socket, setPartyName, setPlayers } = usePartyContext()
  const { setUsername, setRole, setIsOwner } = useUserContext()

  useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
        <main className={styles.join}>
            <NewPlayer partyId={partyId} />
            <Header />
            <Playground />
            <Cards partyId={partyId}/>
        </main>
  )
}
