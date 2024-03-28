'use client'
import styles from './page.module.scss'
import { Button, Input } from '@/design-system'
import Image from 'next/image'
import { useCreateForm } from './hooks/useCreateForm'

export default function CreatePartyPage () {
  const { partyName, handleChange, handleSubmit, errors } = useCreateForm()

  return (
        <main className={styles['create-container']}>
            <header className={styles['create-container__header']}>
                <div className={styles['create-container__banner']}>
                    <Image src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} />
                    <h1 className={styles['create-container__title']}>Crear Partida</h1>
                </div>
            </header>
            <section className={styles['create-container__content']}>
                <form action="" className={styles['create-container__form']} onSubmit={handleSubmit}>
                    <Input label="Nombra la partida" name="name" type="text" placeholder="Sprint 32" value={partyName} required onChange={handleChange} errors={errors} />
                    <Button text="Crear partida" variant="primary" isDisabled={errors.length > 0 || partyName === ''} />
                </form>
            </section>
        </main>
  )
}
