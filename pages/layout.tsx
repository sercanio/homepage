import classNames from 'classnames'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../lib/store/store'
import Header from '../components/Header'
import { LayoutChildrenProps } from '../types'

const Layout = ({ children }: LayoutChildrenProps): JSX.Element => {
  const theme = useSelector((state: RootState) => state.theme) // Redux state
  const layoutClass = classNames({
    'theme-dark': theme.theme === 'dark',
    'theme-light': theme.theme === 'light'
  })

  return (
    <React.Fragment>
      <div
        className={`${layoutClass} bg-skin-base text-skin-base w-full color-transition`}
      >
        <div className="max-w-full mx-auto h-full">
          <Header />
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout
