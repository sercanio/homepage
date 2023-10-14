import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getAllPosts } from '@/components/api'
import { PostMeta } from '@/types'
import BlogHome from '@/components/BlogHome'

export default function TagPage({
  slug,
  posts
}: {
  slug: string
  posts: PostMeta[]
}) {
  const filteredPosts = posts.filter(post => post.tags.includes(slug))

  const capitalize = (str: string) => {
    const strArr = str.split(' ')
    const newStr = strArr
      .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')
    return newStr
  }

  return (
    <>
      <Head>
        <title>{`Articles About ${capitalize(slug)} | Sercan Ateş`}</title>
        <meta
          name="description"
          content={`Sercan Ateş's personal web logs about ${slug}`}
        />
      </Head>
      <div className="w-full max-w-5xl">
        <div className="w-full max-w-3xl">
          <p className="text-3xl font-bold px-3 xl:px-1 break-word -mb-8 md:-mb-16 mt-16 w-fit mx-auto text-gradient-hero dark:text-gradient-hero-dark">
            Posts are tagged {slug}
          </p>
        </div>
      </div>
      <BlogHome posts={posts} filteredPosts={filteredPosts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const posts = getAllPosts()

  return {
    props: {
      slug,
      posts: posts.map(post => post.meta)
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const tags = new Set(posts.map(post => post.meta.tags).flat())
  const paths = Array.from(tags).map(tag => ({ params: { slug: tag } }))

  return {
    paths,
    fallback: false
  }
}
