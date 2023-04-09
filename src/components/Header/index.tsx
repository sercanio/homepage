import Link from 'next/link'

const Header = () => {
  return (
    <header className="sticky -mt-1 top-0 z-50 color-transition pb-2 backdrop-blur-[7px] border-b border-gray-50 border-opacity-10">
      <nav className="flex justify-between items-center mb-1 max-w-5xl xl:max-w-5xl mx-auto px-3 xl:px-1">
        <h1 className=" -rotate-[5deg] text-gradient">
          sercan.i
          <span className="state">
            <span className="ball-arc">
              <span className="ball"></span>
            </span>
          </span>
        </h1>
        <div className="flex items-center gap-8 pr-3">
          <h2 className="text-xl font-bold text-gradient">
            <Link href="/blog" className="flex items-center">
              Blog
            </Link>
          </h2>
          <h2 className="text-xl font-bold text-gradient">
            <Link href="/" className="flex items-center">
              Portfolio
            </Link>
          </h2>
        </div>
        <p className="sr-only">
          {/* eslint-disable-next-line react/no-unescaped-entities*/}
          Sercan Ateş's personal web logs.
        </p>
      </nav>
    </header>
  )
}

export default Header
