import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/lib/store/store'
import { Dispatch } from '@reduxjs/toolkit'
import { setWelcome } from '@/lib/store/welcomeSlice'
// import { Popover } from '@headlessui/react'

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
                <span className="animate-cursorBlink mb-1  text-skin-caret ">
                  |
                </span>
                <h1 className="sr-only">
                  {/* eslint-disable-next-line react/no-unescaped-entities*/}
                  Sercan Ateş's personal web logs
                </h1>
              </Link>
            </h1>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
