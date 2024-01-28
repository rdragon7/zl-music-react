import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`
  margin-top: 50px;
  .album-content {
    display: flex;
    align-items: center;
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    /* 左右箭头 */
    .arrow {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    .arrow-left {
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }
    .arrow-right {
      background-position: -295px -75px;
      &:hover {
        background-position: -315px -75px;
      }
    }
    /* 轮播区域 */
    .album-list {
      width: 640px;
      height: 150px;
      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
