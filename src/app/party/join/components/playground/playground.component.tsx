import styles from './playground.module.scss'

import { usePartyContext } from '../../hooks'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import Desktop from './desktop/desktop'
import Mobile from './mobile/mobile'
import { useEffect, useState } from 'react'

export default function Playground () {
  const { players, socket } = usePartyContext()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const { width } = useWindowDimensions()

  return (isClient &&
    <div className={styles.playground}>
      { width > 768 ? <Desktop players={players} socket={socket} /> : <Mobile players={players} socket={socket}/> }
    </div>
  )
}
