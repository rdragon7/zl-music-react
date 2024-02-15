import { getHotRadio, getRadioCategory, getRadioRecommend } from '@/api/radio'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface IState {
  radioCategory: []
  currentId: number
  radioRecommend: []
  hotRadio: any
  currentPage: number
}

const initialState: IState = {
  radioCategory: [],
  currentId: 0,
  radioRecommend: [],
  hotRadio: {},
  currentPage: 1
}

export const radioSlice = createSlice({
  name: 'radio',
  initialState,
  reducers: {
    changeCurrentId(state, action) {
      state.currentId = action.payload
    },
    changeHotRadio(state, action) {
      state.hotRadio = action.payload
    },
    changeCurrentPage(state, action) {
      state.currentPage = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getRadioCategoryList.fulfilled, (state, action) => {
        state.radioCategory = action.payload
      })
      .addCase(getRadioRecommendByType.fulfilled, (state, action) => {
        state.radioRecommend = action.payload
      })
  }
})

// 获取电台分类
export const getRadioCategoryList = createAsyncThunk(
  'radio/radioCategory',
  async (_, props: any) => {
    const data = await getRadioCategory()
    const res = data.data.categories
    const id = res[0].id
    props.dispatch(changeCurrentId(id))
    return res
  }
)

// 根据type获取对应电台
export const getRadioRecommendByType = createAsyncThunk(
  'radio/radioRecommend',
  async (type: any) => {
    const data = await getRadioRecommend(type)

    const res = data.data.djRadios
    return res
  }
)

// 根据id获取最热电台
export const getHotRadioById = (
  cateId: number,
  limit?: number,
  offset?: number
) => {
  return (dispatch: any) => {
    getHotRadio(cateId, limit, offset).then(res => {
      const data = res.data
      dispatch(changeHotRadio(data))
    })
  }
}

export const { changeCurrentId, changeHotRadio, changeCurrentPage } =
  radioSlice.actions

export default radioSlice.reducer
