import styled from 'styled-components'

import singerImg from '@/assets/images/singer_sprite.png'

export const ArtistCategoryWrapper = styled.div`
  width: 180px;
  padding: 20px 10px 40px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  .section {
    border-bottom: 1px solid #d3d3d3;
    padding: 10px 0;
    &:last-of-type {
      border-bottom: none;
    }
    .title {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      margin-bottom: 5px;
      font-family: 'Microsoft Yahei';
      font-weight: 700;
    }
  }
`

export const CategoryItem = styled.div`
  width: 180px;
  color: #333;
  height: 29px;
  line-height: 29px;
  margin-bottom: 2px;
  cursor: pointer;
  &.active {
    span {
      color: red;
      background-position: 0 0;
    }
    :hover {
      span {
        text-decoration: none;
      }
    }
  }
  span {
    display: inline-block;
    width: 160px;
    padding-left: 27px;
    background: url(${singerImg}) no-repeat 0 -30px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
