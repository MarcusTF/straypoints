import '../styles/globals.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { APP_URL } from '../utils/urls'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#444444" />
        <meta name="theme-color" content="#ffffff" />

        <title>Stray Points | Digressions about things.</title>

        <meta
          name="description"
          key="description"
          content="A blog as a place to chronicle my thoughts. No real theme, just whatever I feel like writing about. Movies, video games, music, politics, food, etc. "
        />

        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:url"
          key="og:url"
          content="https://straypoints.com/"
        />
        <meta
          property="og:title"
          key="og:title"
          content="Stray Points | Digressions about things."
        />
        <meta
          property="og:description"
          key="og:description"
          content="A blog as a place to chronicle my thoughts. No real theme, just whatever I feel like writing about. Movies, video games, music, politics, food, etc. "
        />
        <meta
          property="og:image"
          key="og:image"
          content={`${APP_URL}/header.jpg`}
        />

        <meta
          property="twitter:card"
          key="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:url"
          key="twitter:url"
          content="https://straypoints.com/"
        />
        <meta
          property="twitter:title"
          key="twitter:title"
          content="Stray Points | Digressions about things."
        />
        <meta
          property="twitter:description"
          key="twitter:description"
          content="A blog as a place to chronicle my thoughts. No real theme, just whatever I feel like writing about. Movies, video games, music, politics, food, etc. "
        />
        <meta
          property="twitter:image"
          key="twitter:image"
          content={`${APP_URL}/header.jpg`}
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
