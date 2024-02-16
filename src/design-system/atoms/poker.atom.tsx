import Image from "next/image";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"img"> {
    spin?: boolean;
}

export default function PokerAtom({ spin = false }: Props) {
    return (
        <Image src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} className={`poker ${spin ? 'poker__spin' : ''}`} />
    )
}