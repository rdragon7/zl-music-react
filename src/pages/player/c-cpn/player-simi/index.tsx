import { Fragment, memo, useEffect } from 'react'

import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getSimiSongList } from '@/store/slice/playerSlice'

import { PlayerSimiWrapper } from './style'

const ZLPlayerSimi = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { currentSong, simiSongList } = useAppSelector(
    (state: RootState) => state.player
  )

  // other hooks
  useEffect(() => {
    const id = currentSong && currentSong.id
    dispatch(getSimiSongList(id))
  }, [dispatch, currentSong])

  // action

  return (
    <PlayerSimiWrapper>
      <div className="simiSong-top">
        <h3 className="title">相似歌曲</h3>
      </div>
      <div className="song">
        {simiSongList &&
          simiSongList.map((item: any) => {
            return (
              <div className="song-item" key={item.id}>
                <div className="info">
                  <div className="title">
                    <a href="/todo">{item.name}</a>
                  </div>
                  <div className="artist">
                    {item.artists.length > 1 ? (
                      <Fragment>
                        <a href="/todo">{item.artists[0].name}</a>
                        <span style={{ color: '#999' }}>/</span>
                        <a href="/todo">{item.artists[1].name}</a>
                      </Fragment>
                    ) : (
                      <a href="/todo">{item.artists[0].name}</a>
                    )}
                  </div>
                </div>
                <div className="operate">
                  <button className="item sprite_icon3 play"></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })}
      </div>
    </PlayerSimiWrapper>
  )
})

export default ZLPlayerSimi
