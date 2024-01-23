import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getTopBannerList } from '@/api/recommend'

export interface IState {
  topBannerList: []
}

const initialState: IState = {
  topBannerList: []
}

export const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTopBanner.fulfilled, (state, action) => {
      state.topBannerList = action.payload.data.banners
    })
  }
})

export const getTopBanner = createAsyncThunk(
  'recommend/topBanner',
  async () => {
    const res = await getTopBannerList()
    return res
  }
)

export default recommendSlice.reducer
