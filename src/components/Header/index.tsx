import Link from 'next/link'
import ChangeThemeButton from '@/components/Button/ChangeTheme'

const Header = (): JSX.Element => {
  return (
    <header className="sticky -mt-1 top-0 z-50 color-transition pb-2 backdrop-blur-[7px] border-b border-gray-50 border-opacity-10">
      <nav className="flex justify-between items-center mb-1 max-w-[750px] xl:max-w-5xl mx-auto px-3 xl:px-2">
        <h1 className="animate-scale text-gradient">
          <Link href="/">
            sercan.i<span className="sr-only">o</span>
            <span className="state">
              <span className="ball-arc">
                <span className="ball"></span>
              </span>
            </span>
          </Link>
        </h1>
        <ChangeThemeButton />
        <p className="sr-only">
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          Sercan Ateş's personal web logs.
        </p>
      </nav>
    </header>
  )
}

export default Header
