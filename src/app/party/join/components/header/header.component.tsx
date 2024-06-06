import styles from './header.module.scss'
import { Avatar, Button } from '@/design-system'
import Image from 'next/image'
import { usePartyContext, useUserContext } from '../../hooks'

export default function Header () {
  const { partyName, setInviteModal } = usePartyContext()
  const { username } = useUserContext()

  const handleClick = () => {
    setInviteModal(true)
  }

  return (
        <header className={styles.header}>
            <Image className={styles.header__logo} priority src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} />
            <h4 className={styles.header__title}>{partyName}</h4>

            <div className={styles.header__badge}>
                <Avatar variant="small" initials={username.slice(0, 2) || ''} />
                <div className={styles.header__button}>
                    <Button text="Invitar jugadores" variant="secondary" onClick={handleClick}/>
                </div>
            </div>
        </header>
  )
}
