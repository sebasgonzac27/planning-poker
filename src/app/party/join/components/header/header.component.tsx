import styles from './header.module.scss'
import { Avatar, Button } from '@/design-system'
import Image from 'next/image'
import { usePartyContext, useUserContext } from '../../hooks'
import { PlayerRole } from '@/core'
import { useState } from 'react'
import { toggleRole } from '@/services'

export default function Header () {
  const { partyName, setInviteModal, socket, partyId } = usePartyContext()
  const { username, role } = useUserContext()
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setInviteModal(true)
  }

  const handleEnter = () => {
    setShowMenu(true)
  }

  const handleLeave = () => {
    setShowMenu(false)
  }

  const handleToggle = () => {
    const toggle = role === PlayerRole.Player ? PlayerRole.Viewer : PlayerRole.Player

    toggleRole({ role: toggle, roomId: partyId, userId: socket.id || '' })
  }

  return (
    <header className={styles.header}>
      <Image className={styles.header__logo} priority src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} />
      <h4 className={styles.header__title}>{partyName}</h4>

      <div className={styles.header__badge}>
        <div className={styles.header__avatar} onMouseLeave={handleLeave} onMouseEnter={handleEnter}>
          <Avatar variant="small" initials={username.slice(0, 2) || ''}/>
          {showMenu &&
            <div className={styles.header__dropdown}>
              <Button text={`Cambiar a ${role === PlayerRole.Player ? 'Espectador' : 'Jugador'}`} variant='primary' onClick={handleToggle}/>
            </div>
          }
        </div>
        <div className={styles.header__button}>
          <Button text="Invitar jugadores" variant="secondary" onClick={handleClick} />
        </div>
      </div>
    </header>
  )
}
