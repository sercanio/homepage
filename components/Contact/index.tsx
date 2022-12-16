import React from 'react'

const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 w-full px-2 mb-28">
      <div className="flex flex-col w-full sm:w-[913px] h-[500px] border-2 border-black rounded-lg">
        <div className="grid grid-cols-12 h-8 w-full px-2 bg-black">
          <div className="col-start-4 col-span-6">
            <h1 className="text-center text-lg text-skin-primary font-bold font-mono tracking-wider">
              Contact
            </h1>
          </div>
          <div className="col-span-3 flex items-center justify-end gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full "></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full "></div>
            <div className="w-4 h-4 bg-red-600 rounded-full "></div>
          </div>
        </div>
        <div className="h-full w-full">
          <svg
            className="z-50 opacity-75 mix-blend-soft-light"
            width="100%"
            height="100%"
          >
            <filter id="pedroduarteisalegend">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.80"
                numOctaves="5"
                stitchTiles="stitch"
              ></feTurbulence>
            </filter>
            <rect
              width="100%"
              height="100%"
              filter="url(#pedroduarteisalegend)"
            ></rect>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Contact
