import React from 'react'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Main from '../src/components/Main'
import { LayoutChildrenProps } from '../types'

const Layout = ({ children, className }: LayoutChildrenProps): JSX.Element => {
  return (
    <React.Fragment>
      <div
        className={`${className} flex flex-col gap-12 bg-skin-base dark:bg-black text-skin-base dark:text-skin-dark color-transition`}
      >
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
