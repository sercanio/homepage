import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice'
import welcomeSlice from './welcomeSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    welcome: welcomeSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
