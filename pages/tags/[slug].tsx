import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getAllPosts } from '@/components/api'
import { PostMeta } from '@/types'
import Articles from '@/components/Articles'

export default function TagPage({
  slug,
  posts
}: {
  slug: string
  posts: PostMeta[]
}) {
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
        <title>{`Articles About ${capitalize(slug)}`}</title>
      </Head>
      <h2 className="relative max-w-5xl mx-auto px-3 mb-4">
        <p>
          Articles about
          <span className="inline-flex items-center font-bold text-sm max-w-max text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 px-2 rounded">
            {slug}
          </span>{' '}
          :
        </p>{' '}
      </h2>
      <Articles posts={posts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const posts = getAllPosts().filter(post => post.meta.tags.includes(slug))

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
