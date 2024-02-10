import { memo, useEffect } from 'react'

import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getSimiPlayList } from '@/store/slice/playerSlice'
import { getSizeImage } from '@/utils/format-data'

import { PlayerSongWrapper } from './style'

const ZLPlayerSong = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { currentSong, simiPlayList } = useAppSelector(
    (state: RootState) => state.player
  )

  // other hooks
  useEffect(() => {
    const id = currentSong && currentSong.id
    dispatch(getSimiPlayList(id))
  }, [dispatch, currentSong])

  // action

  return (
    <PlayerSongWrapper>
      <div className="song-top">
        <h3 className="title">包含这首歌的歌单</h3>
      </div>
      <div className="songs">
        {simiPlayList &&
          simiPlayList.map((item: any) => {
            return (
              <div className="song-item" key={item.id}>
                <a className="image" href="/todo">
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                </a>
                <div className="info text-nowrap">
                  <a href="/todo" className="name">
                    {item.name}
                  </a>
                  <div className="anchor">
                    by
                    <a href="/todo" className="nickname">
                      {item.creator.nickname}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </PlayerSongWrapper>
  )
})

export default ZLPlayerSong
