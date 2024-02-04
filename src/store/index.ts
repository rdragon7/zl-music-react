import { configureStore } from '@reduxjs/toolkit'

import recommendSlice from './slice/recommendSlice'
import playerSlice from './slice/playerSlice'

const store = configureStore({
  reducer: {
    recommend: recommendSlice,
    player: playerSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // 关闭redux序列化检测
      serializableCheck: false
    })
})

export default store
