import React, { memo } from 'react'

import { NavLink } from 'react-router-dom'
import { IProps } from './typings'

import { ThemeHeaderRCMWrapper } from './style'

const ZLThemeHeaderRCM: React.FC<IProps> = memo(props => {
  // state & props
  const { title, keyword } = props

  return (
    <ThemeHeaderRCMWrapper className="sprite_02">
      <div className="theme-header-left">
        <h3 className="title">{title}</h3>
        <div className="keyword-list">
          {keyword &&
            keyword.map((item: string) => {
              return (
                <div className="item" key={item}>
                  <NavLink to="/todo">{item}</NavLink>
                  <span className="divider">|</span>
                </div>
              )
            })}
        </div>
      </div>
      <div className="theme-header-right">
        <NavLink to="/todo">更多</NavLink>
        <i className="icon sprite_02"></i>
      </div>
    </ThemeHeaderRCMWrapper>
  )
})

export default ZLThemeHeaderRCM
