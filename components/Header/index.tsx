import React from 'react'
import { Toggle } from '../Button'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  // Redux dispatch
  return (
    <header className="bg-skin-base py-3 px-4">
      <nav className="flex justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            {/* <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                className="h-8 w-8 mr-2"
                width={64}
                height={64}
              />
            </Link> */}
            <h1 className="text-2xl font-bold text-skin-base">
              <Link href="/">sercan.io</Link>
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
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
