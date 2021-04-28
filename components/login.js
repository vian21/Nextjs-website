import Link from 'next/link'
import styles from './navbar.module.css'


export default function Login({ userName, link }) {

    return <Link href={link}>
        <a className={styles.login}>{userName}</a>
    </Link>
}


