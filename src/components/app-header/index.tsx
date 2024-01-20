import { memo } from 'react'

import { headerLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { HeaderWrapper } from './style'

const ZLAppHeader = memo(() => {
  // state & props

  // redux hooks

  // other hooks

  // 业务逻辑
  const selectItem = (item: any, index: number) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="header-content wrap-v1">
        <div className="left">
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="list">
            {headerLinks.map((item, index) => {
              return (
                <div className="list-item" key={item.title}>
                  {selectItem(item, index)}
                </div>
              )
            })}
          </div>
        </div>
        <div className="right">
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </div>
      </div>
      <div className="header-divider"></div>
    </HeaderWrapper>
  )
})

export default ZLAppHeader
