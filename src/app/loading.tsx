import Image from "next/image";

export default function Loading() {
    return (
        <div className="loading">
            <div className="loader">
                <Image src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} className="poker spin" />
                <Image src="/images/logo.svg" alt="Logo Pragma" width={149} height={42} />
            </div>
        </div>
    )
}