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
  return (
    <>
      <Head>
        <title>{`Articles Tagged "${slug}"`}</title>
      </Head>
      <h2 className="relative max-w-5xl mx-auto px-5 mb-4">{`Articles tagged with "${slug}" :`}</h2>
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
