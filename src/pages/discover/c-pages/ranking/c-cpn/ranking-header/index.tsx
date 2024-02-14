import { memo } from 'react'

import ZLSongOperationBar from '@/components/song-operation-bar'
import { RootState, useAppSelector } from '@/store/hook'
import { formatMonthDay } from '@/utils/format-data'

import { RankingHeaderWrapper } from './style'

const ZLRankingHeader = memo(() => {
  // state & props

  // redux hooks
  const { playList, topList, currentIndex } = useAppSelector(
    (state: RootState) => state.ranking
  )

  // other hooks

  return (
    <RankingHeaderWrapper>
      <div className="header-image">
        <img src={playList && playList.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="header-info">
        <div className="title">{playList && playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{playList && formatMonthDay(playList.updateTime)}</div>
          <div className="update-f">
            (
            {topList[currentIndex] &&
              (topList[currentIndex] as any).updateFrequency}
            )
          </div>
        </div>
        <ZLSongOperationBar
          favorTitle={`(${playList && playList.subscribedCount})`}
          shareTitle={`(${playList && playList.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${playList && playList.commentCount})`}
        />
      </div>
    </RankingHeaderWrapper>
  )
})

export default ZLRankingHeader
