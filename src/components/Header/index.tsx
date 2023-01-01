import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-skin-base dark:bg-black color-transition">
      <nav className="z-10 mb-1 max-w-5xl xl:max-w-[1310px] mx-auto px-3">
        <h1 className="text-2xl sm:text-3xl font-bold">
          <Link href="/" className="flex items-center">
            <span className=" text-skin-primary">
              <span className=" text-skin-primary">sercan</span>
              @web{':'}
              <span className=" text-skin-tilde">~</span>
              {'$'}
              &nbsp;
            </span>
            <span className="animate-cursorBlink mb-1  text-skin-caret ">
              |
            </span>
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
