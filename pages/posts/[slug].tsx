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
import {
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PocketShareButton,
  PocketIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon
} from 'next-share'
import YouTube from '@/components/YouTube/YouTube'
import 'highlight.js/styles/a11y-dark.css'
import CreateSections from '@/components/PostPage/CreateSections'
import CreateRelatedArticles from '@/components/PostPage/CreateRelatedArticles'

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
        <meta name="description" content={post.meta.title} />
      </Head>
      <div className="flex flex-col xl:flex-row xl:gap-4 justify-center h-full scroll-smooth">
        <article className="relative py-3 px-3 xl:px-1 h-full mx-auto xl:mx-0 flex-1">
          <div className="relative z-10 flex-5">
            <h2 className="text-3xl font-bold mb-4 mt-0">{post.meta.title}</h2>
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
                      className="flex items-center text-sm text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 px-2 py-[2px] rounded hover:underline"
                    >
                      {tag}
                    </span>
                  </Link>
                ))}
              </div>
            )}
            <p className="md:absolute md:top-0 md:right-1 ml-2 md:ml-0 leading-10 text-sm text-gray-500 dark:text-gray-300">
              {' '}
              {post.meta.date}
            </p>
            <hr className="py-5 border-t-2" />
            <MDXRemote {...post.source} components={{ YouTube, Image }} />
            <div className="flex gap-3 items-center mt-20">
              <p>Share :</p>
              <PocketShareButton
                url={`https://sercan.io/posts/${post.meta.slug}`}
                title={post.meta.title}
              >
                <PocketIcon size={32} round />
              </PocketShareButton>
              <EmailShareButton
                url={`https://sercan.io/posts/${post.meta.slug}`}
                subject={`Blog Post: ${post.meta.title} - Sercan Ateş`}
                body="Check out this blog post:"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
              <LinkedinShareButton
                url={`https://sercan.io/posts/${post.meta.slug}`}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <TwitterShareButton
                url={`https://sercan.io/posts/${post.meta.slug}`}
                title={post.meta.title}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <TelegramShareButton
                url={`https://sercan.io/posts/${post.meta.slug}`}
                title={post.meta.title}
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>
            <hr className="pb-4 border-t-1 mt-3 -mb-2 hidden xl:block" />
          </div>
        </article>
        <aside
          className="sticky top-0 flex flex-col gap-1 h-max"
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
