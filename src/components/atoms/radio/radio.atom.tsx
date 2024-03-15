import styles from './radio.module.scss'
import { ComponentProps } from "react";

interface Props extends ComponentProps<'input'> {
    label: string,
    name: string,
    value: string,
}

export default function Radio({ label, value, name, ...props }: Props) {
    return (
        <label className={styles.label}>
            {label}
            <input className={styles['label__input']} type="radio" value={value} name={name} {...props} />
        </label>
    )
}