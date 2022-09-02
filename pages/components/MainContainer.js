import React from 'react'

import Head from "next/head"

import A from "../components/A";
import styles from "../styles/navbar.module.scss";

export default function MainContainer({ children, keyword }) {
    return (
        <>
            <Head>
                <meta keywords={`nextjs page, ${keyword}`}></meta>
                <title>NextJS Application</title>
            </Head>
            <div className={styles.navbar}>
                <A href="/" text="Домой" />
                <A href="/users" text="Список пользователей" />
            </div>
            {children}
        </>
    )
}
