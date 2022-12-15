import { createSlice } from '@reduxjs/toolkit'
import { ThemeState } from '../../types'

const initialState: ThemeState = {
  theme: 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
