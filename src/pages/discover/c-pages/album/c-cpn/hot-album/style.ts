import styled from 'styled-components'

export const HotAlbumWrapper = styled.div`
  .hot-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      margin-right: 20px;
    }
    div:nth-child(5n) {
      margin-right: 0;
    }
  }
`
