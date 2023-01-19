import Link from 'next/link'
import React from 'react'
import { PostMeta } from '@/types'

export const CreateArchive = ({ posts }: { posts: PostMeta[] }) => {
  const years = posts
    .map(post => post.date.split(',')[1].trim())
    .sort((a, b) => +b - +a)
  return (
    <>
      {posts.length > 0 && (
        <section className="xl:sticky top-72 flex-col justify-center h-max w-full xl:w-max p-5 hover:bg-gray-100 dark:hover:bg-opacity-5 rounded-md">
          <div className="p-2">
            <strong className="uppercase font-bold px-2">archive</strong>
          </div>
          <hr className="border-t-2 dark:border-skin-dark mb-2 w-52 xl:mx-auto" />
          <ul className="justify-center px-4 [&>li]:mx-1 [&>li]:my-2 [&>li]:cursor-pointer">
            {years.map(year => (
              <li key={Math.random()}>{year}</li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default CreateArchive
