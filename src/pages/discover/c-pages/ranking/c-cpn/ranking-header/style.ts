import styled from 'styled-components'

export const RankingHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  .header-image {
    position: relative;
    padding: 3px;
    border: 1px solid #ccc;
    img {
      width: 150px;
      height: 150px;
    }
    .image_cover {
      background-position: -230px -380px;
    }
  }
  .header-info {
    margin-left: 30px;
    .title {
      color: #333;
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    }
    .time {
      display: flex;
      align-items: center;
      color: #666;
      margin: 18px 0 30px;
      .clock {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
        position: relative;
        top: -1px;
        margin-right: 5px;
      }
    }
  }
`
