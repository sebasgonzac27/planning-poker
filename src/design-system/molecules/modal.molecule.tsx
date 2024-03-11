import { Children, ComponentProps, ReactElement, ReactNode, cloneElement } from "react"

interface Props extends ComponentProps<'div'> {
    contentClassName: string
}

export default function Modal({ children, contentClassName }: Props) {
    return (
        <div className="modal">
            <div className={`modal-content ${contentClassName}`}>
                {Children.map(children, (child) => cloneElement(child as ReactElement<ReactNode>))}
            </div>
        </div>
    )
}

function Header({ children, ...props }: ComponentProps<'div'>) {
    return (
        <header className="header" {...props}>
            {children}
        </header>
    )
}

function Body({ children, ...props }: ComponentProps<'div'>) {
    return (
        <div className="body" {...props}>
            {children}
        </div>
    )
}

Modal.Header = Header
Modal.Body = Body