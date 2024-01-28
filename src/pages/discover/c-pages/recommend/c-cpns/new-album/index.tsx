import { memo, useEffect, useRef } from 'react'

import { Carousel } from 'antd'
import ZLThemeHeaderRCM from '@/components/theme-header-rcm'
import ZLAlbumCover from '@/components/album-cover'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getNewAlbum } from '@/store/slice/recommendSlice'

import { NewAlbumWrapper } from './style'

const ZLNewAlbum = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { newAlbumList } = useAppSelector((state: RootState) => state.recommend)

  // other hooks
  const pageRef = useRef(null)
  useEffect(() => {
    dispatch(getNewAlbum())
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <ZLThemeHeaderRCM title="新碟上架" />
      <div className="album-content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={() => (pageRef.current as any).prev()}
        ></button>
        <div className="album-list">
          <Carousel ref={pageRef} dots={false}>
            {[0, 1].map((item: number) => {
              return (
                <div key={item} className="page">
                  {newAlbumList &&
                    newAlbumList
                      .slice(item * 5, (item + 1) * 5)
                      .map((iten: any) => {
                        return (
                          <ZLAlbumCover
                            key={iten.id}
                            info={iten}
                            size={100}
                            width={118}
                            bgp={-570}
                          />
                        )
                      })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={() => (pageRef.current as any).next()}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
})

export default ZLNewAlbum
