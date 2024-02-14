import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getSongByCategory, getSongCategory } from '@/api/songs'

export interface IState {
  currentCategory: string
  isShowCategory: boolean
  category: any
  categorySong: any
  currentPage: number
}

const initialState: IState = {
  currentCategory: '全部',
  isShowCategory: false,
  category: {},
  categorySong: {},
  currentPage: 1
}

export const songSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    changeCurrentCategory(state, action) {
      state.currentCategory = action.payload
    },
    changeIsShowCategory(state, action) {
      state.isShowCategory = action.payload
    },
    changeCategorySong(state, action) {
      state.categorySong = action.payload
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getCategoryList.fulfilled, (state, action) => {
      state.category = action.payload
    })
  }
})

// 获取歌单分类
export const getCategoryList = createAsyncThunk('songs/category', async () => {
  const data = await getSongCategory()
  const res = data.data
  return res
})

// 根据分类获取歌曲列表
export const getCategorySong = (
  cat?: string,
  limit?: number,
  offset?: number
) => {
  return (dispatch: any) => {
    getSongByCategory(cat, limit, offset).then(res => {
      const data = res.data
      dispatch(changeCategorySong(data))
    })
  }
}

export const {
  changeCurrentCategory,
  changeIsShowCategory,
  changeCategorySong,
  changeCurrentPage
} = songSlice.actions

export default songSlice.reducer
