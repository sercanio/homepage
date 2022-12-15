import { createSlice } from '@reduxjs/toolkit'
import { WelcomeState } from '../../types'

const initialState: WelcomeState = {
  welcomed: false
}

export const themeSlice = createSlice({
  name: 'welcomed',
  initialState,
  reducers: {
    setWelcome: (state, action) => {
      state.welcomed = action.payload
    }
  }
})

export const { setWelcome } = themeSlice.actions
export default themeSlice.reducer
