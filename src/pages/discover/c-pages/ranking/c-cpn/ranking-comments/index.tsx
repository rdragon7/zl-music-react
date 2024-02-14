import { memo } from 'react'

import ZLThemeHeaderComment from '@/components/theme-header-comment'
import ZLSongComment from '@/components/song-comment'
import ZLSongCommentList from '@/components/song-comment-list'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { changeCurPage, getRankingComments } from '@/store/slice/rankingSlice'

import { RankingCommentsWrapper } from './style'

const ZLRankingComments = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { rankingComment, topList, currentIndex, curPage } = useAppSelector(
    (state: RootState) => state.ranking
  )

  // other hooks
  const handlePagination = (limit: number, offset: number) => {
    const id = topList[currentIndex] && (topList[currentIndex] as any).id
    dispatch(getRankingComments(id, limit, offset))
  }

  // action
  const handleCurrentPage = (page: number) => {
    dispatch(changeCurPage(page))
  }

  return (
    <RankingCommentsWrapper>
      <ZLThemeHeaderComment info={rankingComment} />
      <ZLSongComment />
      <div className="new-comment">
        {curPage === 1 ? (
          <div className="comment-title">
            <h3 className="title">最新评论</h3>
          </div>
        ) : (
          <div className="divider"></div>
        )}
        <ZLSongCommentList
          isShowPagination={true}
          info={rankingComment && rankingComment.comments}
          total={rankingComment && rankingComment.total}
          handlePagination={handlePagination}
          handleCurrentPage={page => handleCurrentPage(page)}
          currentPage={curPage}
        />
      </div>
    </RankingCommentsWrapper>
  )
})

export default ZLRankingComments
