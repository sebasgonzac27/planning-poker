import { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
    text: string;
    variant: "primary" | "secondary";
    isDisabled?: boolean;
}


export default function ButtonAtom({ text, variant, isDisabled = false }: Props) {
    return (
        <button className={`button-atom ${variant}`} disabled={isDisabled}>
            {text}
        </button>
    )
}