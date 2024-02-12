import styled from 'styled-components'

import friendImg from '@/assets/images/friend.jpg'

export const FriendWrapper = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  padding: 100px 50px 200px 100px;
  .img {
    height: 350px;
    background: url(${friendImg}) no-repeat;
    background-position: 0 -50px;
    &:hover {
      cursor: pointer;
    }
  }
`
