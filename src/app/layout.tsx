import { Metadata } from 'next'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Main from '@/components/Main'
import { defaultTheme } from '@/constants'
import '@/styles/globals.css'

// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'Welcome to Next.js'
// }
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={defaultTheme} lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div
          className={`relative flex flex-col justify-center bg-skin-base dark:bg-skin-dark text-skin-base dark:text-skin-dark color-transition pt-1`}
        >
          <Header />
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
