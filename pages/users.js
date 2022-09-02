import Link from "next/link"
import MainContainer from "./components/MainContainer";


import styles from "./styles/users.module.scss";


export default function Users({ users }) {
    return (
        <MainContainer keyword={'users, user data'}>
            <div className={styles.container}>
                <h2>Пользователи</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link href={`users/${user.id}`}><a className={styles.users}>{user.name}</a></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </MainContainer>
    )
}


export async function getStaticProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();

    return {
        props: { users }
    }
}


