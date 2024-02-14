import { configureStore } from '@reduxjs/toolkit'

import recommendSlice from './slice/recommendSlice'
import playerSlice from './slice/playerSlice'
import rankingSlice from './slice/rankingSlice'
import songSlice from './slice/songSlice'

const store = configureStore({
  reducer: {
    recommend: recommendSlice,
    player: playerSlice,
    ranking: rankingSlice,
    songs: songSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // 关闭redux序列化检测
      serializableCheck: false
    })
})

export default store
