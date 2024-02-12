import { memo } from 'react'

import { FriendWrapper } from './style'

const ZLFriend = memo(() => {
  return (
    <FriendWrapper className="wrap-v1">
      <div className="img"></div>
    </FriendWrapper>
  )
})

export default ZLFriend
