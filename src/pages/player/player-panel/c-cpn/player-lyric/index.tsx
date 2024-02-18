import { memo, useEffect, useRef } from 'react'

import { RootState, useAppSelector } from '@/store/hook'
import { scrollTo } from '@/utils/ui-helper'

import { PlayerLyricWrapper } from './style'

const ZLPlayerLyric = memo(() => {
  // redux hooks
  const { lyricList, currentLyricIndex } = useAppSelector(
    (state: RootState) => state.player
  )

  // other hooks
  const panelRef = useRef<any>()
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex])

  return (
    <PlayerLyricWrapper ref={panelRef}>
      <div className="lrc-content">
        {lyricList.map((item, index) => {
          return (
            <div
              key={index}
              className={
                'lrc-item ' + (currentLyricIndex === index ? 'active' : '')
              }
            >
              {item.content}
            </div>
          )
        })}
      </div>
    </PlayerLyricWrapper>
  )
})

export default ZLPlayerLyric
