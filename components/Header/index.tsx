import React from 'react'
import { Toggle } from '../Button'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import Typewriter from 'typewriter-effect'
import { FiChevronDown } from 'react-icons/fi'
import { HeaderTypes } from '../../types'
import classNames from 'classnames'

// Styorybook styling
const Header = (props: HeaderTypes) => {
  const headerClass = classNames({
    'theme-dark': props.theme === 'dark',
    'theme-light': props.theme === 'light'
  })
  return (
    <header
      className={`${headerClass} bg-skin-base color-transition py-4 px-4 `}
    >
      <nav className="flex justify-between items-baseline">
        <div className="flex items-center">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-skin-base -ml-2">
              <Link href="/" className="font-mono flex items-center">
                <span className="font-mono text-skin-primary">
                  <span className="font-mono text-skin-primary">sercan</span>
                  @web{':'}
                  <span className="font-mono text-skin-tilde">~</span>
                  {'$'}
                  &nbsp;
                </span>
                <span className=" font-mono hidden sm:flex items-center text-skin-secondary text-2xl ">
                  <Typewriter
                    onInit={typewriter => {
                      typewriter
                        .typeString(' node ./well')
                        .pauseFor(1000)
                        .deleteChars(1)
                        .pauseFor(500)
                        .typeString('comm')
                        .pauseFor(1000)
                        .deleteChars(1)
                        .pauseFor(500)
                        .typeString('e.js  ')
                        .pauseFor(3000)
                        .deleteAll()
                        .start()
                    }}
                    options={{
                      autoStart: true,
                      loop: false,
                      delay: 150,
                      cursorClassName:
                        'font-mono text-cyan-800 animate-cursorBlink mb-1',
                      wrapperClassName: 'font-mono text-skin-secondary'
                    }}
                  />
                </span>
                <span className="font-mono animate-cursorBlink mb-1 sm:hidden">
                  |
                </span>
              </Link>
            </h1>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Toggle />
          <ul className="hidden sm:flex gap-4 justify-end items-center text-skin-base text-xl">
            <li className="hover:bg-opacity-90">
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <Popover className="relative sm:hidden">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center gap-1 px-2 py-1 border-[1px] h-8 rounded-md ">
                  <span>Menu</span>
                  <FiChevronDown
                    className={open ? 'rotate-180 transform' : ''}
                  />
                </Popover.Button>
                <Popover.Overlay className="fixed z-40 inset-0 bg-skin-base opacity-70 h-screen w-screen" />
                <Popover.Panel className="absolute top-12 right-0 z-50 pl-4 py-6 border bg-skin-base">
                  <ul className="flex flex-col text-left gap-4 text-skin-base w-full h-full">
                    <li className="w-full">
                      <Popover.Button as={Link} href="/" className="w-32">
                        <div className="leading-10 w-full text-2xl py-2">
                          Blog
                        </div>
                      </Popover.Button>
                    </li>
                    <li className="w-32">
                      <Popover.Button
                        as={Link}
                        href="/portfolio"
                        className="w-full"
                      >
                        <div className="leading-10 w-full text-2xl py-2">
                          Portfolio
                        </div>
                      </Popover.Button>
                    </li>
                    <li className="w-32">
                      <Popover.Button
                        as={Link}
                        href="/about"
                        className="w-full"
                      >
                        <div className="leading-10 w-full text-2xl py-2">
                          About
                        </div>
                      </Popover.Button>
                    </li>
                  </ul>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      </nav>
    </header>
  )
}

export default Header
