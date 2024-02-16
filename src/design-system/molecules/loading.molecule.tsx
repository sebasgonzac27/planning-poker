import Image from "next/image";
import PokerAtom from "../atoms/poker.atom";

export default function LoadingMolecule() {
    return (
        <div className="loader">
            <PokerAtom spin />
            <Image src="/images/logo.svg" alt="Logo Pragma" width={149} height={42} />
        </div>
    )
}