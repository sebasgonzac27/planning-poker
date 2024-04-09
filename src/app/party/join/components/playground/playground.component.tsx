import styles from './playground.module.scss'

import { usePartyContext } from '../../hooks'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import Desktop from './desktop/desktop'
import Mobile from './mobile/mobile'

export default function Playground () {
  const { players, socket } = usePartyContext()

  const { width } = useWindowDimensions()

  return (
    <div className={styles.playground}>
      {width > 768 ? <Desktop players={players} socket={socket} /> : <Mobile players={players} socket={socket}/>}
    </div>
  )
}
