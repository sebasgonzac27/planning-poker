import styles from './menu.module.scss'
import { Button, Modal, Select } from '@/design-system'
import { usePartyContext, useUserContext } from '../../hooks'
import { IoCloseOutline } from 'react-icons/io5'
import React, { useEffect, useState } from 'react'
import { getDistributions, getRoles, toggleAdmin, toggleDistribution, toggleRole } from '@/services'
import { Option, PlayerRole } from '@/core'
import { Distribution } from '../../interfaces'

export default function Menu () {
  const { menuModal, setMenuModal, distribution, partyId, socket, players } = usePartyContext()
  const { isOwner, role } = useUserContext()
  const [roles, setRoles] = useState<Option[]>([])
  const [distributions, setDistributions] = useState<Option[]>([])
  const [playersList, setPlayersList] = useState<Option[]>([])
  const [selectedRole, setSelectedRole] = useState<PlayerRole>(role)
  const [selectedDistribution, setSelectedDistribution] = useState<string>(distribution?.id || 'fibonacci')
  const [selectedPlayer, setSelectedPlayer] = useState<string>('')

  const fetchRoles = async () => {
    const data = await getRoles()
    setRoles(data)
  }

  const fetchDistributions = async () => {
    const data = await getDistributions()
    const formattedData = data.map((distribution: Distribution) => ({ value: distribution.id, label: distribution.name }))
    setDistributions(formattedData)
  }

  const fetchPlayers = () => {
    const list = players.map((player) => ({ value: player.socketId, label: player.username }))
    setPlayersList(list)
    setSelectedPlayer(list[0].value)
  }

  useEffect(() => {
    fetchRoles()
    fetchDistributions()
    fetchPlayers()
  }, [])

  const handleChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target
    const value = target.value as PlayerRole
    setSelectedRole(value)
  }

  const handleChangeDistribution = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target
    const value = target.value as string
    setSelectedDistribution(value)
  }

  const handleChangeAdmin = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target
    const value = target.value as string
    setSelectedPlayer(value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (selectedRole !== role) {
      await toggleRole({ role: selectedRole, roomId: partyId, userId: socket.id || '' })
    }

    if (selectedDistribution !== distribution?.id) {
      await toggleDistribution(partyId, selectedDistribution)
    }

    const owner = players.find((player) => player.isOwner)
    if (selectedPlayer !== owner?.socketId) {
      await toggleAdmin(partyId, selectedPlayer)
    }

    handleCloseModal()
  }

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
              <form className={styles.menu__form} onSubmit={handleSubmit}>
                <Select label="Rol" name="role" id="role" options={roles} value={selectedRole} onChange={handleChangeRole}/>
                { isOwner && (<>
                  <Select label="Distribución" name="distribution" id="distribution" options={distributions} value={selectedDistribution} onChange={handleChangeDistribution}/>
                  <Select label="Administrador" name="administrator" id="administrator" options={playersList} value={selectedPlayer} onChange={handleChangeAdmin}/>
                </>
                )}
                <Button text="Guardar" variant="primary"/>
              </form>
            </Modal.Body>
          </Modal>
        )
      }
    </>
  )
}
