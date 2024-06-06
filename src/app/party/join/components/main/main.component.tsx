'use client'
import styles from './main.module.scss'
import { Header, NewPlayer, Playground, Cards, Stats, Invite } from '..'
import { useEffect } from 'react'
import { usePartyContext, useUserContext } from '../../hooks'
import { Player } from '@/core'
interface Props {
    partyId: string;
}

export default function Main ({ partyId }: Props) {
  const { socket, setPartyName, setPlayers, setPartyId, setAverage, setTotalCount, setRevealed } = usePartyContext()
  const { setUsername, setRole, setIsOwner, setVote } = useUserContext()

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
      setAverage(average)
      setTotalCount(votesCount)
      setRevealed(true)
    })

    socket.on('reset-party', ({ players }) => {
      updatePlayers(players)
      setVote(null)
      setAverage(0)
      setRevealed(false)
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
            <Invite/>
        </main>
  )
}
