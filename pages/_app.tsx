import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '@/lib/store/store'
import { Provider } from 'react-redux'
import { Roboto } from '@next/font/google'
import Layout from './layout'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout className={roboto.className}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
