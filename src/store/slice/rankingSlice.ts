import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getRankingComment, getTopList } from '@/api/ranking'
import { getPlayList } from '@/api/recommend'

export interface IState {
  topList: []
  currentIndex: number
  playList: any
  rankingComment: any
  curPage: number
}

const initialState: IState = {
  topList: [],
  currentIndex: 0,
  playList: {},
  rankingComment: {},
  curPage: 1
}

export const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    changeCurrentIndex(state, action) {
      state.currentIndex = action.payload
    },
    changeRankingComments(state, action) {
      state.rankingComment = action.payload
    },
    changeCurPage(state, action) {
      state.curPage = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getRankingTopList.fulfilled, (state, action) => {
        state.topList = action.payload
      })
      .addCase(getRankingPlayList.fulfilled, (state, action) => {
        state.playList = action.payload
      })
  }
})

// 获取歌曲榜单
export const getRankingTopList = createAsyncThunk(
  'ranking/topList',
  async () => {
    const data = await getTopList()
    const res = data.data.list
    return res
  }
)

// 获取各个榜单详情
export const getRankingPlayList = createAsyncThunk(
  'ranking/playList',
  async (id: number) => {
    const data = await getPlayList(id)
    const res = data.data.playlist
    return res
  }
)

// 获取榜单评论
export const getRankingComments = (
  id: number,
  limit?: number,
  offset?: number
) => {
  return (dispatch: any) => {
    getRankingComment(id, limit, offset).then(res => {
      const data = res.data
      dispatch(changeRankingComments(data))
    })
  }
}

export const { changeCurrentIndex, changeRankingComments, changeCurPage } =
  rankingSlice.actions

export default rankingSlice.reducer
