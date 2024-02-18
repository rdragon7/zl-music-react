import styled from 'styled-components'

import panelImg from '@/assets/images/playpanel_bg.png'

export const PlayerPanelWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 46px;
  transform: translateX(-50%);
  width: 986px;
  height: 301px;
  color: #e2e2e2;
  .main {
    position: relative;
    display: flex;
    height: 260px;
    overflow: hidden;
    background: url(${panelImg}) -1014px 0 repeat-y;
  }
`
