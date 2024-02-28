import { ComponentProps } from "react";

interface Props extends ComponentProps<'input'> {
    label: string,
    isChecked: boolean,
    name: string
}

export default function RadioAtom({ label, isChecked, name }: Props) {
    return (
        <label className="radio-atom">
            {label}
            <input className="input" type="radio" checked={isChecked} name={name} />
        </label>
    )
}