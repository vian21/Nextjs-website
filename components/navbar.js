import Link from 'next/link'
import styles from './navbar.module.css'
import { useRouter } from 'next/router'
import Login from './login'

export default function NavBar({ userName, isLoggedIn }) {
  const router = useRouter();

  let button;

  if (isLoggedIn) {
    button = <Login userName={userName+'⥂'} link="/logout" />
  } else {
    button = <Login userName={userName} link="/login" />
  }

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

    {button}

  </div>
}