import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import { getPostFromSlug, getSlugs } from 'api'
import YouTube from '@/components/YouTube/YouTube'
import CreateSections from '@/components/PostPage/CreateSections'
import CreateRelatedArticles from '@/components/PostPage/CreateRelatedArticles'
import Figure from '@/components/Figure'
import { Bibliography } from 'react-bib'
import Spotify from '@/components/Spotify'
// import 'highlight.js/styles/base16/mellow-purple.css'

export async function generateStaticParams() {
  const paths = getSlugs().map(slug => ({ params: { slug } }))

  // Result is not iterabla error may occur here
  // return { paths, fallback: false }
  // so changed to
  return paths
}

async function getPost(params: { slug: string }) {
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

  return { post: { source: mdxSource, meta } }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { post }: any = await getPost(params)
  // const post =
  console.log({ POOOOOOOOOSSSSSSSTTTTT: post })

  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://sercan.io" />
        <meta name="twitter:creator" content="@sercanio" />
        <meta name="twitter:title" content={post.meta.title} />
        <meta name="twitter:description" content={post.meta.excerpt} />
        <meta
          name="twitter:image"
          content="https://sercan.io/images/author.jpg"
        />
        <title>{post.meta.title}</title>
        <meta name="description" content={post.meta.title} />
      </Head>
      <div className="flex flex-col xl:flex-row xl:gap-4 justify-center h-full scroll-smooth max-w-5xl mt-16 md:mt-20 md:mb-6 px-1">
        <article className="relative px-3 xl:px-1 h-full xl:mx-0 max-w-[720px]">
          <div className="relative z-10 flex-5">
            <h2 className="text-3xl font-bold text-gradient-hero dark:text-gradient-hero-dark mb-4 mt-0">
              {post.meta.title}
            </h2>
            {post.meta.tags && (
              <div className="flex flex-wrap gap-2 my-4">
                {post.meta.tags.map((tag: any) => (
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
            <hr className="py-2 border-t-2 border-skin-base dark:border-skin-dark" />
            <MDXRemote
              {...post.source}
              components={{ YouTube, Image, Figure, Bibliography, Spotify }}
            />
            <div className="flex gap-3 items-center mt-6"></div>
          </div>
        </article>
        <aside
          className="sticky top-16 flex flex-col gap-1 h-max max-w-[320px]"
          style={{ contentVisibility: 'auto' }}
        >
          <CreateSections post={post} />
          <CreateRelatedArticles post={post} />
        </aside>
      </div>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const { slug } = params as { slug: string }
//   const { content, meta } = getPostFromSlug(slug)
//   const mdxSource = await serialize(content, {
//     mdxOptions: {
//       rehypePlugins: [
//         rehypeSlug,
//         [rehypeAutolinkHeadings, { behavior: 'wrap' }],
//         rehypeHighlight
//       ]
//     }
//   })

//   return { props: { post: { source: mdxSource, meta } } }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getSlugs().map(slug => ({ params: { slug } }))

//   return {
//     paths,
//     fallback: false
//   }
// }
