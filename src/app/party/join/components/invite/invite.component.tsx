import { usePartyContext } from '../../hooks'
import styles from './invite.module.scss'
import { Button, Modal } from '@/design-system'
import { toast } from 'sonner'

export default function Invite () {
  const { inviteModal, setInviteModal } = usePartyContext()
  const url = typeof window !== 'undefined' ? window.location.href : ''

  function handleCloseModal () {
    setInviteModal(false)
  }

  async function handleCopyLink () {
    try {
      await navigator.clipboard.writeText(url)
      toast.success('Se ha copiado el link al portapapeles.')
      setInviteModal(false)
    } catch {
      toast.error('No se ha podido copiar el link al portapapeles.')
    }
  }

  return (
    <>
      {inviteModal &&
        <Modal contentClassName={styles.invite}>
          <Modal.Header className={styles.invite__header}>
            <h2 className={styles.invite__title}>Invitar jugadores</h2>
            <button className={styles.invite__close} onClick={handleCloseModal}>X</button>
          </Modal.Header>
          <Modal.Body className={styles.invite__body}>
            <p className={styles.invite__url}>{url}</p>
            <Button text='Copiar link' variant='primary' onClick={handleCopyLink} />
          </Modal.Body>
        </Modal>
      }
    </>
  )
}
