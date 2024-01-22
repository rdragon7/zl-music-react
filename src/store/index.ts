import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './slice/counterSlice'

const store = configureStore({
  reducer: {
    count: counterSlice
  }
})

export default store
