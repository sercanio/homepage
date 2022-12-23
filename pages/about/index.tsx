import React from 'react'
import Image from 'next/image'
import Main from '../../src/components/Main'
import Head from 'next/head'
import Typewriter from 'typewriter-effect'
import Contact from '../../src/components/Contact'

const index: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>Sercan Ateş | About Me</title>
        <meta
          name="description"
          content="Sercan Ateş's personal blog & portfolio website"
        />
      </Head>
      <Main className="flex flex-col gap-64 sm:gap-4 h-full">
        <section className="flex flex-col justify-start gap-4 w-full h-80 mt-20 sm:mt-28">
          <div className="flex flex-col gap-4 sm:gap-44 sm:flex-row justify-center items-center sm:items-start w-full">
            <Image
              src="/images/author.jpg"
              width={240}
              height={240}
              quality={90}
              alt="My picture"
              priority
              className="rounded-full order-1 sm:order-2 animate-slideFromRight sm:animate-slideFromLeft"
            />
            <div className="flex flex-col order-2 sm:order-1 w-full sm:w-96 px-6 sm:px-0 text-center sm:text-start animate-slideFromLeft sm:animate-slideFromRight -mr-[7%]">
              <h1 className="text-3xl font-bold  tracking-wider">
                Sercan Ateş
              </h1>
              <h2 className="text-sm tracking-tight mb-8">
                Frontend web developer based in Turkey
              </h2>
              <Typewriter
                onInit={typewriter => {
                  typewriter
                    .typeString(
                      `I develop web applications, webpages and complite websites using
                React, Next.js, and TypeScript. I also have experience with
                Node.js, Express.js, and MongoDB. I am currently working as a
                freelancer and I am open to new opportunities.`
                    )
                    .start()
                }}
                options={{
                  autoStart: true,
                  loop: false,
                  delay: 10,
                  cursorClassName: 'hidden',
                  wrapperClassName: 'text-base mt-8 pl-[10px] sm:pl-0 sm:w-96'
                }}
              />
              <p className="sr-only">
                I develop web applications, webpages and complite websites using
                React, Next.js, and TypeScript. I also have experience with
                Node.js, Express.js, and MongoDB. I am currently working as a
                freelancer and I am open to new opportunities.
              </p>
            </div>
          </div>
        </section>
        <Contact />
      </Main>
    </>
  )
}

export default index
