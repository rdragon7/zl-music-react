import { Fragment, memo, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { IProps } from './typings'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getSongDetailList } from '@/store/slice/playerSlice'
import {
  getSearchAlbum,
  getSearchArtist,
  getSearchSong
} from '@/store/slice/searchSlice'

import { SearchListWrapper } from './style'

const ZLSearchList: React.FC<IProps> = memo(props => {
  // state & props
  const { currentKeyword } = props

  // redux hooks
  const dispatch = useAppDispatch()
  const { searchSong, searchArtist, searchAlbum } = useAppSelector(
    (state: RootState) => state.search
  )

  // other hooks
  const navigate = useNavigate()
  useEffect(() => {
    if (currentKeyword) {
      dispatch(getSearchSong(currentKeyword))
      dispatch(getSearchArtist(currentKeyword))
      dispatch(getSearchAlbum(currentKeyword))
    }
  }, [dispatch, currentKeyword])

  // action
  const songItemClick = (id: number) => {
    dispatch(getSongDetailList(id))
    navigate('/discover/player')
  }

  return (
    <Fragment>
      {currentKeyword ? (
        <SearchListWrapper>
          <div className="header">
            <a href="/todo">搜"{currentKeyword}"相关用户&gt;</a>
          </div>
          <div className="list">
            {/* 单曲 */}
            <div className="item item1">
              <h3 className="title">
                <i className="sprite_icon2 icon"></i>
                单曲
              </h3>
              <ul className="hd">
                {searchSong &&
                  searchSong.map((item: any) => {
                    return (
                      <li
                        key={item.id}
                        onClick={() => songItemClick(item.id)}
                        className="text-nowrap"
                      >
                        <span>{item.name}</span>
                        &nbsp;-&nbsp;
                        <span>
                          {Array.isArray(item.artists)
                            ? item.artists.map((iten: any) => {
                                return (
                                  <Fragment key={iten.id}>{iten.name}</Fragment>
                                )
                              })
                            : ''}
                        </span>
                      </li>
                    )
                  })}
              </ul>
            </div>
            {/* 歌手 */}
            <div className="item item2">
              <h3 className="title">
                <i className="sprite_icon2 icon"></i>
                歌手
              </h3>
              <ul className="hd">
                {searchArtist &&
                  searchArtist.map((item: any) => {
                    return (
                      <li key={item.id} className="text-nowrap">
                        <span>{item.name}</span>
                      </li>
                    )
                  })}
              </ul>
            </div>
            {/* 专辑 */}
            <div className="item item1">
              <h3 className="title">
                <i className="sprite_icon2 icon"></i>
                专辑
              </h3>
              <ul className="hd">
                {searchAlbum &&
                  searchAlbum.map((item: any) => {
                    return (
                      <li key={item.id} className="text-nowrap">
                        <span>{item.name}</span>
                        &nbsp;-&nbsp;
                        <span>{item.artist.name}</span>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
        </SearchListWrapper>
      ) : (
        ''
      )}
    </Fragment>
  )
})

export default ZLSearchList
