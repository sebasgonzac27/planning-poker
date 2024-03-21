import styles from './radio.module.scss'
import { ComponentProps } from "react";

interface Props extends ComponentProps<'input'> {
    label: string,
    name: string,
    value: string,
}

export default function Radio({ label, value, name, ...props }: Props) {
    return (
        <div className={styles['radio-container']}>
            <label className={styles['radio-container__label']} htmlFor={name}>
                {label}
            </label>
            <input className={styles['radio-container__input']} type="radio" value={value} name={name} id={name} {...props} />
        </div>
    )
}
