import React, { memo } from 'react'

import type { IProps } from './typings'

import { PlayerMessageWrapper } from './style'

const ZLPlayerMessage: React.FC<IProps> = memo(props => {
  // state & props
  const { info } = props

  return <PlayerMessageWrapper>{info}</PlayerMessageWrapper>
})

export default ZLPlayerMessage
