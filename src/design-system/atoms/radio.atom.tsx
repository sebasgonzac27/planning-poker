import { ComponentProps } from "react";

interface Props extends ComponentProps<'input'> {
    label: string,
    isChecked?: boolean,
    name: string,
    value: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function RadioAtom({ label, value, isChecked, name, onChange }: Props) {
    return (
        <label className="radio-atom">
            {label}
            <input className="input" type="radio" value={value} checked={isChecked} name={name} onChange={onChange} />
        </label>
    )
}