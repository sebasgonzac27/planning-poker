import styles from './input.module.scss'
import { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
    label: string;
    errors?: string[];
    name: string;
}

export default function Input({ label, errors, name, ...props }: Props) {
    return (
        <label className={styles.label}>
            {label}
            <input className={styles['label__input']} name={name} autoComplete="off" {...props} />
            {errors && errors.map((error, _index) => <span className={styles['label__error']} key={_index}>{error}</span>)}
        </label>
    )
}