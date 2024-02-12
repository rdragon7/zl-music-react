import styled from 'styled-components'

import mineImg from '@/assets/images/mine.png'

export const MineWrapper = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  padding: 100px 50px 300px 100px;
  .img {
    height: 300px;
    background: url(${mineImg}) no-repeat;
    background-position: 0 23px;
    &:hover {
      cursor: pointer;
    }
  }
  /* background-position: 0 104px; */
`
