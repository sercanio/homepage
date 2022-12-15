import React from 'react'
import Image from 'next/image'
import Main from '../../components/Main'
import ProfilePicture from '../../assets/images/author.jpg'
import Head from 'next/head'

const index: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>Sercan Ateş | Personal Blog & Portfolio</title>
        <meta
          name="description"
          content="Sercan Ateş's personal blog & portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main className="flex pt-12 sm:pt-32">
        <div className="flex flex-col justify-center gap-4 w-full">
          <div className="flex flex-col gap-4 sm:gap-44 sm:flex-row justify-center items-center w-full">
            <Image
              src={ProfilePicture}
              width={240}
              height={240}
              quality={90}
              alt="My picture"
              className="rounded-full order-1 sm:order-2 animate-slideFromRight sm:animate-slideFromLeft"
            />
            <div className="flex flex-col order-2 sm:order-1 w-full sm:w-96 px-6 sm:px-0 text-center sm:text-start animate-slideFromLeft sm:animate-slideFromRight -mr-[7%]">
              <h1 className="text-3xl font-bold font-mono tracking-wider">
                Sercan Ateş
              </h1>
              <h2 className="text-sm font-mono tracking-tight">
                Frontend web developer based in Turkey
              </h2>
              <p className="text-lg mt-8 pl-[10px] sm:pl-0 sm:w-96">
                I develop web applications, webpages and complite websites using
                React, Next.js, and TypeScript. I also have experience with
                Node.js, Express.js, and MongoDB. I am currently working as a
                freelancer and I am open to new opportunities.
              </p>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}

export default index
