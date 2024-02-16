import { memo, useEffect } from 'react'

import ZLThemeHeaderNormal from '@/components/theme-header-normal'
import ZLAlbumCover from '@/components/album-cover'
import ZLPagination from '@/components/pagination'
import { albumKeyword } from '@/common/local-data'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { changeCurrentPage, getAllAlbumList } from '@/store/slice/albumSlice'
import { ALBUM_PAGE_SIZE } from '@/common/constants'

import { AllAlbumWrapper } from './style'

const ZLAllAlbum = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { currentArea, allAlbum, currentPage } = useAppSelector(
    (state: RootState) => state.album
  )

  // other hooks
  useEffect(() => {
    dispatch(getAllAlbumList(currentArea && currentArea, ALBUM_PAGE_SIZE, 0))
  }, [dispatch, currentArea])

  // action
  // 处理关键字
  const itemClick = (area: any) => {
    console.log(area)
  }
  // 处理分页
  const onPageChange = (page: number, pageSize: number) => {
    dispatch(changeCurrentPage(1))
    dispatch(
      getAllAlbumList(
        currentArea && currentArea,
        pageSize,
        (page - 1) * pageSize
      )
    )
  }

  return (
    <AllAlbumWrapper>
      <ZLThemeHeaderNormal
        title="全部新碟"
        keyword={albumKeyword}
        itemClick={item => itemClick(item)}
      />
      <div className="all-list">
        {allAlbum.albums &&
          allAlbum.albums.map((item: any) => {
            return (
              <ZLAlbumCover
                key={item.id}
                info={item}
                width={153}
                size={130}
                bgp={-845}
              />
            )
          })}
        <ZLPagination
          currentPage={currentPage}
          total={allAlbum.total}
          pageSize={ALBUM_PAGE_SIZE}
          onPageChange={(page, pageSize) => onPageChange(page, pageSize)}
        />
      </div>
    </AllAlbumWrapper>
  )
})

export default ZLAllAlbum
