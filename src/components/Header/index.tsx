import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../lib/store/store'
import { Dispatch } from '@reduxjs/toolkit'
import { setWelcome } from '../../../lib/store/welcomeSlice'
import { Popover } from '@headlessui/react'
import Typewriter from 'typewriter-effect'
import { FiChevronDown } from 'react-icons/fi'
import { pages } from '../../../lib/constants'

// Styorybook styling
const Header: React.FC = () => {
  const welcome = useSelector((state: RootState) => state.welcome.welcomed)
  const dispatch: Dispatch<any> = useDispatch()

  return (
    <header className="bg-skin-base dark:bg-black color-transition py-4 px-4 relative">
      <nav className="flex justify-between items-baseline relative z-10 mb-1 max-w-5xl lg:px-4 mx-auto">
        <div className="flex items-center">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold   -ml-2">
              <Link href="/" className="flex items-center">
                <span className=" text-skin-primary">
                  <span className=" text-skin-primary">sercan</span>
                  @web{':'}
                  <span className=" text-skin-tilde">~</span>
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
                          ' text-skin-caret animate-cursorBlink mb-1',
                        wrapperClassName: ' text-skin-primary text-2xl'
                      }}
                    />
                  ) : (
                    <span className="animate-cursorBlink mb-1  text-skin-caret ">
                      |
                    </span>
                  )}
                </span>
                <span className="animate-cursorBlink mb-1 sm:hidden  text-skin-caret">
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
          <ul className="hidden sm:flex gap-4 sm:gap-6 justify-end items-center  text-skin-primary text-xl mt-[10px] [&>li]:nav__link [&>li>*:nth-child(2)]:nav__link--active">
            {pages.map((page, index) => {
              return (
                <li key={index}>
                  <Link href={page.link}>{page.title}</Link>
                </li>
              )
            })}
          </ul>
          <Popover className="relative sm:hidden">
            {({ open }) => (
              <>
                <Popover.Button className="flex items-center gap-1 px-2 py-1 bg-skin-base h-8 rounded-md ">
                  <span className="text-skin-base ">Menu</span>
                  <FiChevronDown
                    color="black"
                    className={open ? ' rotate-180 transform' : ''}
                  />
                </Popover.Button>
                <Popover.Overlay className="fixed z-40 inset-0 bg-skin-base dark:bg-skin-dark opacity-70 dark:opacity-50 h-screen w-screen" />
                <Popover.Panel className="absolute top-12 right-0 z-50 pl-4 py-6 border bg-skin-base dark:bg-skin-dark">
                  <ul className="flex flex-col text-left gap-4 h-full [&>*]:w-32">
                    {pages.map((page, index) => {
                      return (
                        <Popover.Button key={index} as={Link} href={page.link}>
                          <div className="relative leading-10 text-2xl py-2 [&>*]:nav__link--active">
                            {page.title}
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
    </header>
  )
}

export default Header
