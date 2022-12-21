import Head from 'next/head'
import { HomeProps } from '../types'
import Main from '../src/components/Main'
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

      <Main>
        <h1 className="text-4xl text-skin-bas">Hello World</h1>
      </Main>

      <footer></footer>
    </div>
  )
}
