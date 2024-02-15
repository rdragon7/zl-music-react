import React, { Fragment, memo, useState } from 'react'

import { IProps } from './typings'

import { ThemeHeaderNormalWrapper } from './style'

const ZLThemeHeaderNormal: React.FC<IProps> = memo(props => {
  // state & props
  const { title, keyword = [], rightSlot = [], itemClick = () => {} } = props
  const [currentIndex, setCurrentIndex] = useState(1)

  // action
  const handleClick = (item: any) => {
    const area = item.area
    itemClick(area)
  }

  const hotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <ThemeHeaderNormalWrapper>
      <div className="left">
        <div className="title">{title}</div>
        <div className="album-list">
          {keyword.map((item: any) => {
            return (
              <div className="album-item" key={item.title}>
                <span className="keyword" onClick={() => handleClick(item)}>
                  {item.title}
                </span>
                <span className="album-divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        {rightSlot.map((item, index) => {
          return (
            <Fragment key={item}>
              <span
                className={'item ' + (currentIndex === index ? 'active' : '')}
                onClick={() => hotClick(index)}
              >
                {item}
              </span>
              <span className="album-divider">|</span>
            </Fragment>
          )
        })}
      </div>
    </ThemeHeaderNormalWrapper>
  )
})

export default ZLThemeHeaderNormal
