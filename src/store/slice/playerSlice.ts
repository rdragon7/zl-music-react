import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getSongDetail } from '@/api/player'

export interface IState {
  currentSong: any
  currentSongIndex: number
  playList: []
  sequence: number
}

const initialState: IState = {
  currentSong: {},
  currentSongIndex: 0,
  playList: [],
  sequence: 0 // 0 => 顺序播放 1=> 随机播放 2 => 单曲循环
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changePlayList(state, action) {
      state.playList = action.payload
    },
    changeCurrentSongIndex(state, action) {
      state.currentSongIndex = action.payload
    },
    changeCurrentSong(state, action) {
      state.currentSong = action.payload
    },
    changeSequence(state, action) {
      state.sequence = action.payload
    }
  }
  /* extraReducers: builder => {
    builder.addCase(getSongDetailList.fulfilled, (state, action) => {
      state.currentSong = action.payload && action.payload.data.songs[0]
    })
  } */
})

// 获取歌曲详情
export const getSongDetailList = createAsyncThunk(
  'player/songDetail',
  async (ids: number, { getState, dispatch }) => {
    // 获取playList
    const playList = (getState() as any).player.playList
    // 获取当前歌曲的索引
    const songIndex = playList.findIndex((item: any) => {
      return item.id === ids
    })

    // 判断是否找到歌曲
    if (songIndex !== -1) {
      // 找到歌曲
      dispatch(changeCurrentSongIndex(songIndex))
      const song = playList[songIndex]
      dispatch(changeCurrentSong(song))
    } else {
      // 没有找到歌曲
      const data = await getSongDetail(ids)
      const res = data.data.songs[0]
      const newPlayList = [...playList]
      newPlayList.push(res)
      dispatch(changePlayList(newPlayList))
      dispatch(changeCurrentSongIndex(newPlayList.length - 1))
      dispatch(changeCurrentSong(res))
      return res
    }
  }
)

// 改变歌曲播放方式
export const changeCurrentSongAnIndex = (tag: number) => {
  return (dispatch: any, getState: any) => {
    // 获取歌曲播放方式
    const sequence = getState().player.sequence
    // 获取当前歌曲索引
    let songIndex = getState().player.currentSongIndex
    const playList = getState().player.playList

    // 判断当前播放列表
    switch (sequence) {
      case 1: // 随机播放
        {
          let randomIndex = Math.floor(Math.random() * playList.length)
          while (randomIndex === songIndex) {
            randomIndex = Math.floor(Math.random() * playList.length)
          }

          songIndex = randomIndex
        }
        break
      default:
        songIndex += tag
        if (songIndex >= playList.length) {
          songIndex = 0
        }
        if (songIndex < 0) {
          songIndex = playList.length - 1
        }
    }
    const currentSong = playList[songIndex]
    dispatch(changeCurrentSongIndex(songIndex))
    dispatch(changeCurrentSong(currentSong))
  }
}

export const {
  changePlayList,
  changeCurrentSongIndex,
  changeCurrentSong,
  changeSequence
} = playerSlice.actions

export default playerSlice.reducer
