import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
    text: string;
    variant: "primary" | "secondary";
    isDisabled?: boolean;
}


export default function Button({ text, variant, isDisabled = false, ...props }: Props) {
    return (
        <button className={`button-atom ${variant}`} disabled={isDisabled} {...props}>
            {text}
        </button>
    )
}