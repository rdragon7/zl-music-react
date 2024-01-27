import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getHotRecommendList, getTopBannerList } from '@/api/recommend'

export interface IState {
  topBannerList: []
  hotRecommendList: []
}

const initialState: IState = {
  topBannerList: [],
  hotRecommendList: []
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

export default recommendSlice.reducer
