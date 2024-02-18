import { memo } from 'react'

import { RootState, useAppSelector } from '@/store/hook'
import { formatMinuteSecond } from '@/utils/format-data'

import { PlayerListWrapper } from './style'

const ZLPlayerList = memo(() => {
  // redux hooks
  const { playList, currentSongIndex } = useAppSelector(
    (state: RootState) => state.player
  )

  // action
  const handleItem = () => {
    console.log(11)
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
              onClick={() => handleItem()}
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
