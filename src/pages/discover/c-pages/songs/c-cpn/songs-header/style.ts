import styled from 'styled-components'

export const SongsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 6px;
  .header-left {
    position: relative;
    display: flex;
    align-items: center;
    .title {
      font-size: 24px;
      font-weight: normal;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
    }
    /* 选择框 */
    .select {
      width: 91px;
      height: 31px;
      line-height: 31px;
      background-color: #fafafa;
      border: 1px solid #d3d3d3;
      border-radius: 3px;
      color: #0c73c2;
      margin-left: 10px;
      cursor: pointer;
      &:hover {
        background-color: #fff;
      }
      i {
        position: relative;
        left: 5px;
        bottom: 2px;
        display: inline-block;
        width: 8px;
        height: 5px;
        background-position: -70px -543px;
      }
    }
  }
  .header-right {
    .song-hot {
      width: 46px;
      height: 29px;
      background-color: #c20c0c;
      color: #fff;
      border-radius: 3px;
      border: 1px solid #aaa;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`
