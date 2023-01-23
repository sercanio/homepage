import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import { LayoutChildrenProps } from '@/types'

const Layout = ({ children, className }: LayoutChildrenProps) => {
  return (
    <>
      <div
        className={`${className} flex flex-col gap-12 justify-center bg-skin-base dark:bg-skin-dark text-skin-base dark:text-skin-dark color-transition min-w-fit pt-1`}
      >
        <Header />
        <Main className="max-w-5xl mx-auto">{children}</Main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
