import Link from 'next/link'
import React from 'react'
import { MonthsAndArticles, PostMeta } from '@/types'

export const CreateArchive = ({ posts }: { posts: PostMeta[] }) => {
  const years = posts
    .map(post => post.date.split(',')[1].trim())
    .sort((a, b) => +b - +a)
  const uniqueYearsSet = new Set(years)
  const uniqueYearsArray = Array.from(uniqueYearsSet)

  const articleNumberInYear = (year: string) => {
    return years.filter(element => element === year).length
  }

  const handleArchiveClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const listItem = event.target as HTMLElement
  }

  return (
    <>
      {posts.length > 0 && (
        <section className="flex-col justify-center h-max w-full xl:w-max px-4 pt-4 pb-8 rounded-md">
          <div className="p-2">
            <strong className="uppercase font-bold text-gradient-hero px-2">
              archive
            </strong>
          </div>
          <hr className="border-t-2 dark:border-skin-dark mb-2 w-52 xl:mx-auto" />
          <ul className="justify-center ml-2">
            {uniqueYearsArray.map(year => (
              <li
                key={Math.random()}
                onClick={handleArchiveClick}
                className="hover:bg-skin-baseSideBarItemHover dark:hover:bg-skin-darkSideBarItemHover px-2 py-1"
              >
                <Link
                  href={`/archive/${year}`}
                  className="hover:underline  cursor-pointer"
                >
                  {`${year} (${articleNumberInYear(year)})`}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  )
}

export default CreateArchive
