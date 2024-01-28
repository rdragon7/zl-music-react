import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import {
  getNewAlbumList,
  getHotRecommendList,
  getTopBannerList
} from '@/api/recommend'

export interface IState {
  topBannerList: []
  hotRecommendList: []
  newAlbumList: []
}

const initialState: IState = {
  topBannerList: [],
  hotRecommendList: [],
  newAlbumList: []
}

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopBanner.fulfilled, (state, action) => {
        state.topBannerList = action.payload.data.banners
      })
      .addCase(getHotRecommend.fulfilled, (state, action) => {
        state.hotRecommendList = action.payload.data.result
      })
      .addCase(getNewAlbum.fulfilled, (state, action) => {
        state.newAlbumList = action.payload.data.albums
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

export default recommendSlice.reducer
