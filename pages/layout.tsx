import classNames from 'classnames'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../lib/store/store'
import Header from '../components/Header'
import { LayoutChildrenProps } from '../types'

const Layout = ({ children }: LayoutChildrenProps): JSX.Element => {
  const theme = useSelector((state: RootState) => state.theme) // Redux state

  const layoutClass = classNames({
    'theme-dark': theme.theme === 'dark',
    'theme-light': theme.theme === 'light'
  })
  return (
    <div className={layoutClass}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
