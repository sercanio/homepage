import Head from 'next/head'
import { getAllPosts } from './../src/components/api'
import BlogHome from '../src/components/BlogHome'

export default function Blog({ posts }) {
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
