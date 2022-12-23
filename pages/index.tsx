import Head from 'next/head'
import { PostMeta } from '@/types'
import { getAllPosts } from '@/components/api'
import Articles from '@/components/Articles'
export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <Head>
        <title>Sercan Ateş | Personal Blog & Portfolio</title>
        <meta
          name="description"
          content="Sercan Ateş's personal blog & portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Articles posts={posts} />
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
