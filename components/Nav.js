import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = ({ nextPost, prevPost }) => {
  return (
    <nav className={styles.nav}>
      <a href="#">
        <Link
          href="/[post]"
          as={`/${prevPost.slug}`}
        >{`<< ${prevPost.title}`}</Link>
      </a>
      <a
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: 'smooth',
          })
        }}
      >
        Return to Top
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
