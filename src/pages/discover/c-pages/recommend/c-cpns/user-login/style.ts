import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  box-sizing: border-box;
  height: 125px;
  padding: 20px;
  background-color: #e6e6e6;
  box-shadow: 0 1px 1px 1px #ccc;
  p {
    color: #666;
    line-height: 20px;
  }
  a {
    display: block;
    width: 100px;
    height: 30px;
    margin: 20px 0 0 50px;
    color: #fff;
    text-align: center;
    line-height: 30px;
    background-color: #c40a10;
    border-radius: 6px;
    &:hover {
      text-decoration: none;
      background-color: #f30c11;
    }
  }
`
