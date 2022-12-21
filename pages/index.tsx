import Head from 'next/head'
import { HomeProps, PostMeta } from '../types'
import Main from '../src/components/Main'
import { getAllPosts } from '../src/components/api'
import Articles from '../src/components/Articles'
export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <div>
      <Head>
        <title>Sercan Ateş | Personal Blog & Portfolio</title>
        <meta
          name="description"
          content="Sercan Ateş's personal blog & portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main className="p-12 h-screen">
        <Articles posts={posts} />
      </Main>

      <footer></footer>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9) // Get the first 9 posts
    .map(posts => posts.meta) // Get the meta data of the posts

  return {
    props: {
      posts
    }
  }
}
