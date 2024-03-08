import { Avatar, Card } from "@/components";
import { Player } from "@/types";

const ROL = {
    PLAYER: 'player',
    VIEWER: 'viewer',
}

export default function Player({ player }: { player: Player }) {
    return (
        <div className="player">
            {player.role === ROL.PLAYER && (
                <Card>
                </Card>
            )}
            {player.role === ROL.VIEWER && (
                <Avatar variant="lg" initials={player.username.slice(0, 2)} />
            )}
            <span>{player.username}</span>
        </div>
    )
}