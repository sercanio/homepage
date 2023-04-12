import { MainTypes } from '@/types'

const Main = ({ children, className }: MainTypes) => {
  return (
    <main className={`${className} max-w-5xl mx-auto mt-20 px-1`}>
      {children}
    </main>
  )
}
export default Main
