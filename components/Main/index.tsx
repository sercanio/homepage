import { MainTypes } from '../../types'

const Main: React.FC<MainTypes> = ({ children, className }): JSX.Element => {
  return (
    <main className={`text-skin-base w-full overflow-hidden ${className}`}>
      {children}
    </main>
  )
}
export default Main
