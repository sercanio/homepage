import { MainTypes } from '@/types'

const Main = ({ children, className }: MainTypes) => {
  return (
    <main className={`${className} flex flex-col items-center justify-center`}>
      {children}
    </main>
  )
}
export default Main
