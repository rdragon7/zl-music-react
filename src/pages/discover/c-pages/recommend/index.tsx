import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import {
  increment,
  decrement,
  incrementByCount,
  decrementByCount,
  incrementAsync
} from '@/store/slice/counterSlice'

const ZLRecommend = () => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { counter } = useAppSelector((state: RootState) => state.count)
  // other hooks

  // handles
  const add = () => {
    dispatch(increment())
  }
  const sub = () => {
    dispatch(decrement())
  }
  const addByCount = (num: number) => {
    dispatch(incrementByCount(num))
  }
  const subByCount = (num: number) => {
    dispatch(decrementByCount(num))
  }
  // 异步加
  const addAsync = () => {
    dispatch(incrementAsync(2))
  }

  return (
    <div>
      <h2>当前计数为：{counter}</h2>
      <button onClick={add}>+1</button>
      <button onClick={sub}>-1</button>
      <button onClick={() => addByCount(5)}>+5</button>
      <button onClick={() => subByCount(5)}>-5</button>
      <button onClick={addAsync}>异步+</button>
    </div>
  )
}

export default ZLRecommend
