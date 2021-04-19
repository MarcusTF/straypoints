import ReactMarkdown from 'react-markdown'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Nav from '../../components/Nav'
import styles from '../../styles/Post.module.css'
import { API_URL, APP_URL } from '../../utils/urls'

const HeadRenderer = ({ pageContent, url, image }) => {
  return (
    <Head>
      <title>{`${pageContent?.title} | Stray Points`}</title>
      <meta
        name="title"
        key="title"
        content={`${pageContent?.title} | Stray Points`}
      />
      <meta
        property="og:title"
        key="og:title"
        content={`${pageContent?.title} | Stray Points`}
      />
      <meta
        property="twitter:title"
        key="twitter:title"
        content={`${pageContent?.title} | Stray Points`}
      />
      <meta property="og:type" content="website" />

      {pageContent?.excerpt ? (
        <>
          <meta
            name="description"
            key="description"
            content={pageContent?.excerpt}
          />
          <meta
            property="og:description"
            key="og:description"
            content={pageContent?.excerpt}
          />
          <meta
            property="twitter:description"
            key="twitter:description"
            content={pageContent?.excerpt}
          />
        </>
      ) : null}

      {pageContent?.image ? (
        <>
          <meta property="og:image" key="og:image" content={image} />
          <meta property="twitter:image" key="twitter:image" content={image} />
        </>
      ) : null}

      <meta property="og:url" key="og:url" content={`${APP_URL}/${url}`} />
      <meta
        property="twitter:url"
        key="twitter:url"
        content={`${APP_URL}/${url}`}
      />
      <meta
        property="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
    </Head>
  )
}

const Post = ({ content }) => {
  const router = useRouter()
  const pageContent = content.filter(post => post.slug === router.query.post)[0]
  const image = pageContent?.image
    ? `${API_URL}${pageContent?.image.url}`
    : `${APP_URL}/header.jpg`

  const date = new Date(pageContent?.date)
  // const nextArticle
  const currentPostIndex = content.findIndex(
    post => post.id === pageContent?.id
  )
  const nextPost = content[currentPostIndex + 1] || content[0]

  return (
    <>
      <HeadRenderer
        pageContent={pageContent}
        url={router.query.post}
        image={image}
      />
      <main>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={styles.featImg}
        />
        {/* <Nav nextPost={nextPost} /> */}
        <div className={styles.mainContent}>
          <div className={styles.title}>
            <h1>{pageContent?.title}</h1>
            <h5>
              {pageContent?.author} | {date.toDateString()}
            </h5>
          </div>
          <div>
            <ReactMarkdown>{pageContent?.content}</ReactMarkdown>
          </div>
          <Nav nextPost={nextPost} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async context => {
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
      props: {
        content: [],
      },
    }
  }
}

export const getStaticPaths = async () => {
  try {
    const content_res = await fetch(`${API_URL}/posts/`)
    const content = await content_res.json()

    const slugs = content?.map(post => post?.slug)
    const paths = slugs?.map(slug => ({
      params: {
        post: slug.toString(),
      },
    }))

    return {
      paths,
      fallback: false,
    }
  } catch (err) {
    return { paths: [], fallback: false }
  }
}

export default Post
