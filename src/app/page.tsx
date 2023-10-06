import { Metadata } from 'next'
import Head from 'next/head'
import { PostMeta } from '@/types'
import { getAllPosts } from 'api'
import BlogHome from '@/components/BlogHome'

export const metadata: Metadata = {
  title: 'Sercan Ateş | Web Logs',
  description: "Sercan Ateş's personal web logs."
}

function getPostsList() {
  const posts = getAllPosts()
    // .slice(0, 9) // Get the first 9 posts
    .map(posts => posts.meta) // Get the meta data of the posts

  return posts
}

export default function Page() {
  const posts: PostMeta[] = getPostsList()

  return (
    <>
      <Head>
        <title>Sercan Ateş | Web Logs</title>
        <meta name="description" content="Sercan Ateş's personal web logs." />
      </Head>
      <BlogHome posts={posts} filteredPosts={posts} />
    </>
  )
}
