import type { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { getPostFromSlug, getSlugs } from '../../src/components/api'
import { PostMeta } from '../../types'
import YouTube from '../../src/components/YouTube/YouTube'
import 'highlight.js/styles/atom-one-dark.css'
import Link from 'next/link'

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: PostMeta
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
        <meta name="description" content={post.meta.title} />
      </Head>
      <article className="relative p-3 max-w-5xl h-full mx-auto z-0">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">{post.meta.title}</h2>
          {post.meta.tags && (
            <div className="flex flex-wrap gap-2 my-4">
              {post.meta.tags.map(tag => (
                <Link
                  href={`/tags/${tag}`}
                  key={tag}
                  className=" dark:hover:opacity-80"
                >
                  <span
                    key={tag}
                    className="flex items-center text-sm text-gray-500 dark:text-gray-100 bg-gray-200 dark:bg-gray-900 px-2 rounded"
                  >
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
          )}
          <p className="md:absolute md:top-0 md:right-1 ml-2 md:ml-0 leading-10 text-sm text-gray-500 dark:text-gray-300">
            {post.meta.date}
          </p>
          <hr className="pt-4 border-t-2" />
          <MDXRemote {...post.source} components={{ YouTube, Image }} />
          <hr className="py-4 border-t-1 mt-14 -mb-2" />
        </div>
        <svg
          className="absolute top-0 left-0 opacity-20 dark:opacity-10 z-0 rounded-md"
          width="100%"
          height="100%"
        >
          <filter id="noisybg">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="5"
              stitchTiles="stitch"
            ></feTurbulence>
          </filter>
          <rect width="100%" height="100%" filter="url(#noisybg)"></rect>
        </svg>
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const { content, meta } = getPostFromSlug(slug)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight
      ]
    }
  })

  return { props: { post: { source: mdxSource, meta } } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}
