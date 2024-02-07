import { memo, useEffect, useRef, useState } from 'react'

import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import ZLPlayerMessage from '../player-message'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import {
  changeSequence,
  getSongDetailList,
  changeCurrentSongAnIndex,
  changeCurrentLyricIndex
} from '@/store/slice/playerSlice'
import {
  formatMinuteSecond,
  getPlayUrl,
  getSizeImage
} from '@/utils/format-data'

import { AppPlayerBarWrapper, Control, PlayInfo, Operator } from './style'

const ZLAppPlayerBar = memo(() => {
  // state & props
  // 歌曲总时长
  const [duration, setDuration] = useState(0)
  // 歌曲当前播放时间
  const [currentTime, setCurrentTime] = useState(0)
  // 进度条的值
  const [progress, setProgress] = useState(0)
  // 控制歌曲是否播放
  const [isPlay, setIsPlay] = useState(false)
  // 控制是否正在改变进度
  const [isChanging, setIsChanging] = useState(false)
  // 保存歌词
  const [lyricContent, setLyricContent] = useState('')

  // redux hooks
  const dispatch = useAppDispatch()
  const { currentSong, sequence, playList, lyricList, currentLyricIndex } =
    useAppSelector((state: RootState) => state.player)

  // other hooks
  const playRef = useRef<any>()
  useEffect(() => {
    dispatch(getSongDetailList(2122308127))
  }, [dispatch])

  // 页面一挂载就将当前歌曲的总时长存储起来
  useEffect(() => {
    playRef.current.src = getPlayUrl(currentSong && currentSong.id)
    playRef.current
      .play()
      .then(() => {
        setIsPlay(true)
      })
      .catch(() => {
        setIsPlay(false)
      })
    setDuration(currentSong && currentSong.dt)
  }, [currentSong])

  // action
  // 播放音乐
  const playMusic = () => {
    isPlay ? playRef.current.pause() : playRef.current.play()
    setIsPlay(!isPlay)
  }

  // 当歌曲时间改变触发
  const timeUpdate = (e: any) => {
    const currentTime = e.target.currentTime
    if (!isChanging) {
      // 将当前歌曲播放的当前时间存储起来
      setCurrentTime(currentTime * 1000)
      // 根据当前歌曲播放时间设置进度条的值
      setProgress(((currentTime * 1000) / duration) * 100)
    }

    // 获取当前时间对应的歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      const lyricItem = lyricList[i]
      if (currentTime * 1000 < lyricItem.time) {
        break
      }
    }
    const finalIndex = i - 1
    if (currentLyricIndex !== finalIndex) {
      dispatch(changeCurrentLyricIndex(finalIndex))
      const content = lyricList[finalIndex] && lyricList[finalIndex].content
      setLyricContent(content)
    }
  }

  // slider值改变时触发
  const sliderChange = (value: number) => {
    setIsChanging(true)
    setProgress(value)
    const time = (value / 100) * duration
    setCurrentTime(time)
  }

  // 与 onmouseup 触发时机一致，把当前值作为参数传入
  const sliderAfterChange = (value: number) => {
    const time = ((value / 100) * duration) / 1000
    playRef.current.currentTime = time
    setIsChanging(false)
  }

  // 处理歌曲播放方式
  const handleSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequence(currentSequence))
  }

  // 点击播放下一首，上一首歌曲
  const changeMusic = (tag: number) => {
    dispatch(changeCurrentSongAnIndex(tag))
  }

  // 当前歌曲播放完毕
  const timeEnded = () => {
    // 表示当前模式为单曲循环
    if (sequence === 2) {
      playRef.current.currentTime = 0
      playRef.current.play()
    } else {
      // 如果不是单曲循环，则按照点击下一首的逻辑进行播放
      dispatch(changeCurrentSongAnIndex(1))
    }
  }

  return (
    <AppPlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control $isPlay={isPlay}>
          <button
            className="sprite_playbar btn prev"
            onClick={() => changeMusic(-1)}
          ></button>
          <button
            className="sprite_playbar btn play"
            onClick={() => playMusic()}
          ></button>
          <button
            className="sprite_playbar btn next"
            onClick={() => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img
                src={getSizeImage(
                  currentSong && currentSong.al && currentSong.al.picUrl,
                  35
                )}
                alt=""
              />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">
                {currentSong && currentSong.name}
              </span>
              <span className="singer-name">
                {currentSong && currentSong.ar && currentSong.ar[0].name}
              </span>
            </div>
            <div className="process">
              <Slider
                value={progress}
                onChange={sliderChange}
                onChangeComplete={sliderAfterChange}
              ></Slider>
              <div className="time">
                <span className="now-time">
                  {formatMinuteSecond(currentTime)}
                </span>
                <span className="divider">/</span>
                <span className="total-time">
                  {formatMinuteSecond(duration)}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator $sequence={sequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button
              className="sprite_playbar btn loop"
              onClick={() => handleSequence()}
            ></button>
            <button className="sprite_playbar btn playlist">
              {playList.length}
            </button>
          </div>
        </Operator>
      </div>
      <audio
        ref={playRef}
        onTimeUpdate={timeUpdate}
        onEnded={timeEnded}
      ></audio>

      {lyricContent ? <ZLPlayerMessage info={lyricContent} /> : ''}
    </AppPlayerBarWrapper>
  )
})

export default ZLAppPlayerBar
