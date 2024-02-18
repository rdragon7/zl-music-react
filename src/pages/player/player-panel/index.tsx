import { memo } from 'react'

import ZLPlayerHeader from './c-cpn/player-header'
import ZLPlayerList from './c-cpn/player-list'
import ZLPlayerLyric from './c-cpn/player-lyric'

import { PlayerPanelWrapper } from './style'

const ZLPlayerPanel = memo(() => {
  // state & props

  // redux hooks

  // other hooks

  // action

  return (
    <PlayerPanelWrapper>
      <ZLPlayerHeader />
      <div className="main">
        <ZLPlayerList />
        <ZLPlayerLyric />
      </div>
    </PlayerPanelWrapper>
  )
})

export default ZLPlayerPanel
