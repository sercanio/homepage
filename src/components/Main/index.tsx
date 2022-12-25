import { MainTypes } from '@/types'

const Main = ({ children, className }: MainTypes) => {
  return <main className={`min-h-screen ${className}`}>{children}</main>
}
export default Main
