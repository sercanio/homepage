import React from 'react'
import { MainTypes } from '../../../types'

const Main: React.FC<MainTypes> = ({ children, className }): JSX.Element => {
  return <main className={`min-h-screen ${className}`}>{children}</main>
}
export default Main
