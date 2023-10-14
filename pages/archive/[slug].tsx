import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getAllPosts } from '@/components/api'
import { PostMeta } from '@/types'
import BlogHome from '@/components/BlogHome'

export default function ArchivePage({
  slug,
  posts
}: {
  slug: string
  posts: PostMeta[]
}) {
  const filteredPosts = posts.filter(
    post => post.date.split(',')[1].trim() === slug.trim()
  )
  return (
    <>
      <Head>
        <title>{`Blog Posts From ${slug} | Sercan Ateş`}</title>
        <meta
          name="description"
          content={`Sercan Ateş's web logs from ${slug}`}
        />
      </Head>
      <div className="w-full max-w-5xl">
        <div className="w-full max-w-3xl">
          <p className="text-3xl font-bold px-3 xl:px-1 break-word -mb-8 md:-mb-16 mt-16 w-fit mx-auto text-gradient-hero dark:text-gradient-hero-dark">
            Posts from {slug}
          </p>
        </div>
      </div>
      <BlogHome posts={posts} filteredPosts={filteredPosts} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }

  // const posts = getAllPosts().filter(
  //   post => post.meta.date.split(',')[1].trim() === slug.trim()
  // )
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
  const dates = new Set(posts.map(post => post.meta.date))

  const paths = Array.from(dates).map(date => ({
    params: { slug: date.split(',')[1].trim() }
  }))

  return {
    paths,
    fallback: false
  }
}
