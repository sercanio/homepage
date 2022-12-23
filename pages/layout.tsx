import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import { LayoutChildrenProps } from '@/types'

const Layout = ({ children, className }: LayoutChildrenProps) => {
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
