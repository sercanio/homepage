import Link from 'next/link'
import { PostMeta } from '@/types'
import { AiOutlineTags, AiOutlineCalendar } from 'react-icons/ai'
const Articles = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <ul className="relative z-0 flex flex-col gap-6 max-w-5xl mx-auto px-2">
      {posts.map((post, index) => (
        <li
          key={post.slug}
          className="relative flex flex-col p-3 hover:bg-gray-100 dark:hover:bg-gray-900 [&>div>h2>a]:hover:link__text--decoration-light dark:[&>div>h2>a]:hover:link__text--decoration-dark rounded-md"
        >
          <div className="z-10 flex flex-col gap-3">
            <h2 className="font-bold text-2xl">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>
              <Link href={`/posts/${post.slug}`}>{post.excerpt}</Link>
            </p>
            <div className="flex items-center gap-[10px] text-sm font-bold mt-2">
              <AiOutlineTags />
              {post.tags.map(tag => (
                <Link
                  href={`/tags/${tag}`}
                  key={tag}
                  className="inline mr-2 dark:hover:opacity-80"
                >
                  {tag}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 -mt-1">
              <AiOutlineCalendar className="opacity-70" />
              <p className="leading-10 text-sm text-gray-500 dark:text-gray-300 mt-1">
                {post.date}
              </p>
            </div>
          </div>
          <svg
            className="absolute top-0 left-0 opacity-30 dark:opacity-[0.15] z-0 rounded-md"
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
