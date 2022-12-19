import React from 'react'
import { AiOutlineEnter } from 'react-icons/ai'
const Contact = () => {
  const [cursorBlink, setcursorBlink] = React.useState(true)
  const nameRef = React.useRef<HTMLInputElement>(null)

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <section className="flex flex-col justify-center items-center gap-4 w-full px-2 mb-12 animate-slideFromBottom ">
      <div className="flex flex-col w-full sm:w-[913px] h-[400px] border-2 border-black rounded-lg">
        <div className="grid grid-cols-12 h-8 w-full px-2 bg-black">
          <div className="col-start-4 col-span-6">
            <h1 className="text-center text-lg text-skin-primary font-bold tracking-widest">
              Contact
            </h1>
          </div>
          <div className="col-span-3 flex items-center justify-end gap-2 [&>*]:console__title--buttons">
            <div className="bg-red-600"></div>
            <div className="bg-green-500"></div>
            <div className=" bg-yellow-500"></div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <div className="absolute z-10 w-full p-2">
            <form onSubmit={submitHandler}>
              <label className="flex flex-nowrap gap-1 items-center w-full h-6">
                <span className="font-mono text-skin-primary">
                  <span className="font-mono text-skin-primary">guest</span>
                  @sercan.io{':'}
                  <span className="font-mono text-skin-tilde">~</span>
                  {'$'}
                  &nbsp;
                </span>
                {cursorBlink ? (
                  <span className="relative font-mono animate-cursorBlink text-skin-caret">
                    |
                  </span>
                ) : (
                  <span className="font-mono text-transparent">|</span>
                )}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  ref={nameRef}
                  className="w-full bg-inherit placeholder:opacity-60 font-mono focus:outline-none caret-skin-base -ml-2"
                  onFocus={() => setcursorBlink(false)}
                  onBlur={() => setcursorBlink(true)}
                />
                <span className="text-skin-tilde">Enter</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-skin-primary"
                  height="1.5rem"
                  width="1.5rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 0 0 0 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </label>
            </form>
          </div>
          <div className=" opacity-30">
            <svg
              className="absolute opacity-50 bg-skin-console z-0"
              width="100%"
              height="100%"
            >
              <filter id="noisybg">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.80"
                  numOctaves="5"
                  stitchTiles="stitch"
                ></feTurbulence>
              </filter>
              <rect width="100%" height="100%" filter="url(#noisybg)"></rect>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
