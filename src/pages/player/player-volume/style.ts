import styled from 'styled-components'

import trackImg from '@/assets/images/playbar_sprite.png'
import handleImg from '@/assets/images/sprite_icon.png'

export const PlayerVolumeWrapper = styled.div`
  position: absolute;
  top: -125px;
  right: 0;
  width: 32px;
  height: 113px;
  background-position: 0 -503px;
  z-index: 9999;
  /* 重置antd中进度条样式 */
  .ant-slider-vertical {
    width: 12px;
    height: 82%;
    margin: 10px 10px;
    padding: 0 4px;
    /* 剩余区域 */
    .ant-slider-rail {
      background: #000;
    }
    /* 滑动的区域 */
    .ant-slider-track {
      /* height: 100%; */
      background: url(${trackImg}) -40px bottom;
    }
    /* 滑块 */
    .ant-slider-handle {
      width: 14px;
      height: 14px;
      border: none;
      background: url(${handleImg}) -43px -251px;
      &::before,
      &::after {
        display: none;
      }
    }
  }
`
