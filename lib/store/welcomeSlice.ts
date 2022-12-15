import { createSlice } from '@reduxjs/toolkit'
import { WelcomeState } from '../../types'

const initialState: WelcomeState = {
  welcomed: false
}

export const themeSlice = createSlice({
  name: 'welcomed',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.welcomed = action.payload
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
