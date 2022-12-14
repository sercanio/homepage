import Head from 'next/head'
import { HomeProps } from '../types'

export default function Home(props: HomeProps) {
  return (
    <div style={{ background: props.backgroundColor }}>
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

        <h1 className="text-4xl text-skin-bas">Hello World</h1>
      </main>

      <footer></footer>
    </div>
  )
}
