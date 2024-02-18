import styled from 'styled-components'

export const AllAlbumWrapper = styled.div`
  margin-top: 50px;
  .all-list {
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
