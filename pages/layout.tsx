import React from 'react'
import Header from '../components/Header'
import { LayoutChildrenProps } from '../types'

const Layout = ({ children }: LayoutChildrenProps): JSX.Element => {
  return (
    <React.Fragment>
      <div className="bg-skin-base text-skin-base w-full color-transition">
        <div className="max-w-full mx-auto h-full">
          <Header />
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout
