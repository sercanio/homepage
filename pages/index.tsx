import TechStack from '@/components/TechStack'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sercan Ateş - Web Developer</title>
        <meta name="description" content="Sercan Ateş's personal website." />
      </Head>
      <section className="flex flex-col w-full mt-14 sm:mt-24 md:mt-28">
        <div className="flex flex-col justify-center items-center gap-20 px-8 sm:px-16 md:px-32 lg:px-64">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gradient-hero text-center max-w-3xl">
            Hi! I&apos;m Sercan Ateş a Software Developer
          </h2>
          <div className="flex flex-col gap-12 justify-between items-center max-w-3xl">
            <div className="w-fit relative">
              <span className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-600 via-violet-600 to-lime-400 absolute -top-10 -left-2 opacity-50 z-10" />
              <Image
                src="/images/author.jpg"
                alt="Sercan Ateş's picture"
                width={230}
                height={230}
                className="rounded-full relative z-20 opacity-100"
              />
              <span className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-600 via-violet-600 to-lime-400 absolute top-24 -right-16 opacity-30 z-0" />
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-600 via-violet-600 to-lime-400 absolute top-40 -left-16 opacity-60 z-0" />
            </div>
            <p className="leading-7 tracking-wide text-lg text-center">
              I specialize in creating contemporary, resilient, and inclusive
              Web user interfaces and design systems for enterprises. My
              emphasis on responsive design, performance, and accessibility
              ensures that the products I create are user-friendly and
              accessible to all. If you&apos;re looking for a Front End Engineer
              who can deliver modern and inclusive web design solutions.
              <span className="animate-cursorBlink">&nbsp;|</span>
            </p>
          </div>
        </div>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#F78DA7"></stop>
              <stop offset="95%" stopColor="#8ED1FC"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 83.2248803827751,105.50717703349284 166.4497607655502,78.01435406698566 274,85 C 381.5502392344498,91.98564593301434 513.4258373205743,133.44976076555022 617,130 C 720.5741626794257,126.55023923444978 795.846889952153,78.1866028708134 883,83 C 970.153110047847,87.8133971291866 1069.1866028708134,145.80382775119617 1164,163 C 1258.8133971291866,180.19617224880383 1349.4066985645932,156.5980861244019 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity="0.2"
            className="transition-all duration-200 ease-in-out delay-150 path-0"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="5%" stopColor="#F78DA7"></stop>
              <stop offset="50%" stopColor="#8ED1FC"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 108.71770334928229,295.4354066985646 217.43540669856458,324.87081339712915 318,315 C 418.5645933014354,305.12918660287085 510.97607655502395,255.9521531100479 597,248 C 683.023923444976,240.0478468899521 762.6602870813397,273.3205741626794 865,292 C 967.3397129186603,310.6794258373206 1092.3827751196172,314.76555023923447 1192,308 C 1291.6172248803828,301.23444976076553 1365.8086124401914,283.61722488038276 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="url(#gradient)"
            fillOpacity=".4"
            className="transition-all duration-200 ease-in-out delay-150 path-1"
          ></path>
        </svg>
        <div className="bg-slate-900 text-center overflow-x-hidden">
          <h3 className="text-gradient sm:text-4xl md:text-4xl lg:text-5xl">
            Languages, frameworks and tools
          </h3>
          <div className="relative h-48 md:h-56 lg:h-64 xl:h-72 flex items-start justify-center py-10 gap-8 [&>div>svg]:w-14 [&>div>svg]:h-14 lg:[&>div>svg]:w-20 lg:[&>div>svg]:h-20 [&>div]:whitespace-nowrap [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:gap-3 [&>div]:text-skin-dark hover:[&>div]:scale-110 animate-marquee">
            <TechStack />
            <TechStack />
            <TechStack />
            <TechStack />
          </div>
        </div>
      </section>
    </>
  )
}
