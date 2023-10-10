import Link from 'next/link'
import React from 'react'
import { AiOutlineTags, AiOutlineCalendar } from 'react-icons/ai'
import { PostMeta } from '@/types'

const CreateArticleList = ({ posts }: { posts: PostMeta[] }) => {
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section>
      <ul className="relative z-0 flex flex-col gap-8 w-full xl:mx-0 px-[2px] xl:pr-1">
        {posts.map(post => (
          <li
            key={post.slug}
            className="relative flex flex-col px-3 bg-skin-baseCard hover:bg-skin-baseCardHover dark:bg-skin-darkCard dark:hover:bg-skin-darkCardHover [&>div>h2>a] dark:[&>div>h2>a] rounded-md"
          >
            <div className="z-10 flex flex-col gap-0">
              <h2 className="font-bold text-2xl text-gradient-hero">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-lg">
                <Link href={`/posts/${post.slug}`}>
                  {post.excerpt}
                  <span className="text-gradient-hero">&nbsp;Read more...</span>
                </Link>
              </p>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <AiOutlineTags />
                {post.tags.map(tag => (
                  <Link
                    href={`/tags/${tag}`}
                    key={tag}
                    className="flex items-center dark:hover:opacity-80 text-sm text-gray-700 dark:text-gray-100 bg-skin-baseTag dark:bg-skin-darkTag px-2 py-px rounded hover:underline"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineCalendar className="opacity-70" />
                <span className="leading-10 text-sm text-gray-500 dark:text-gray-300 mt-1">
                  {post.date}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CreateArticleList
