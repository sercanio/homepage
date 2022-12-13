import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ThemeState {
  theme: string
}

const initialState: ThemeState = {
  theme: 'light'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    }
  }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer
