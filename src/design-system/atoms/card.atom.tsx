import { Component, ComponentProps } from "react";

interface Props extends ComponentProps<'button'> {
    children?: React.ReactNode;
    variant?: 'lg' | 'sm';
}

export default function Card({ children, variant = 'sm', ...props }: Props) {
    return (
        <button className={`card ${variant}`}{...props}>
            {children}
        </button>
    )
}