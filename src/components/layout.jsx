import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import { Rubik } from '@next/font/google'

const inter = Rubik({
  weight: '400',
  subsets: ['latin']
})

const Layout = ({ children }) => {
  return (
    <div
      className={`${inter.className} relative flex flex-col justify-center bg-skin-base dark:bg-skin-dark text-skin-base dark:text-skin-dark color-transition pt-1`}
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
