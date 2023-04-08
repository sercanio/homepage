import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-skin-base dark:bg-skin-dark color-transition">
      <nav className="z-10 mb-1 max-w-5xl xl:max-w-5xl mx-auto px-3 xl:px-1">
        <h1 className="text-3xl font-bold">
          <Link href="/blog" className="flex items-center">
            <h1> sercanio</h1>
            <h1 className="sr-only">
              {/* eslint-disable-next-line react/no-unescaped-entities*/}
              Sercan Ateş's personal web logs.
            </h1>
          </Link>
        </h1>
      </nav>
    </header>
  )
}

export default Header
