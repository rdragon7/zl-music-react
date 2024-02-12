import { Fragment, memo, useEffect, useState } from 'react'

import ZLThemeHeaderComment from '@/components/theme-header-comment'
import ZLSongComment from '@/components/song-comment'
import ZLSongCommentList from '@/components/song-comment-list'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import {
  changeCurrentPage,
  getSongCommentList
  // getSongCommentList
} from '@/store/slice/playerSlice'

import { PlayerCommentWrapper } from './style'

const ZLPlayerComment = memo(() => {
  // stat e& props
  const [currentId, setCurrentId] = useState(0)

  // redux hooks
  const { songCommentList, currentSong, currentPage } = useAppSelector(
    (state: RootState) => state.player
  )
  const dispatch = useAppDispatch()

  // other hooks
  useEffect(() => {
    const id = currentSong && currentSong.id
    setCurrentId(id)
  }, [currentSong])
  useEffect(() => {
    dispatch(changeCurrentPage(1))
  }, [dispatch])

  // action
  const handlePagination = (limit: number, offset: number) => {
    console.log(limit, offset)

    dispatch(getSongCommentList(currentId, limit, offset))
  }

  // 改变当前页
  const handleCurrentPage = (page: number) => {
    dispatch(changeCurrentPage(page))
  }

  return (
    <PlayerCommentWrapper>
      <ZLThemeHeaderComment info={songCommentList} />
      <ZLSongComment />
      {currentPage === 1 ? (
        <Fragment>
          <div className="wonderful-comment">
            <div className="comment-title">
              <h3 className="title">精彩评论</h3>
            </div>
            <ZLSongCommentList
              info={songCommentList.hotComments}
              isShowPagination={false}
              handleCurrentPage={page => handleCurrentPage(page)}
              handlePagination={(limit, offset) =>
                handlePagination(limit, offset)
              }
            />
          </div>
        </Fragment>
      ) : (
        ''
      )}

      <div className="new-comment">
        {currentPage === 1 ? (
          <div className="comment-title">
            <h3 className="title">最新评论</h3>
          </div>
        ) : (
          <div className="divider"></div>
        )}
        <ZLSongCommentList
          isShowPagination={true}
          info={songCommentList.comments}
          total={songCommentList.total}
          currentPage={currentPage}
          handleCurrentPage={page => handleCurrentPage(page)}
          handlePagination={(limit, offset) => handlePagination(limit, offset)}
        />
      </div>
    </PlayerCommentWrapper>
  )
})

export default ZLPlayerComment
