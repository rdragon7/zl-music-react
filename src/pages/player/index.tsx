import { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

const ZLPlayer = memo(() => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>ZLPlayerInfo ZLPlayerComment</PlayerLeft>
        <PlayerRight>ZLPlayerSong ZLPlayerSimi</PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

export default ZLPlayer
