import { configureStore } from '@reduxjs/toolkit'
import cryptoNewsSlice from './Slices/cryptoSlice'

export const store = configureStore({
  reducer: {
    crypto: cryptoNewsSlice
  },
})
