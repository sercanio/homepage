import React from 'react'
import { MainTypes } from '../../../types'

const Main: React.FC<MainTypes> = ({ children, className }): JSX.Element => {
  return (
    <main
      className={`text-skin-base dark:text-skin-dark w-full overflow-hidden ${className}`}
    >
      {children}
    </main>
  )
}
export default Main
