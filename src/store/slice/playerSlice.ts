import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getSongDetail } from '@/api/player'

export interface IState {
  currentSong: any
}

const initialState: IState = {
  currentSong: {}
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSongDetailList.fulfilled, (state, action) => {
      state.currentSong = action.payload.data.songs[0]
    })
  }
})

// 获取歌曲详情
export const getSongDetailList = createAsyncThunk(
  'player/songDetail',
  async (ids: number) => {
    const res = await getSongDetail(ids)
    return res
  }
)

export default playerSlice.reducer
