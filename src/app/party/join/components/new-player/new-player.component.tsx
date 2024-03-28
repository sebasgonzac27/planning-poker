import styles from './new-player.module.scss'
import { Button, Input, Modal, RadioGroup, Radio } from '@/design-system'
import usePlayerForm from '../../hooks/usePlayerForm'

export default function NewPlayer ({ partyId }: { partyId: string }) {
  const { name, errors, userLoggedIn, handleNameChange, handleRoleChange, handleSubmit } = usePlayerForm(partyId)
  return (
        <>
            {!userLoggedIn && (
                <Modal contentClassName={styles.modal}>
                    <Modal.Body>
                        <form className={styles.modal__form} onSubmit={handleSubmit}>
                            <Input
                                label="Tu nombre"
                                type="text"
                                placeholder="John Doe"
                                name="name"
                                onChange={handleNameChange}
                                errors={errors}
                            />
                            <RadioGroup>
                                <Radio label='Jugador' name="role-player" value={'player'} defaultChecked onChange={handleRoleChange} />
                                <Radio label='Espectador' name="role-player" value={'viewer'} onChange={handleRoleChange} />
                            </RadioGroup>
                            <Button text="Continuar" variant="primary" disabled={errors.length > 0 || !name} />
                        </form>
                    </Modal.Body>
                </Modal>
            )}
        </>
  )
}
