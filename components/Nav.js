import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = ({ nextPost }) => {
  return (
    <nav className={styles.nav}>
      <a href="#">
        <Link href="/">{`<< Home`}</Link>
      </a>
      <a href="#">
        <Link
          href="/[post]"
          as={`/${nextPost.slug}`}
        >{`${nextPost.title} >>`}</Link>
      </a>
    </nav>
  )
}

export default Nav
