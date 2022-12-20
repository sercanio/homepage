import { configureStore } from '@reduxjs/toolkit'
import welcomeSlice from './welcomeSlice'

export const store = configureStore({
  reducer: {
    welcome: welcomeSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
