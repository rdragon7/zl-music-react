import { memo, useEffect } from 'react'

import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import {
  changeCurrentIndex,
  getRankingComments,
  getRankingPlayList,
  getRankingTopList
} from '@/store/slice/rankingSlice'
import { getSizeImage } from '@/utils/format-data'

import { RankingListWrapper } from './style'

const ZLTopList = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { topList, currentIndex } = useAppSelector(
    (state: RootState) => state.ranking
  )

  // other hooks
  useEffect(() => {
    dispatch(getRankingTopList())
  }, [dispatch])

  useEffect(() => {
    const id = topList[currentIndex] && (topList[currentIndex] as any).id
    if (!id) return
    // 根据id获取榜单详情
    dispatch(getRankingPlayList(id))
    // 根据id获取榜单评论
    dispatch(getRankingComments(id))
  }, [dispatch, currentIndex, topList])

  // action
  const handleItemClick = (index: number) => {
    dispatch(changeCurrentIndex(index))
    const id = (topList[currentIndex] as any).id
    dispatch(getRankingPlayList(id))
  }

  return (
    <RankingListWrapper>
      {topList &&
        topList.map((item: any, index: number) => {
          let header
          if (index === 0 || index === 4) {
            header = (
              <div className="header">
                {index === 0 ? '云音乐特色榜' : '全球媒体榜'}
              </div>
            )
          }
          return (
            <div key={item.id}>
              {header}
              <div
                className={'item ' + (index === currentIndex ? 'active' : '')}
                onClick={() => handleItemClick(index)}
              >
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })}
    </RankingListWrapper>
  )
})

export default ZLTopList
