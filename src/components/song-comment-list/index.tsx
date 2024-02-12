import { memo } from 'react'

import ZLPagination from '../pagination'
import ZLSongCommentListItem from '@/components/song-comment-list-item'
import { IProps } from './typings'
import { COMMENT_PAGE_SIZE } from '@/common/constants'

import { SongCommentListWrapper } from './style'

const ZLSongCommentList: React.FC<IProps> = memo(props => {
  // state & props
  const {
    info,
    total = 0,
    isShowPagination,
    currentPage = 1,
    handleCurrentPage,
    handlePagination
  } = props

  // action
  const onPageChange = (page: number, pageSize: number) => {
    handleCurrentPage(page)
    handlePagination(pageSize, (page - 1) * pageSize)
  }

  return (
    <SongCommentListWrapper>
      <div className="new-comment">
        <div className="new-list">
          {info && info.length !== 0 ? (
            info.map((item: any) => {
              return <ZLSongCommentListItem key={item.commentId} info={item} />
            })
          ) : (
            <h3 className="w-full text-center">暂无评论...</h3>
          )}
        </div>
        {/* 分页区域 */}
        {isShowPagination ? (
          <div className="pagination">
            <ZLPagination
              total={total}
              pageSize={COMMENT_PAGE_SIZE}
              currentPage={currentPage}
              onPageChange={(page, pageSize) => onPageChange(page, pageSize)}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    </SongCommentListWrapper>
  )
})

export default ZLSongCommentList
