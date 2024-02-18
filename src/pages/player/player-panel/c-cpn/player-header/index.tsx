import { memo } from 'react'

import { RootState, useAppSelector } from '@/store/hook'

import { PlayerHeaderWrapper, HeaderLeft, HeaderRight } from './style'

const ZLPlayerHeader = memo(() => {
  // redux hooks
  const { playList, currentSong } = useAppSelector(
    (state: RootState) => state.player
  )

  return (
    <PlayerHeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>{currentSong.name}</HeaderRight>
    </PlayerHeaderWrapper>
  )
})

export default ZLPlayerHeader
