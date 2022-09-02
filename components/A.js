import Link from "next/link"

import styles from "../styles/A.module.css";



export default function ({ href, text }) {
    return (
        <Link href={href}>
            <a className={styles.links}>{ text }</a>
        </Link>
    )
}
