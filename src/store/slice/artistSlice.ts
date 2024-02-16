import { createSlice } from '@reduxjs/toolkit'

import { getArtistList } from '@/api/artist'

export interface IState {
  currentArea: number
  currentType: any
  artistList: []
}

const initialState: IState = {
  currentArea: 7,
  currentType: {
    name: '华语男歌手',
    type: 1
  },
  artistList: []
}

export const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    changeCurrentArea(state, action) {
      console.log(state.currentArea)

      state.currentArea = action.payload
    },
    changeCurrentType(state, action) {
      state.currentType = action.payload
    },
    changeArtistList(state, action) {
      state.artistList = action.payload
    }
  }
})

// 获取歌手数据
export const getArtistLists = (area: number, type: any, initial: any) => {
  return (dispatch: any) => {
    getArtistList(area, type, initial).then(res => {
      const data = res.data.artists
      dispatch(changeArtistList(data))
    })
  }
}

export const { changeCurrentArea, changeCurrentType, changeArtistList } =
  artistSlice.actions

export default artistSlice.reducer
