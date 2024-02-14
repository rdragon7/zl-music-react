import { memo, useEffect, useState } from 'react'

import ZLSongOperationBar from '@/components/song-operation-bar'
import { getSizeImage } from '@/utils/format-data'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getSongCommentList } from '@/store/slice/playerSlice'

import { InfoLeft, InfoRight, PlayerInfoWrapper } from './style'

const ZLPlayerInfo = memo(() => {
  // state & props
  // 控制歌词收起展开
  const [isSpread, setIsSpread] = useState(false)

  // redux hooks
  const dispatch = useAppDispatch()
  const { currentSong, songCommentList, lyricList } = useAppSelector(
    (state: RootState) => state.player
  )

  // other hooks
  useEffect(() => {
    const id = currentSong && currentSong.id
    dispatch(getSongCommentList(id))
  }, [dispatch, currentSong])

  // action
  const totalLyricCount = isSpread ? lyricList.length : 13

  return (
    <PlayerInfoWrapper>
      <InfoLeft>
        <div className="image">
          <img
            src={getSizeImage(currentSong.al && currentSong.al.picUrl, 130)}
            alt=""
          />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="/todo">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight $isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong && currentSong.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/todo" className="name">
            {currentSong.ar && currentSong.ar[0].name}
          </a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/todo" className="name">
            {currentSong.al && currentSong.al.name}
          </a>
        </div>
        {/* 操作按钮区域 */}
        <ZLSongOperationBar
          favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle={songCommentList && songCommentList.total}
        />
        {/* 歌词区域 */}
        <div className="lyric">
          <div className="lyric-info">
            {lyricList &&
              lyricList.slice(0, totalLyricCount).map((item: any) => {
                return (
                  <p key={item.time} className="text">
                    {item.content}
                  </p>
                )
              })}
          </div>
          <button
            className="lyric-control"
            onClick={() => setIsSpread(!isSpread)}
          >
            {isSpread ? '收起' : '展开'}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </InfoRight>
    </PlayerInfoWrapper>
  )
})

export default ZLPlayerInfo
