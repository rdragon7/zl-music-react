import styled from 'styled-components'

export const SongCoverWrapper = styled.div<{ $right: any }>`
  width: 140px;
  margin: 20px ${props => props.$right || 0} 20px 0;
  /* 歌曲图片 */
  .cover-top {
    position: relative;
    .top-image {
      display: block;
    }
    /* 给图片添加整体透明遮罩 */
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
    }
    /* 给图片添加底部黑色遮罩 */
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      background-position: 0 -537px;
      height: 27px;
      color: #ccc;
      padding: 0 10px;
      /* 制作耳机图标 */
      .erji {
        display: inline-block;
        width: 14px;
        height: 11px;
        background-position: 0 -24px;
        margin-right: 5px;
      }
      /* 制作播放图标 */
      .play {
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;
        &:hover {
          cursor: pointer;
          background-position: 0 -60px;
        }
      }
    }
  }
  /* 歌曲描述 */
  .cover-bottom {
    margin-top: 5px;
    a {
      font-size: 14px;
      color: #000;
    }
  }
`
