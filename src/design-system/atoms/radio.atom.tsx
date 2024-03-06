import { ComponentProps } from "react";

interface Props extends ComponentProps<'input'> {
    label: string,
    name: string,
    value: string,
}

export default function Radio({ label, value, name, ...props }: Props) {
    return (
        <label className="radio-atom">
            {label}
            <input className="input" type="radio" value={value} name={name} {...props} />
        </label>
    )
}