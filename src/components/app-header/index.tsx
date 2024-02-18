import { memo, useState } from 'react'

import { NavLink } from 'react-router-dom'
import ZLSearchList from '../search-list'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { headerLinks } from '@/common/local-data'

import { HeaderWrapper } from './style'

const ZLAppHeader = memo(() => {
  // state & props
  const [showSearch, setShowSearch] = useState(true)
  const [currentKeyword, setCurrentKeyword] = useState('')

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

  // 输入框内容发生改变出发
  const handleInputChange = (e: any) => {
    setShowSearch(true)
    setCurrentKeyword(e.target.value)
  }

  // input框失去焦点出发
  const handleInputBlur = () => {
    setTimeout(() => {
      setShowSearch(false)
    }, 300)
  }
  // input框获取焦点出发
  const handleInputFocus = () => {
    setShowSearch(true)
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
            onBlur={() => handleInputBlur()}
            onFocus={() => handleInputFocus()}
            onChange={e => handleInputChange(e)}
          />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
          {showSearch ? <ZLSearchList currentKeyword={currentKeyword} /> : ''}
        </div>
      </div>
      <div className="header-divider"></div>
    </HeaderWrapper>
  )
})

export default ZLAppHeader
