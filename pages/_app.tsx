import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import Layout from './layout'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={roboto.className}>
      <Component {...pageProps} />
    </Layout>
  )
}
