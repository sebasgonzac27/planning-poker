import styles from './card.module.scss'
import { ComponentProps } from "react";

interface Props extends ComponentProps<'button'> {
    children?: React.ReactNode;
    variant?: 'small' | 'large';
}

export default function Card({ children, variant = 'small', className, ...props }: Props) {
    return (
        <button className={`${styles.card} ${styles[`card--${variant}`]} ${className}`}{...props}>
            {children}
        </button>
    )
}