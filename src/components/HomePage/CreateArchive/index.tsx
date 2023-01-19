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

  const articlePostedMonthsIn = (year: string) => {
    const months: string[] = []
    const monthsAndArticles: MonthsAndArticles[] = []
    posts.map(post => {
      if (post.date.split(',')[1].trim() === year)
        months.push(post.date.split(' ')[0].trim())
    })
    const uniqueMonthsSet = new Set(months)
    const uniqueMonthsArray = Array.from(uniqueMonthsSet)
    uniqueMonthsArray.forEach(uniqueMonth => {
      const monthArr = months.filter(month => month === uniqueMonth)
      monthsAndArticles.push({
        month: uniqueMonth,
        articleNumber: monthArr.length
      })
    })
    return monthsAndArticles
  }

  const handleArchiveClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const listItem = event.target as HTMLElement
  }

  return (
    <>
      {posts.length > 0 && (
        <section className="flex-col justify-center h-max w-full xl:w-max p-5 hover:bg-skin-baseCardHover dark:hover:bg-opacity-5 rounded-md">
          <div className="p-2">
            <strong className="uppercase font-bold px-2">archive</strong>
          </div>
          <hr className="border-t-2 dark:border-skin-dark mb-2 w-52 xl:mx-auto" />
          <ul className="justify-center px-4 [&>li]:mx-1 [&>li]:my-2 [&>li]:cursor-pointer">
            {uniqueYearsArray.map(year => (
              <li key={Math.random()} onClick={handleArchiveClick}>
                <Link href={`/archive/${year}`} className="hover:underline">
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
