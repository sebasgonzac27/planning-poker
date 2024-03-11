import styles from './header.module.scss';
import { Avatar, Button } from "@/components";
import Image from "next/image";
import { usePartyContext, useUserContext } from "../../hooks";

export default function Header() {
    const { partyName } = usePartyContext()
    const { username } = useUserContext()

    return (
        <header className={styles.header}>
            <Image priority src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} />
            <h4 className={styles['header__title']}>{partyName}</h4>
            <div className={styles['header__badge']}>
                <Avatar variant="small" initials={username.slice(0, 2) || ''} />
                <Button text="Invitar jugadores" variant="secondary" />
            </div>
        </header>
    )
}