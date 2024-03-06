import { ComponentProps } from "react";

interface Props extends ComponentProps<'div'> { }

export default function RadioGroup({ children }: Props) {
    return (
        <div className="radio-group">
            {children}
        </div>
    )
}