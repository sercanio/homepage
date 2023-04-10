import { MainTypes } from '@/types'

const Main = ({ children, className }: MainTypes) => {
  return <main className={`${className}`}>{children}</main>
}
export default Main
