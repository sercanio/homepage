import Link from 'next/link'
import { PostMeta } from '@/types'
import { AiOutlineTags, AiOutlineCalendar } from 'react-icons/ai'
const Articles = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <ul className="relative z-0 flex flex-col gap-6 max-w-5xl xl:max-w-[1306px] mx-auto">
      {posts.map(post => (
        <li
          key={post.slug}
          className="relative flex flex-col p-3 hover:bg-neutral-100 dark:hover:bg-opacity-5 [&>div>h2>a] dark:[&>div>h2>a] rounded-md"
        >
          <div className="z-10 flex flex-col gap-3">
            <h2 className="font-bold text-xl sm:text-2xl">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>
              <Link href={`/posts/${post.slug}`}>{post.excerpt}</Link>
            </p>
            <div className="flex flex-wrap items-center gap-[10px] text-sm mt-2">
              <AiOutlineTags />
              {post.tags.map(tag => (
                <Link
                  href={`/tags/${tag}`}
                  key={tag}
                  className="flex items-center dark:hover:opacity-80 text-sm text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 px-2 py-[2px] rounded hover:underline"
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
        </li>
      ))}
    </ul>
  )
}

export default Articles
