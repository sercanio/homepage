import React from 'react'
import Link from 'next/link'
import { MDXPost } from '@/types'

const CreateSections = ({ post }: { post: MDXPost }) => {
  const [activeSection, setActiveSection] = React.useState<string | null>(null)

  return (
    <section className="px-4 pt-4 pb-8 hidden xl:block h-max">
      <div className="bg-gray-200 dark:bg-gray-800 p-2">
        <strong className="uppercase font-bold px-2">Sections</strong>
      </div>
      <hr className="border-t-1 border-skin-base dark:border-skin-dark mb-2" />
      <ul className="p2">
        {post.meta.headings.map(heading => {
          return (
            <li
              key={heading.text}
              className={`${
                activeSection === heading.text
                  ? 'bg-gray-200 dark:bg-gray-800'
                  : ''
              } dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 leading-7 `}
              style={{
                paddingLeft: heading.level * 8
              }}
            >
              <Link
                href={`${post.meta.slug}/#${heading.text
                  .toLowerCase()
                  .replace(/ /g, '-')}
                  `}
                key={heading.text}
                className="-ml-2"
                onClick={() => setActiveSection(heading.text)}
              >
                {heading.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default CreateSections
