import { PokerAtom } from "@/design-system";
import Image from "next/image";

export default function Loading() {
    return (
        <div className="loading">
            <div className="loader">
                <PokerAtom spin />
                <Image src="/images/logo.svg" alt="Logo Pragma" width={149} height={42} />
            </div>
        </div>
    )
}