import styles from './avatar.module.scss'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'span'> {
    variant: 'small' | 'large',
    initials: string
}

export default function Avatar ({ variant, initials, ...props }: Props) {
  return (
        <span className={`${styles.avatar} ${styles[`avatar--${variant}`]}`} {...props}>{initials.toUpperCase()}</span>
  )
}
