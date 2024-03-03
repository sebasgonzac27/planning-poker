interface Props extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean,
    onClose: () => void,
    children: React.ReactNode,
    contentClassName: string

}

export default function ModalMolecule({ isOpen, onClose, children, contentClassName }: Props) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal">
            <div className={`modal-content ${contentClassName}`}>
                {children}
            </div>
        </div>
    )
}