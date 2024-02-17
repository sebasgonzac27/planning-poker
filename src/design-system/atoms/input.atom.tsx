import { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
    label: string;
    errors?: string[];
    name: string;
    type: string;
    placeholder: string;
    value: string;
    required?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputAtom({ label, errors, name, type, placeholder, value, required, onChange }: Props) {
    return (
        <label htmlFor={name} className="input-atom">
            {label}
            <input className="input" type={type} name={name} placeholder={placeholder} value={value} required={required} onChange={onChange} />
            {errors && errors.map((error, _index) => <span className="error" key={_index}>{error}</span>)}
        </label>
    )
}