import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer";

import styles from "../../styles/user.module.scss";


export default function Detail({ user }) {
    const { query } = useRouter();

    return (
        <MainContainer keyword={"user, person, personality info"}>
            <div className={styles.user}>
                <h1>Пользователь с id {query.id}</h1>
                <h2>Имя пользователя {user.name}</h2>
                <p>username: @{user.username}</p>
            </div>
        </MainContainer>
    )
}


export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json()

    return { props: {user} }
}


