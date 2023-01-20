import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getAllPosts } from '@/components/api'
import { PostMeta } from '@/types'
import HomePage from '@/components/HomePage'

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
      <h2 className="relative mx-auto px-1 mb-4">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          Posts about <q>{slug}</q> :
        </p>
      </h2>
      <HomePage posts={posts} filteredPosts={filteredPosts} />
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
