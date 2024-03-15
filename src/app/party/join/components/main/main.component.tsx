import styles from './main.module.scss'
import { Header, NewPlayer, Playground } from "..";
import { useEffect } from 'react';
import { usePartyContext, useUserContext } from '../../hooks';
import { Player } from '@/types';

interface Props {
    partyId: string;
}

export default function Main({ partyId }: Props) {
    const { socket, setPartyName, setPlayers } = usePartyContext();
    const { setUsername, setRole, setIsOwner } = useUserContext();

    useEffect(() => {
        socket.on('join-party', ({ party, players }) => {
            setPartyName(party.name)
            const me = players.find((p: Player) => p.socketId === socket.id)
            setPlayers(players)
            setUsername(me.username)
            setRole(me.role)
            setIsOwner(me.isOwner)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <main className={styles.join}>
            <NewPlayer partyId={partyId} />
            <Header />
            <Playground />
        </main>
    )
}