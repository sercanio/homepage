import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../lib/store/store'
import { Dispatch } from '@reduxjs/toolkit'
import { setWelcome } from '../../../lib/store/welcomeSlice'
import { Popover } from '@headlessui/react'
import Typewriter from 'typewriter-effect'
import { FiChevronDown } from 'react-icons/fi'
import { pages } from '../../../lib/constants'

// Styorybook styling
const Header = () => {
  const welcome = useSelector((state: RootState) => state.welcome.welcomed)
  const dispatch: Dispatch<any> = useDispatch()

  const router = useRouter()
  const { pathname } = router

  return (
    <header className="bg-skin-base color-transition py-3 px-4 sm:px-14 relative">
      <nav className="flex justify-between items-baseline relative z-10">
        <div className="flex items-center">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-skin-base -ml-2">
              <Link href="/" className="flex items-center">
                <span className="text-skin-primary">
                  <span className="text-skin-primary">sercan</span>
                  @web{':'}
                  <span className="text-skin-tilde">~</span>
                  {'$'}
                  &nbsp;
                </span>
                <span className=" hidden sm:flex items-center text-2xl ">
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
                          'text-skin-caret animate-cursorBlink mb-1',
                        wrapperClassName: 'text-skin-base text-2xl'
                      }}
                    />
                  ) : (
                    <span className="animate-cursorBlink mb-1 text-skin-caret ">
                      |
                    </span>
                  )}
                </span>
                <span className="animate-cursorBlink mb-1 sm:hidden text-skin-caret">
                  |
                </span>
                <h1 className="sr-only">
                  {/* eslint-disable-next-line react/no-unescaped-entities*/}
                  Sercan Ateş's personal web blog & portfolio
                </h1>
              </Link>
            </h1>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <ul className="hidden sm:flex gap-4 sm:gap-6 justify-end items-center text-skin-base text-xl mt-[10px] [&>li]:nav__link [&>li>*:nth-child(2)]:nav__link--active">
            {pages.map((page, index) => {
              return (
                <li key={index}>
                  <Link href={page.link}>{page.title}</Link>
                  {/* {pathname === page.link ? (
                    <span className="bg-skin-primary" />
                  ) : (
                    <span className="bg-skin-transparent border-transparent" />
                  )} */}
                </li>
              )
            })}
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
                  <ul className="flex flex-col text-left gap-4 text-skin-base w-full h-full [&>*]:w-32">
                    {pages.map((page, index) => {
                      return (
                        <Popover.Button key={index} as={Link} href={page.link}>
                          <div className="relative leading-10 w-full text-2xl py-2 [&>*]:nav__link--active">
                            {page.title}
                            {/* {pathname === page.link ? (
                              <span className="absolute right-3 top-5 bg-skin-primary" />
                            ) : (
                              <span className=" bg-transparent border-transparent" />
                            )} */}
                          </div>
                        </Popover.Button>
                      )
                    })}
                  </ul>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      </nav>
      <hr className="absolute left-0 border-skin-base border-[1px] w-full mt-3" />
      <svg
        className="absolute top-0 left-0 opacity-20 z-0"
        width="100%"
        height="100%"
      >
        <filter id="noisybg">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="5"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect width="100%" height="100%" filter="url(#noisybg)"></rect>
      </svg>
    </header>
  )
}

export default Header
