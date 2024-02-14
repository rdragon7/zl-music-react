import { memo } from 'react'

import ZLSongsCategory from '../song-category'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { changeIsShowCategory } from '@/store/slice/songSlice'

import { SongsHeaderWrapper } from './style'

const ZLSongsHeader = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { currentCategory, isShowCategory } = useAppSelector(
    (state: RootState) => state.songs
  )

  // action
  const clickShowCategory = () => {
    dispatch(changeIsShowCategory(!isShowCategory))
  }

  return (
    <SongsHeaderWrapper>
      <div className="header-left">
        <h2 className="title">{currentCategory}</h2>
        <button className="select" onClick={() => clickShowCategory()}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {isShowCategory ? <ZLSongsCategory /> : ''}
      </div>
      <div className="header-right">
        <button className="song-hot">热门</button>
      </div>
    </SongsHeaderWrapper>
  )
})

export default ZLSongsHeader
