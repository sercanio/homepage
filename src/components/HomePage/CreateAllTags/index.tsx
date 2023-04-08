import Link from 'next/link'
import React from 'react'
import { PostMeta } from '@/types'

export const CreateAllTags = ({ posts }: { posts: PostMeta[] }) => {
  const tempTagsArr = posts.map(post => post.tags).flat()
  const tagsSet = new Set(tempTagsArr)
  const tagsArr = Array.from(tagsSet)

  return (
    <>
      {posts.length > 0 && (
        <section className="flex-col justify-center h-max w-full xl:w-max rounded-md px-4 pt-4 pb-8">
          <div className="p-2">
            <strong className="uppercase font-bold px-2">all tags</strong>
          </div>
          <hr className="border-t-2 dark:border-skin-dark mb-2 w-52 xl:mx-auto" />
          <ul className="justify-center px-2 [&>li]:mx-1 [&>li]:my-2 [&>li]:cursor-pointer">
            {tagsArr.map(tag => (
              <li key={Math.random()}>
                <Link
                  href={`/blog/tags/${tag}`}
                  key={tag}
                  className="flex items-center hover:bg-inherit text-sm text-gray-700 dark:text-gray-100 bg-skin-baseTag dark:bg-skin-darkTag px-2 py-[2px] rounded hover:underline w-max"
                >
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default CreateAllTags
