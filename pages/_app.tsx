import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { Roboto } from '@next/font/google'
import Layout from '../src/components/layout'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={roboto.className}>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
