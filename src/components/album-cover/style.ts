import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div<{
  width: number
  size: number
  $bgp: number
}>`
  width: ${props => props.width + 'px'};
  margin-top: 15px;
  .album-image {
    position: relative;
    width: ${props => props.width + 'px'};
    height: ${props => props.size + 'px'};
    box-shadow: 0 5px 10px #999;
    image {
      width: ${props => props.size + 'px'};
      height: ${props => props.size + 'px'};
    }
    /* 给每一个item添加碟片遮罩 */
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.$bgp + 'px'};
      text-indent: -9999px;
    }
  }
  .album-info {
    font-size: 12px;
    width: ${props => props.size + 'px'};
    padding-top: 8px;
    .name {
      color: #000;
    }
    .artist {
      color: #666;
    }
  }
`
