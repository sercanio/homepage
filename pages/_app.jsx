import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
