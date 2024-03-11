import styles from './loading.module.scss'
import Image from "next/image";

export default function Loading() {
    return (
        <div className={styles.loading}>
            <Image src="/images/poker.svg" alt="Pocker Pragma" width={60} height={60} className={styles['loading__poker']} />
            <Image src="/images/logo.svg" alt="Logo Pragma" width={149} height={42} />
        </div>
    )
}