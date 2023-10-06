import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getAllPosts } from 'api'
import { PostMeta } from '@/types'
import BlogHome from '@/components/BlogHome'

export async function generateStaticParams() {
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

async function getPosts(params: { slug: string; posts: PostMeta[] }) {
  const { slug } = params as { slug: string }
  const posts = getAllPosts()

  return {
    props: {
      slug,
      posts: posts.map(post => post.meta)
    }
  }
}

export default async function ArchivePage(params: {
  slug: string
  posts: PostMeta[]
}) {
  const { props } = await getPosts(params)
  const { slug, posts } = props
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
      <p className="text-xl md:text-2xl font-bold px-[14px] xl:px-1 -mb-16 mt-20 mx-auto break-word">
        Posts from {slug}
      </p>
      <BlogHome posts={posts} filteredPosts={filteredPosts} />
    </>
  )
}
