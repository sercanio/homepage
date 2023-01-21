import Head from 'next/head'
import { PostMeta } from '@/types'
import { getAllPosts } from '@/components/api'
import CreateAllTags from '@/components/HomePage/CreateAllTags'
import CreateArchive from '@/components/HomePage/CreateArchive'
import CreateArticleList from '@/components/HomePage/CreateArticleList'
import HomePage from '@/components/HomePage'
export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <Head>
        <title>Sercan Ateş | Web Logs</title>
        <meta name="description" content="Sercan Ateş's personal web logs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage posts={posts} filteredPosts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
    // .slice(0, 9) // Get the first 9 posts
    .map(posts => posts.meta) // Get the meta data of the posts

  return {
    props: {
      posts
    }
  }
}
