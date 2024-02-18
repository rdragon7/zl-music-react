import { memo } from 'react'

import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { formatMinuteSecond } from '@/utils/format-data'
import {
  changeCurrentSongIndex,
  getSongDetailList
} from '@/store/slice/playerSlice'

import { PlayerListWrapper } from './style'

const ZLPlayerList = memo(() => {
  // redux hooks
  const dispatch = useAppDispatch()
  const { playList, currentSongIndex } = useAppSelector(
    (state: RootState) => state.player
  )

  // action
  const handleItem = (index: number, item: any) => {
    dispatch(changeCurrentSongIndex(index))
    dispatch(getSongDetailList(item.id))
  }

  return (
    <PlayerListWrapper>
      {playList &&
        playList.map((item: any, index: number) => {
          return (
            <div
              key={item.id}
              className={
                'play-item ' + (currentSongIndex === index ? 'active' : '')
              }
              onClick={() => handleItem(index, item)}
            >
              <div className="left">{item.name}</div>
              <div className="right">
                <span className="singer">{item.ar[0].name}</span>
                <span className="duration">{formatMinuteSecond(item.dt)}</span>
                <span className="sprite_playlist link"></span>
              </div>
            </div>
          )
        })}
    </PlayerListWrapper>
  )
})

export default ZLPlayerList
