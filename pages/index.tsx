import Head from 'next/head'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../lib/store/store'
import { setTheme } from '../lib/store/themeSlice'
import { HomeProps } from '../types/types'

export default function Home(props: HomeProps) {
  const theme = useSelector((state: RootState) => state.theme) // Redux state
  const dispatch = useDispatch() // Redux dispatch

  const pageClass = classNames({
    'theme-dark': theme.theme === 'dark',
    'theme-light': theme.theme === 'light'
  })
  console.log(props.backgroundColor, theme.theme)
  return (
    <div
      className={`${pageClass || theme.theme}`}
      style={{ background: props.backgroundColor }}
    >
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
        <button onClick={() => dispatch(setTheme())}>Switch theme</button>
        <h1 className="text-4xl text-skin-base">Hello World</h1>
      </main>

      <footer></footer>
    </div>
  )
}
