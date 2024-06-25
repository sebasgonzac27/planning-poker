import { Option } from '@/core'
import styles from './select.module.scss'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'select'> {
  label: string
  name: string
  id: string
  options: Option[]
}

export default function Select ({ label, name, id, options, ...props }: Props) {
  return (
    <div className={styles.select}>
      <label className={styles.select__label} htmlFor={id}>
        {label}
      </label>
      <select className={styles.select__field} name={name} id={id} {...props}>
        {
          options.map((option, index) =>
            <option key={index} value={option.value}>{option.label}</option>
          )
        }
      </select>
    </div>
  )
}
