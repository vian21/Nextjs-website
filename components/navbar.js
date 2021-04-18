import Link from 'next/link'
import styles from './navbar.module.css'
import Router, { useRouter } from 'next/router'

export default function NavBar(req, res) {
  const router = useRouter();

  return <div className={styles.navbar}>
    
            <button onClick={() => { router.back() }}>←</button>

            <Link href='/'>
              <a>Home</a>
            </Link>

            <Link href='/about'>
              <a>About Me</a>
            </Link>

            <Link href='/contacts'>
              <a>Contacts</a>
            </Link>

            <Link href='/projects'>
              <a>Projects</a>
            </Link>

             <Link href='/login'>
              <a className={styles.login}>Login</a>
            </Link>
  </div>
}