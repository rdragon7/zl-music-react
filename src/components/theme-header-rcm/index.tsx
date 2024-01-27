import React, { memo } from 'react'

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
          {keyword.map((item: string) => {
            return (
              <div className="item" key={item}>
                <a href="/todo">{item}</a>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="theme-header-right">
        <a href="/todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </ThemeHeaderRCMWrapper>
  )
})

export default ZLThemeHeaderRCM
