import { memo } from 'react'

import ZLPlayerInfo from './c-cpn/player-info'
import ZLPlayerComment from './c-cpn/player-comment'
import ZLPlayerSong from './c-cpn/player-song'
import ZLPlayerSimi from './c-cpn/player-simi'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

const ZLPlayer = memo(() => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <ZLPlayerInfo />
          <ZLPlayerComment />
        </PlayerLeft>
        <PlayerRight>
          <ZLPlayerSong />
          <ZLPlayerSimi />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

export default ZLPlayer
