import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <header
      className={router.query.post == undefined ? 'header' : 'header-subpage'}
      style={{ backgroundImage: `url('./header.jpg')` }}
    >
      <div class="logo-wrapper">
        <a href="#">
          <Link href="/">
            <img class="logo" src="./whitelogoupdated.svg" />
          </Link>
        </a>
      </div>
    </header>
  )
}

export default Header
