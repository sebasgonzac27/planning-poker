import { ComponentProps } from "react";

interface Props extends ComponentProps<"input"> {
    label: string;
    errors?: string[];
    name: string;
}

export default function Input({ label, errors, name, ...props }: Props) {
    return (
        <label className="input-atom">
            {label}
            <input className="input" name={name} autoComplete="off" {...props} />
            {errors && errors.map((error, _index) => <span className="error" key={_index}>{error}</span>)}
        </label>
    )
}