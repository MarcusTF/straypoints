import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { API_URL } from '../utils/urls'

const Home = ({ content }) => {
  return (
    <main>
      <div className={styles.mainContent}>
        <div className={styles.info}>
          <h2>About Stray Points</h2>
          <p>
            I started this blog as a place where I can chronicle my thoughts,
            opinions, ideas, and knowledge. I just wanted to have an all-purpose
            outlet where I can share writing, so there won't be any real theme
            to the posts here. Whether it's about movies, video games, music,
            politics, food, design, development, or any other topic, it'll all
            be here; hence the name: "Stray Points". I hope you find something
            interesting to read while you're here. Thanks for dropping by, and
            an even bigger thanks if you stick around.
          </p>
        </div>
        <h2 className={styles.posts}>Posts</h2>
        {content
          ? content.map(data => (
              <a href="#" className={styles.card}>
                <Link href="/[post]" as={`/${data.slug}`}>
                  <div className={styles.cardContentWrapper}>
                    <div className={styles.cardTitleWrapper}>
                      <h3>{data.title}</h3>
                      <h6>{data.author}</h6>
                    </div>
                    {data.image ? (
                      <>
                        <div
                          className={styles.cardImage}
                          style={{
                            backgroundImage: `url(${API_URL}${data.image.formats.small.url})`,
                          }}
                        />
                        <p style={{ maxHeight: '7rem' }}>{data.content}</p>
                      </>
                    ) : (
                      <p>{data.content}</p>
                    )}
                    <h6 className={styles.cardReadMore}>{`Read >>`}</h6>
                  </div>
                </Link>
              </a>
            ))
          : null}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  try {
    const content_res = await fetch(`${API_URL}/posts/`)
    const content = await content_res.json()

    return {
      props: {
        content,
      },
    }
  } catch (err) {
    return {
      props: {},
    }
  }
}

export default Home
