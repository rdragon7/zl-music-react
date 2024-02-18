import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getSearchSuggest } from '@/api/search'

export interface IState {
  searchSong: []
  searchArtist: []
  searchAlbum: []
}

const initialState: IState = {
  searchSong: [],
  searchArtist: [],
  searchAlbum: []
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSearchSong.fulfilled, (state, action) => {
        state.searchSong = action.payload
      })
      .addCase(getSearchArtist.fulfilled, (state, action) => {
        state.searchArtist = action.payload
      })
      .addCase(getSearchAlbum.fulfilled, (state, action) => {
        state.searchAlbum = action.payload
      })
  }
})

// 根据关键词搜索歌曲
export const getSearchSong = createAsyncThunk(
  'search/song',
  async (keywords: string) => {
    const data = await getSearchSuggest(keywords)
    const res = data.data.result.songs
    return res
  }
)

// 根据关键词搜索歌手
export const getSearchArtist = createAsyncThunk(
  'search/artist',
  async (keywords: string) => {
    const data = await getSearchSuggest(keywords)
    const res = data.data.result.artists
    return res
  }
)

// 根据关键词搜索新碟
export const getSearchAlbum = createAsyncThunk(
  'search/album',
  async (keywords: string) => {
    const data = await getSearchSuggest(keywords)
    const res = data.data.result.albums
    return res
  }
)

export default searchSlice.reducer
