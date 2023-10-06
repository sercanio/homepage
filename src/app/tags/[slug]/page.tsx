import type { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getAllPosts } from 'api'
import { PostMeta } from '@/types'
import BlogHome from '@/components/BlogHome'

export async function generateStaticParams() {
  const posts = getAllPosts()
  const tags = new Set(posts.map(post => post.meta.tags).flat())
  const paths = Array.from(tags).map(tag => ({ params: { slug: tag } }))

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

export default async function Page(params: {
  slug: string
  posts: PostMeta[]
}) {
  const { props } = await getPosts(params)
  const { slug, posts } = props
  const filteredPosts = posts.filter(post => post.tags.includes(slug))

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
        <title>{`Articles About ${capitalize(slug)} | Sercan Ateş`}</title>
        <meta
          name="description"
          content={`Sercan Ateş's personal web logs about ${slug}`}
        />
      </Head>
      <p className="text-xl md:text-2xl font-bold px-[14px] xl:px-1 mx-auto break-word -mb-16 mt-20">
        Posts about <q>{slug}</q>
      </p>
      <BlogHome posts={posts} filteredPosts={filteredPosts} />
    </>
  )
}
