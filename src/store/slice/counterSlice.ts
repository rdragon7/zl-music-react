import { createSlice } from '@reduxjs/toolkit'

export interface IState {
  counter: number
}

const initialState: IState = {
  counter: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1
    },
    decrement(state) {
      state.counter -= 1
    },
    incrementByCount(state, { payload }) {
      state.counter += payload
    },
    decrementByCount(state, { payload }) {
      state.counter -= payload
    },
    incAsync(state, { payload }) {
      state.counter += payload
    }
  }
})

// 异步操作，通过定时器模拟异步
export const incrementAsync = (payload: number) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(incAsync(payload)) // 导出后这里才能dispatch
    }, 1000)
  }
}

export const {
  increment,
  decrement,
  incrementByCount,
  decrementByCount,
  incAsync // 注意，这里要导出
} = counterSlice.actions

export default counterSlice.reducer
