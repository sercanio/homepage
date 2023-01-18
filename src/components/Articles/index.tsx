import * as React from 'react'
import Link from 'next/link'
import { PostMeta } from '@/types'
import { AiOutlineTags, AiOutlineCalendar } from 'react-icons/ai'
const Articles = ({ posts }: { posts: PostMeta[] }) => {
  const tempArr = posts.map(post => post.tags).flat()
  const tagsSet = new Set(tempArr)
  const tagsArr = Array.from(tagsSet)

  return (
    <div className="flex flex-col xl:flex-row w-full max-w-[1306px] mx-auto gap-4 xl:gap-8 h-full scroll-smooth justify-between">
      <ul className="relative z-0 flex flex-col gap-6 w-full max-w-5xl xl:mx-0">
        {posts.map(post => (
          <li
            key={post.slug}
            className="relative flex flex-col px-3 hover:bg-neutral-100 dark:hover:bg-opacity-5 [&>div>h2>a] dark:[&>div>h2>a] rounded-md"
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
      <section className="xl:sticky top-0 flex-col justify-center h-max w-full xl:w-max p-5 hover:bg-neutral-100 dark:hover:bg-opacity-5 rounded-md">
        <div className="p-2">
          <strong className="uppercase font-bold px-2">all tags</strong>
        </div>
        <hr className="border-t-2 dark:border-skin-dark mb-2 w-52 xl:mx-auto" />
        <ul className="justify-center px-1 [&>li]:mx-1 [&>li]:my-2 [&>li]:cursor-pointer">
          {tagsArr.map(tag => (
            <li key={Math.random()}>
              <Link
                href={`/tags/${tag}`}
                key={tag}
                className="flex items-center dark:hover:opacity-80 text-sm text-gray-700 dark:text-gray-100 bg-gray-100 dark:bg-gray-900 px-2 py-[2px] rounded hover:underline w-max"
              >
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Articles
