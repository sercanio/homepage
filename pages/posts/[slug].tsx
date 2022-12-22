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
import Main from '../../src/components/Main'

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
      <article className="px-4 py-16 sm:px-9 sm:py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{post.meta.title}</h2>
        <p className="leading-10 text-sm text-gray-500">{post.meta.date}</p>
        <hr className="py-4 border-t-2" />
        <MDXRemote {...post.source} components={{ YouTube, Image }} />
        <hr className="py-4 border-t-2 mt-14 -mb-2" />
        {post.meta.tags && (
          <div className="flex flex-wrap gap-2 px-2">
            Tags:
            {post.meta.tags.map(tag => (
              <span
                key={tag}
                className="flex items-center text-sm text-gray-500 bg-gray-200 px-2 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
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
