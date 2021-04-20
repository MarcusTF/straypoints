import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.minilogo}>
        <Link href="/">
          <img src="/whitelogoupdated.svg" style={{ width: '100px' }} />
        </Link>
      </a>
      <p>COPYRIGHT &#169; {new Date().getFullYear()}</p>
      <div>
        <div className={styles.tech}>
          <a href="https://strapi.io/">
            <img src="/strapi.svg" alt="Strapi logo" />
          </a>
          <a href="https://nextjs.org/">
            <img src="/next.svg" alt="Next.js logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
