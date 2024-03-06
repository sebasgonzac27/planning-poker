"use client"
import { Desk } from ".";
import { usePartyContext } from "../hooks";
import Player from './player';

export default function Playground() {
    const { players, socket } = usePartyContext()
    const myPlayer = players.find(p => p.socketId === socket.id);
    const otherPlayers = players.filter(p => p.socketId !== socket.id);
    const topPlayers = otherPlayers.slice(0, 3);
    const bottomPlayers = otherPlayers.slice(3, 5);
    const sidePlayers = otherPlayers.slice(5);

    return (
        <section className="join-content">
            <div className="top-players">
                {[...topPlayers].map((p) => <Player key={p.socketId} player={p} />)}
            </div>
            <div className="middle-area">
                <div className="side-player">
                    {sidePlayers[0] && <Player key={sidePlayers[0].socketId} player={sidePlayers[0]} />}
                </div>
                <Desk />
                <div className="side-player">
                    {sidePlayers[1] && <Player key={sidePlayers[1].socketId} player={sidePlayers[1]} />}
                </div>
            </div>
            <div className="top-players">
                {bottomPlayers[0] && <Player key={bottomPlayers[0].socketId} player={bottomPlayers[0]} />}
                {myPlayer && <Player key={myPlayer.socketId} player={myPlayer} />}
                {bottomPlayers[1] && <Player key={bottomPlayers[1].socketId} player={bottomPlayers[1]} />}
            </div>
        </section>
    )
}