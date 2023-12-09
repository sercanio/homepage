import { useState } from 'react'
import Link from 'next/link'

const CreateSections = ({ post }) => {
  const [activeSection, setActiveSection] = useState(null)

  return (
    <section className="px-4 pt-4 pb-8 hidden xl:block h-max">
      <div className="p-2">
        <strong className="uppercase font-bold text-gradient-hero dark:text-gradient-hero-dark px-2">
          Sections
        </strong>
      </div>
      <hr className="border-t-2 border-skin-base dark:border-skin-dark mb-2" />
      <ul className="p-2">
        {post.meta.headings.map(heading => {
          return (
            <li
              key={heading.text}
              className={`${
                activeSection === heading.text
                  ? 'bg-gray-200 dark:bg-gray-800'
                  : ''
              } dark:text-gray-100 hover:bg-skin-baseSideBarItemHover dark:hover:bg-skin-darkSideBarItemHover leading-`}
              style={{
                paddingLeft: heading.level * 8
              }}
            >
              <Link
                href={`${post.meta.slug}/#${heading.text
                  .toLowerCase()
                  .replace(/ /g, '-') // replace space with '-'
                  .replace(/[.,\/#!$%\^&\*;:"{}=\_`~()?]/g, '') // replace punctions excep '-' with empty string ''
                  // this is because heading id does not accept punctiation like question mark
                  // this can be edited later
                  .replace(/\s{2,}/g, ' ')}
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
