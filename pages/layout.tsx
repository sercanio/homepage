import classNames from 'classnames'
import React, { Dispatch, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../lib/store/store'
import Header from '../components/Header'
import { LayoutChildrenProps } from '../types'

const Layout = ({ children }: LayoutChildrenProps): JSX.Element => {
  const theme = useSelector((state: RootState) => state.theme) // Redux state
  const dispatch: Dispatch<any> = useDispatch()

  const layoutClass = classNames({
    'theme-dark': theme.theme === 'dark',
    'theme-light': theme.theme === 'light'
  })

  return (
    <div
      className={`${layoutClass} bg-skin-base text-skin-base w-screen h-full`}
    >
      <div className="max-w-7xl mx-auto h-screen">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
