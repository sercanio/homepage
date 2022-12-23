import Link from 'next/link'
import { PostMeta } from '../../../types'

const Articles = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <ul className=" flex flex-col gap-6 max-w-5xl mx-auto px-2">
      {posts.map((post, index) => (
        <li
          key={post.slug}
          className="relative flex flex-col p-3 hover:bg-gray-100 dark:hover:bg-gray-900 [&>div>h2>a]:hover:link__text--decoration rounded-md"
        >
          <div className="z-10 flex flex-col gap-3">
            <h2 className="font-bold text-2xl">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>

            <p>
              <Link href={`/posts/${post.slug}`}>{post.excerpt}</Link>
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-bold">
              {post.tags.map(tag => (
                <Link
                  href={`/tags/${tag}`}
                  key={tag}
                  className=" dark:hover:opacity-80"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <p className="leading-10 text-sm text-gray-500 dark:text-gray-300">
              {post.date}
            </p>
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
        </li>
      ))}
    </ul>
  )
}

export default Articles
