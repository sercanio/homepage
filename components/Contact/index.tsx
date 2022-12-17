import React from 'react'

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 w-full px-2 mb-12 animate-slideFromBottom">
      <div className="flex flex-col w-full sm:w-[913px] h-[400px] border-2 border-black rounded-lg">
        <div className="grid grid-cols-12 h-8 w-full px-2 bg-black">
          <div className="col-start-4 col-span-6">
            <h1 className="text-center text-lg text-skin-primary font-bold tracking-widest">
              Contact
            </h1>
          </div>
          <div className="col-span-3 flex items-center justify-end gap-2 [&>*]:console__title--buttons">
            <div className="bg-green-500"></div>
            <div className=" bg-yellow-500"></div>
            <div className="bg-red-600"></div>
          </div>
        </div>
        <div className="h-full w-full opacity-30">
          <svg
            className="top-0 left-0 opacity-75 bg-skin-console"
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
    </section>
  )
}

export default Contact
