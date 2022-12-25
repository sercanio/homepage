import React from 'react'
import Link from 'next/link'
import { MDXPost } from '@/types'

const CreateRelatedArticles = ({ post }: { post: MDXPost }) => {
  return (
    <section className="px-2 xl:px-4 pt-4 pb-8 xl:block h-max w-full max-w-5xl  mx-auto">
      {post.meta.related.length !== 0 && (
        <>
          <div className="p-2">
            <strong className="uppercase font-bold px-2">Related</strong>
          </div>
          <hr className="border-t-1 xl:border-t-2 dark:border-skin-dark mb-2" />
        </>
      )}
      <ul className="p2">
        {post.meta.related.map(related => {
          return (
            <li
              key={related.title}
              className="dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 leading-7"
            >
              <Link
                href={`/posts${related.url}`}
                key={related.title}
                className="ml-2"
              >
                {related.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default CreateRelatedArticles
