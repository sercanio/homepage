import type { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXPost } from 'types'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { getPostFromSlug, getSlugs } from '@/components/api'
import YouTube from '@/components/YouTube/YouTube'
import 'highlight.js/styles/a11y-dark.css'
import CreateSections from '@/components/PostPage/CreateSections'
import CreateRelatedArticles from '@/components/PostPage/CreateRelatedArticles'
import Figure from '@/components/Figure'
import { Bibliography } from 'react-bib'

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
        <meta name="description" content={post.meta.title} />
      </Head>
      <div className="flex flex-col xl:flex-row xl:gap-4 justify-center h-full scroll-smooth max-w-5xl mt-16 md:mt-20 md:mb-6 px-1">
        <article className="relative px-3 xl:px-1 h-full mx-auto xl:mx-0 flex-1">
          <div className="relative z-10 flex-5">
            <h2 className="text-3xl font-bold text-gradient-hero mb-4 mt-0">
              {post.meta.title}
            </h2>
            {post.meta.tags && (
              <div className="flex flex-wrap gap-2 my-4">
                {post.meta.tags.map(tag => (
                  <Link href={`/tags/${tag}`} key={tag}>
                    <span
                      key={tag}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-100 bg-skin-baseTag dark:bg-skin-darkTag hover:bg-inherit px-2 py-[2px] rounded hover:underline"
                    >
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>
            )}
            <p className="md:absolute md:top-0 md:right-1 ml-2 md:ml-0 text-base text-gray-500 dark:text-gray-300">
              {' '}
              {post.meta.date}
            </p>
            <hr className="py-2 border-t-2" />
            <MDXRemote
              {...post.source}
              components={{ YouTube, Image, Figure, Bibliography }}
            />
            <div className="flex gap-3 items-center mt-6"></div>
          </div>
        </article>
        <aside
          className="sticky top-16 flex flex-col gap-1 h-max max-w-[280px]"
          style={{ contentVisibility: 'auto' }}
        >
          <CreateSections post={post} />
          <CreateRelatedArticles post={post} />
        </aside>
      </div>
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
