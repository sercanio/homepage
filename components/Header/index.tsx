import React from 'react'
import { Toggle } from '../Button'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState } from '../../lib/store/store'
import { Dispatch } from '@reduxjs/toolkit'
import { setWelcome } from '../../lib/store/welcomeSlice'
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

  const welcome = useSelector((state: RootState) => state.welcome.welcomed)
  const dispatch: Dispatch<any> = useDispatch()

  const router = useRouter()
  const { pathname } = router

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
                  {!welcome ? (
                    <Typewriter
                      onInit={typewriter => {
                        typewriter
                          .typeString(' node ./well')
                          .pauseFor(150)
                          .deleteChars(1)
                          .pauseFor(100)
                          .typeString('comm')
                          .pauseFor(150)
                          .deleteChars(1)
                          .pauseFor(100)
                          .typeString('e.js')
                          .pauseFor(1000)
                          .deleteAll()
                          .start()
                          .callFunction(() => {
                            dispatch(setWelcome(true))
                          })
                      }}
                      options={{
                        autoStart: true,
                        loop: false,
                        delay: 30,
                        cursorClassName:
                          'font-mono text-skin-cursor animate-cursorBlink mb-1',
                        wrapperClassName: 'font-mono text-skin-base text-2xl'
                      }}
                    />
                  ) : (
                    <span className="font-mono animate-cursorBlink mb-1 text-skin-cursor">
                      |
                    </span>
                  )}
                </span>
                <span className="font-mono animate-cursorBlink mb-1 sm:hidden text-skin-cursor">
                  |
                </span>
              </Link>
            </h1>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Toggle />
          <ul className="hidden sm:flex gap-4 justify-end items-center text-skin-base text-xl mt-[10px] [&>li>*:nth-child(2)]:rounded-full">
            <li className="w-16 flex flex-col items-center hover:text-skin-primary transition-colors duration-150">
              <Link href="/">Blog</Link>
              {pathname === '/' ? (
                <span className="mt-px bg-skin-primary w-2 h-2" />
              ) : (
                <span className="mt-px bg-skin-transparent border-transparent w-2 h-2" />
              )}
            </li>
            <li className="w-16 flex flex-col items-center hover:text-skin-primary transition-colors duration-150">
              <Link href="/portfolio">Portfolio</Link>
              {pathname === '/portfolio' ? (
                <span className="mt-px bg-skin-primary w-2 h-2" />
              ) : (
                <span className="mt-px bg-transparent border-transparent w-2 h-2" />
              )}
            </li>
            <li className="w-16 flex flex-col items-center hover:text-skin-primary transition-colors duration-150">
              <Link href="/about">About</Link>
              {pathname === '/about' ? (
                <span className="mt-px bg-skin-primary w-2 h-2" />
              ) : (
                <span className="mt-px bg-transparent border-transparent w-2 h-2" />
              )}
            </li>
          </ul>
          <Popover className="relative sm:hidden">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center gap-1 px-2 py-1 bg-skin-base h-8 rounded-md ">
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
                        <div className="relative leading-10 w-full text-2xl py-2">
                          Blog
                          {pathname === '/' ? (
                            <span className="absolute right-3 top-5 mt-1 bg-skin-primary w-2 h-2 rounded-full" />
                          ) : (
                            <span className="mt-px bg-transparent border-transparent w-2 h-2 rounded-full" />
                          )}
                        </div>
                      </Popover.Button>
                    </li>
                    <li className="w-32">
                      <Popover.Button
                        as={Link}
                        href="/portfolio"
                        className="w-full"
                      >
                        <div className="relative leading-10 w-full text-2xl py-2">
                          Portfolio
                          {pathname === '/portfolio' ? (
                            <span className="absolute right-3 top-5 mt-1 bg-skin-primary w-2 h-2 rounded-full" />
                          ) : (
                            <span className="mt-px bg-transparent border-transparent w-2 h-2 rounded-full" />
                          )}
                        </div>
                      </Popover.Button>
                    </li>
                    <li className="w-32">
                      <Popover.Button
                        as={Link}
                        href="/about"
                        className="w-full"
                      >
                        <div className="relative leading-10 w-full text-2xl py-2">
                          About
                          {pathname === '/about' ? (
                            <span className="absolute right-3 top-5 mt-1 bg-skin-primary w-2 h-2 rounded-full" />
                          ) : (
                            <span className="mt-px bg-transparent border-transparent w-2 h-2 rounded-full" />
                          )}
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
