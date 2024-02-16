import { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
    label: string;
    error?: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputAtom({ label, error, name, type, placeholder, value, onChange }: Props) {
    return (
        <label htmlFor={name} className="input-atom">
            {label}
            <input className="input" type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            {error && <span className="error">{error}</span>}
        </label>
    )
}