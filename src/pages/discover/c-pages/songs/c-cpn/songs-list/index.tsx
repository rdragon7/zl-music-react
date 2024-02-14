import { memo } from 'react'

import { SONG_PAGE_SIZE } from '@/common/constants'
import ZLSongCover from '@/components/song-cover'
import ZLPagination from '@/components/pagination'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { changeCurrentPage, getCategorySong } from '@/store/slice/songSlice'

import { SongsListWrapper } from './style'

const ZLSongsList = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { categorySong, currentCategory, currentPage } = useAppSelector(
    (state: RootState) => state.songs
  )

  // other hooks

  // action
  const onPageChange = (page: number, pageSize: number) => {
    dispatch(changeCurrentPage(page))
    dispatch(getCategorySong(currentCategory, pageSize, (page - 1) * pageSize))
  }

  return (
    <SongsListWrapper>
      <div className="song-list">
        {categorySong &&
          categorySong.playlists &&
          categorySong.playlists.map((item: any) => {
            return <ZLSongCover info={item} key={item.id} right="30px" />
          })}
      </div>
      {
        <ZLPagination
          total={categorySong.total}
          pageSize={SONG_PAGE_SIZE}
          currentPage={currentPage}
          onPageChange={(page, pageSize) => onPageChange(page, pageSize)}
        />
      }
    </SongsListWrapper>
  )
})

export default ZLSongsList
