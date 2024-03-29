import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-data'
import { IProps } from './typings'
import { useAppDispatch } from '@/store/hook'
import { getSongDetailList } from '@/store/slice/playerSlice'

import { TopRankingWrapper } from './style'

const ZLTopRanking: React.FC<IProps> = memo(props => {
  // state & props
  const { info } = props

  // redux hooks

  // other hooks
  const dispatch = useAppDispatch()

  // actions
  const handleClick = (item: any) => {
    dispatch(getSongDetailList(item.id))
  }

  return (
    <TopRankingWrapper>
      <div className="ranking-header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <a href="/discover/ranking" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="ranking-list">
        {info.tracks &&
          info.tracks.slice(0, 10).map((item: any, index: number) => {
            return (
              <div className="item" key={item.id}>
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <a href="/todo" className="name text-nowrap">
                    {item.name}
                  </a>
                  <div className="operate">
                    <button
                      className="btn sprite_02 play"
                      onClick={() => handleClick(item)}
                    ></button>
                    <button className="btn sprite_icon2 add"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <div className="ranking-footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})

export default ZLTopRanking
