import styled from 'styled-components'

import closeImg from '@/assets/images/login-close.png'

export const LoginBoxWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 530px;
  border-radius: 4px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.8);
  border: none;
  background-color: #fff;
  /* 头部区域 */
  .box-header {
    position: relative;
    margin: 0;
    padding: 0 45px 0 18px;
    height: 38px;
    line-height: 38px;
    z-index: 10;
    border-bottom: 1px solid #191919;
    border-radius: 4px 4px 0 0;
    background: #2d2d2d;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    .close {
      position: absolute;
      z-index: 20;
      top: 16px;
      right: 20px;
      width: 10px;
      height: 10px;
      overflow: hidden;
      text-indent: -9999px;
      cursor: pointer;
      background: url(${closeImg}) no-repeat;
      background-position: 0 -95px;
    }
  }
  /* 内容区域 */
  .box-content {
    display: flex;
    justify-content: center;
    padding: 80px 0 40px 0;
    .center {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 320px;
      .st {
        border-radius: 20px;
      }
      .btn {
        background: #ff3a3a;
        width: 100%;
      }
      .send {
        background: #ff3a3a;
        color: #fff;
      }
    }
  }
  /* 尾部区域 */
  .box-footer {
    display: flex;
    justify-content: space-between;
    padding: 0 19px;
    height: 48px;
    border-top: 1px solid #c6c6c6;
    border-radius: 0 0 4px 4px;
    line-height: 48px;
    background-color: #f7f7f7;
    a {
      color: #0c72c3;
    }
  }
`
