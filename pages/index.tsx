import Head from 'next/head'
import classNames from 'classnames'
import { HomeProps } from '../types/types'

export default function Home(props: HomeProps) {
  const pageClass = classNames({
    'theme-dark': props.Theme === 'dark',
    'theme-light': props.Theme === 'light'
  })

  return (
    <div className={`${pageClass}`}>
      <Head>
        <title>Sercan Ateş | Personal Blog & Portfolio</title>
        <meta
          name="description"
          content="Sercan Ateş's personal blog & portfolio website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen bg-skin-base">
        {/* <main className={`w-screen h-screen ${pageClass || 'theme-dark'}`}> */}
        <h1 className="text-4xl text-skin-base">Hello World</h1>
      </main>

      <footer></footer>
    </div>
  )
}
