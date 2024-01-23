import { configureStore } from '@reduxjs/toolkit'

import recommendSlice from './slice/recommendSlice'

const store = configureStore({
  reducer: {
    recommend: recommendSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // 关闭redux序列化检测
      serializableCheck: false
    })
})

export default store
