import React from 'react'
import { Dispatch } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from '../../lib/store/store'
import { useDispatch } from 'react-redux'
import { setTheme } from '../../lib/store/themeSlice'

const Header = () => {
  const theme = useSelector((state: RootState) => state.theme) // Redux state
  const dispatch: Dispatch<any> = useDispatch() // Redux dispatch
  return (
    <header className="bg-skin-base">
      <button onClick={() => dispatch(setTheme())}>Switch theme</button>
    </header>
  )
}

export default Header
