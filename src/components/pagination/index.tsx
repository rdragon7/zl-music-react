import { memo } from 'react'

import { Pagination } from 'antd'
import { IProps } from './typings'

import { PaginationWrapper } from './style'

const ZLPagination: React.FC<IProps> = memo(props => {
  // state & props
  const { total, pageSize, currentPage, onPageChange } = props

  // action
  const itemRender = (_: any, type: string, originalElement: any) => {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>
    }
    if (type === 'next') {
      return <button className="control next">上一页 &gt;</button>
    }
    return originalElement
  }
  return (
    <PaginationWrapper>
      <Pagination
        className="pagination"
        size="small"
        itemRender={itemRender}
        defaultCurrent={1}
        total={total}
        showSizeChanger={false}
        pageSize={pageSize}
        current={currentPage}
        onChange={(page, pageSize) => onPageChange(page, pageSize)}
      />
    </PaginationWrapper>
  )
})

export default ZLPagination
