import { createSlice } from '@reduxjs/toolkit'

export interface IState {
  isShowLogin: boolean
}

const initialState: IState = {
  isShowLogin: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeIsShowLogin(state, action) {
      state.isShowLogin = action.payload
    }
  }
})

export const { changeIsShowLogin } = loginSlice.actions

export default loginSlice.reducer
