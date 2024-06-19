import styles from './menu.module.scss'
import { Button, Modal, Select } from '@/design-system'
import { usePartyContext } from '../../hooks'
import { IoCloseOutline } from 'react-icons/io5'
import { useEffect, useState } from 'react'
import { getDistributions, getRoles } from '@/services'
import { Option } from '@/core'
import { Distribution } from '../../interfaces'

export default function Menu () {
  const { menuModal, setMenuModal } = usePartyContext()
  const [roles, setRoles] = useState<Option[]>([])
  const [distributions, setDistributions] = useState<Option[]>([])

  const fetchRoles = async () => {
    const data = await getRoles()
    setRoles(data)
  }

  const fetchDistributions = async () => {
    const data = await getDistributions()
    const formattedData = data.map((distribution: Distribution) => ({ value: distribution.id, label: distribution.name }))
    setDistributions(formattedData)
  }

  useEffect(() => {
    fetchRoles()
    fetchDistributions()
  }, [])

  const handleCloseModal = () => {
    setMenuModal(false)
  }

  return (
    <>
      {
        menuModal && (
          <Modal>
            <Modal.Header className={styles.menu__header}>
              <h2 className={styles.menu__title}>Configuración</h2>
              <button className={styles.menu__close} onClick={handleCloseModal}><IoCloseOutline/></button>
            </Modal.Header>
            <Modal.Body className={styles.menu__body}>
              <form className={styles.menu__form}>
                <Select label="Rol" name="role" id="role" options={roles}/>
                <Select label="Distribución" name="distribution" id="distribution" options={distributions}/>
                <Button text="Guardar" variant="primary"/>
              </form>
            </Modal.Body>
          </Modal>
        )
      }
    </>
  )
}
