import styles from './modal.module.scss'
import { Children, ComponentProps, ReactElement, ReactNode, cloneElement } from "react"

interface Props extends ComponentProps<'div'> {
    contentClassName: string
}

export default function Modal({ children, contentClassName }: Props) {
    return (
        <div className={styles.modal}>
            <div className={`${styles['modal__content']} ${contentClassName}`}>
                {Children.map(children, (child) => cloneElement(child as ReactElement<ReactNode>))}
            </div>
        </div>
    )
}

function Header({ children, ...props }: ComponentProps<'div'>) {
    return (
        <header className={styles['modal__header']} {...props}>
            {children}
        </header>
    )
}

function Body({ children, ...props }: ComponentProps<'div'>) {
    return (
        <div className={styles['modal__body']} {...props}>
            {children}
        </div>
    )
}

Modal.Header = Header
Modal.Body = Body