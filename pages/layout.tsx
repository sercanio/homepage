import React from 'react'
import Header from '../src/components/Header'
import { LayoutChildrenProps } from '../types'

const Layout = ({ children, className }: LayoutChildrenProps): JSX.Element => {
  return (
    <React.Fragment>
      <div
        className={`${className} bg-skin-base text-skin-base w-full color-transition`}
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
