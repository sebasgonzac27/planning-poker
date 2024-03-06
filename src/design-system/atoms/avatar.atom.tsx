import { ComponentProps } from "react";

interface Props extends ComponentProps<'span'> {
    variant: "md" | "lg",
    initials: string
}

export default function Avatar({ variant, initials, ...props }: Props) {
    return (
        <span className={`initials-name ${variant === 'lg' ? 'large' : ''}`} {...props}>{initials.toUpperCase()}</span>
    )
}