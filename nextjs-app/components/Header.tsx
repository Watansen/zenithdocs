import { signOut } from 'next-auth/client'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <img src="/logo.svg" alt="Logo" />
        </a>
      </Link>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <button onClick={() => signOut()}>Sign Out</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header