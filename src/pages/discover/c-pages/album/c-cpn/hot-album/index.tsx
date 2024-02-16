import { memo, useEffect } from 'react'

import ZLThemeHeaderNormal from '@/components/theme-header-normal'
import ZLAlbumCover from '@/components/album-cover'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getHotAlbumList } from '@/store/slice/albumSlice'

import { HotAlbumWrapper } from './style'

const ZLHotAlbum = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { hotAlbum } = useAppSelector((state: RootState) => state.album)

  // other hooks
  useEffect(() => {
    dispatch(getHotAlbumList())
  }, [dispatch])

  return (
    <HotAlbumWrapper>
      <ZLThemeHeaderNormal title="热门新碟" />
      <div className="hot-list">
        {hotAlbum &&
          hotAlbum.slice(0, 10).map((item: any) => {
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
      </div>
    </HotAlbumWrapper>
  )
})

export default ZLHotAlbum
