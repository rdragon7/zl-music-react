import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getAllAlbum, getHotAlbum } from '@/api/album'

export interface IState {
  hotAlbum: []
  allAlbum: any
  currentArea: string
  currentPage: number
}

const initialState: IState = {
  hotAlbum: [],
  allAlbum: {},
  currentArea: 'all',
  currentPage: 1
}

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    changeAllAlbum(state, action) {
      state.allAlbum = action.payload
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload
    },
    changeCurrentArea(state, action) {
      state.currentArea = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(getHotAlbumList.fulfilled, (state, action) => {
      state.hotAlbum = action.payload
    })
  }
})

// 获取热门新碟
export const getHotAlbumList = createAsyncThunk('album/hotAlbum', async () => {
  const data = await getHotAlbum()
  const res = data.data.albums
  return res
})

// 获取所有新碟
export const getAllAlbumList = (area: any, limit: number, offset: number) => {
  return (dispatch: any) => {
    getAllAlbum(area, limit, offset).then(res => {
      const data = res.data
      dispatch(changeAllAlbum(data))
    })
  }
}

export const { changeAllAlbum, changeCurrentPage, changeCurrentArea } =
  albumSlice.actions

export default albumSlice.reducer
