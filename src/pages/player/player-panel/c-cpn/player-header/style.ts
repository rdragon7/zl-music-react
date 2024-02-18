import styled from 'styled-components'

import panelHeaderImg from '@/assets/images/playpanel_bg.png'

export const PlayerHeaderWrapper = styled.div`
  display: flex;
  height: 41px;
  line-height: 41px;
  background: url(${panelHeaderImg}) 0 0;
`

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 553px;
  h3 {
    color: #e2e2e2;
    font-weight: 700;
  }
  /* 按钮区域 */
  .operator {
    color: #ccc;
    button {
      background-color: transparent;
      color: #ccc;
      margin-left: 5px;
    }
    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      top: 4px;
      right: 2px;
    }
    .favor {
      background-position: -24px 0;
    }
    .remove {
      width: 13px;
      background-position: -51px 0;
    }
  }
`

export const HeaderRight = styled.div`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;
`
