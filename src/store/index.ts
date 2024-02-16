import { configureStore } from '@reduxjs/toolkit'

import recommendSlice from './slice/recommendSlice'
import playerSlice from './slice/playerSlice'
import rankingSlice from './slice/rankingSlice'
import songSlice from './slice/songSlice'
import radioSlice from './slice/radioSlice'
import artistSlice from './slice/artistSlice'
import albumSlice from './slice/albumSlice'

const store = configureStore({
  reducer: {
    recommend: recommendSlice,
    player: playerSlice,
    ranking: rankingSlice,
    songs: songSlice,
    radio: radioSlice,
    artist: artistSlice,
    album: albumSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // 关闭redux序列化检测
      serializableCheck: false
    })
})

export default store
