import React, { memo } from 'react'

import { Slider } from 'antd'
import { IpProps } from './typings'

import { PlayerVolumeWrapper } from './style'

const ZLPlayerVolume: React.FC<IpProps> = memo(props => {
  // state & props
  const { volume, volumeClick } = props

  // 业务逻辑
  const sliderChange = (value: number) => {
    volumeClick(value / 100)
  }

  return (
    <PlayerVolumeWrapper className="sprite_playbar">
      <Slider value={volume * 100} vertical onChange={sliderChange} />
    </PlayerVolumeWrapper>
  )
})

export default ZLPlayerVolume
