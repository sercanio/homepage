import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import { IChildren } from '@/types'
import { Rubik } from '@next/font/google'

const inter = Rubik({
  weight: '400',
  subsets: ['latin']
})
const Layout = ({ children }: IChildren) => {
  return (
    <div
      className={`${inter.className} relative flex flex-col justify-center bg-skin-base dark:bg-skin-dark text-skin-base dark:text-skin-dark color-transition pt-1 dark:bg-gradient-to-tr dark:from-[#090c18] dark:to-[#301818]`}
    >
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  )
}

export default Layout
