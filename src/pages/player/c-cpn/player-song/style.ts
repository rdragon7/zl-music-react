import styled from 'styled-components'

export const PlayerSongWrapper = styled.div`
  /* 头部区域 */
  .song-top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    .title {
      font-weight: 700;
    }
  }
  .songs {
    .song-item {
      display: flex;
      align-items: center;
      margin-top: 15px;
      width: 200px;
      .image {
        width: 50px;
        height: 50px;
      }
      .info {
        margin-left: 10px;
        .name {
          font-size: 14px;
          color: #000;
        }
        .anchor {
          color: #999;
          margin-top: 10px;
          .nickname {
            color: #666;
            margin-left: 5px;
          }
        }
      }
    }
  }
`
