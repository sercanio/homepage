import { Html, Head, Main, NextScript } from 'next/document'
import { defaultTheme } from './../src/constants/index'

export default function Document() {
  return (
    <Html className={defaultTheme} lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
