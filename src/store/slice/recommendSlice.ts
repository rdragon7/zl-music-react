import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  getTopBannerList,
  getHotRecommendList,
  getNewAlbumList,
  getPlayList
} from '@/api/recommend'

export interface IState {
  topBannerList: []
  hotRecommendList: []
  newAlbumList: []
  upRanking: NonNullable<unknown>
  newRanking: NonNullable<unknown>
  originRanking: NonNullable<unknown>
}

const initialState: IState = {
  topBannerList: [],
  hotRecommendList: [],
  newAlbumList: [],
  upRanking: {},
  newRanking: {},
  originRanking: {}
}

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopBanner.fulfilled, (state, action) => {
        state.topBannerList = action.payload && action.payload.data.banners
      })
      .addCase(getHotRecommend.fulfilled, (state, action) => {
        state.hotRecommendList = action.payload && action.payload.data.result
      })
      .addCase(getNewAlbum.fulfilled, (state, action) => {
        state.newAlbumList = action.payload && action.payload.data.albums
      })
      .addCase(getUpRanking.fulfilled, (state, action) => {
        state.upRanking = action.payload && action.payload.data.playlist
      })
      .addCase(getNewRanking.fulfilled, (state, action) => {
        state.newRanking = action.payload && action.payload.data.playlist
      })
      .addCase(getOriginRanking.fulfilled, (state, action) => {
        state.originRanking = action.payload && action.payload.data.playlist
      })
  }
})

// 获取轮播图数据
export const getTopBanner = createAsyncThunk(
  'recommend/topBanner',
  async () => {
    const res = await getTopBannerList()
    return res
  }
)

// 获取热门推荐列表数据
export const getHotRecommend = createAsyncThunk(
  'recommend/hotRecommend',
  async (limit: number) => {
    const res = await getHotRecommendList(limit)
    return res
  }
)

// 获取新碟上架列表数据
export const getNewAlbum = createAsyncThunk('recommend/newAlbum', async () => {
  const res = await getNewAlbumList()
  return res
})

// 获取排行榜-飙升榜数据
export const getUpRanking = createAsyncThunk(
  'recommend/upRanking',
  async (id: number) => {
    const res = await getPlayList(id)
    return res
  }
)

// 获取排行榜-原创榜数据
export const getNewRanking = createAsyncThunk(
  'recommend/newRanking',
  async (id: number) => {
    const res = await getPlayList(id)
    return res
  }
)

// 获取排行榜-飙升榜数据
export const getOriginRanking = createAsyncThunk(
  'recommend/originRanking',
  async (id: number) => {
    const res = await getPlayList(id)
    return res
  }
)

export default recommendSlice.reducer
