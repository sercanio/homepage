import React from 'react'
import Toggle from '../Button/Toggle'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  // Redux dispatch
  return (
    <header className="bg-skin-base py-3 px-6">
      <nav className="flex justify-between py-1 px-2 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                className="h-8 w-8 mr-2"
              />
            </Link>
            <h1 className="text-2xl font-bold text-skin-base">
              <Link href="/">Sercan</Link>
            </h1>
          </div>
        </div>
        <ul className="flex gap-4 justify-end items-center text-skin-base">
          <li>
            <Toggle />
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Portfolio</Link>
          </li>
          <li>
            <Link href="/Linkbout">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
