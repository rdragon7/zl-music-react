import styled from 'styled-components'

import footerImg from '@/assets/images/sprite_footer_03.png'
import police from '@/assets/images/police.png'

export const AppFooterWrapper = styled.div`
  border-top: 1px solid #d3d3d3;
  .footer-content {
    .top {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 33px;
      .item {
        width: 45px;
        .link {
          display: block;
          width: 45px;
          height: 45px;
          background-image: url(${footerImg});
          background-size: 220px 220px;
        }
        .title {
          display: inline-block;
          width: 100px;
          margin-top: 10px;
          margin-left: -27.5px;
          font-weight: 400;
          font-size: 12px;
          text-align: center;
          color: rgba(0, 0, 0, 0.5);
        }
      }
      :nth-child(2) {
        margin-left: 80px;
      }
      :nth-child(3) {
        margin-left: 80px;
      }
      :nth-child(4) {
        margin-left: 80px;
      }
      :nth-child(5) {
        margin-left: 80px;
      }
      :nth-child(6) {
        margin-left: 80px;
      }
      :nth-child(7) {
        margin-left: 80px;
      }
      :nth-child(8) {
        margin-left: 80px;
      }
      :nth-child(1) .link {
        background-position: -170px -5px;
      }
      :nth-child(2) .link {
        background-position: -5px -170px;
      }
      :nth-child(3) .link {
        background-position: -5px -60px;
      }
      :nth-child(4) .link {
        background-position: -170px -5px;
      }
      :nth-child(5) .link {
        background-position: -60px -60px;
      }
      :nth-child(6) .link {
        background-position: -115px -115px;
      }
      :nth-child(7) .link {
        background-position: -5px -60px;
      }
      :nth-child(8) .link {
        background-position: -170px -115px;
      }
    }
    .bottom {
      padding-top: 60px;
      line-height: 24px;
      margin: 0 auto;
      text-align: center;
      color: #666;
      .link {
        a {
          color: #666;
        }
        .line {
          margin: 0 10px;
          color: #666;
          &:last-of-type {
            color: #f2f2f2;
          }
        }
      }
      .t1 {
        a {
          color: #666;
        }
        .sep {
          margin-right: 14px;
        }
        .police-logo {
          display: inline-block;
          width: 14px;
          height: 14px;
          background: url(${police}) no-repeat;
          background-size: cover;
          margin-right: 2px;
          vertical-align: -2px;
        }
      }
    }
  }
`
