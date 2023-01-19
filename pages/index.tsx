import Head from 'next/head'
import { PostMeta } from '@/types'
import { getAllPosts } from '@/components/api'
import CreateAllTags from '@/components/HomePage/CreateAllTags'
import CreateArchive from '@/components/HomePage/CreateArchive'
import CreateArticleList from '@/components/HomePage/CreateArticleList'
export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <Head>
        <title>Sercan Ateş | Web Logs</title>
        <meta name="description" content="Sercan Ateş's personal web logs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col xl:flex-row gap-1 xl:gap-4 h-full scroll-smooth justify-between">
        <CreateArticleList posts={posts} />
        <aside className="mr-4">
          <CreateAllTags posts={posts} />
          <CreateArchive posts={posts} />
        </aside>
      </div>
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
