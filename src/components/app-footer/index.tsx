import { Fragment, memo } from 'react'

import { footerImages, footerLinks } from '@/common/local-data'

import { AppFooterWrapper } from './style'

const ZLAppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="footer-content wrap-v2">
        <ul className="top">
          {footerImages.map(item => {
            return (
              <li className="item" key={item.link}>
                <a
                  className="link"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                ></a>
                <span className="title">{item.title}</span>
              </li>
            )
          })}
        </ul>
        <div className="bottom">
          <p className="link">
            {footerLinks.map(item => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                  <span className="line">|</span>
                </Fragment>
              )
            })}
          </p>
          <p className="t1">
            <a href="https://jubao.163.com/" target="_blank" className="sep">
              廉正举报
            </a>
            <span className="sep">
              不良信息举报邮箱: 51jubao@service.netease.com
            </span>
            <span>客服热线：95163298</span>
          </p>
          <p className="t1">
            <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span>增值电信业务经营许可证：浙B2-20150198</span>
            <a
              href="https://beian.miit.gov.cn/"
              rel="noopener noreferrer"
              target="_blank"
            >
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
          </p>
          <p className="t1">
            <span className="sep">网易公司版权所有©1997-2024</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a
              href="https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/32300744195/95ef/ee4a/a6ec/c561df43b2bdbf560e3517cd6f529150.png"
              target="_blank"
              className="sep"
            >
              浙网文[2021] 1186-054号
            </a>
            <a href="https://beian.mps.gov.cn/#/query/webSearch?code=33010902002564">
              <span className="police-logo"></span>
              <span className="police-text">浙公网安备 33010802013307号</span>
            </a>
          </p>
        </div>
      </div>
    </AppFooterWrapper>
  )
})

export default ZLAppFooter
