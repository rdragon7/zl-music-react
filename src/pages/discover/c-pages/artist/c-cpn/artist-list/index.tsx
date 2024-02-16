import { memo } from 'react'

import ZLThemeHeaderNormal from '@/components/theme-header-normal'
import ZLAlphaList from './alpha-list'
import ZLArtistItem from './artist-item'
import { RootState, useAppSelector } from '@/store/hook'

import { ArtistListWrapper } from './style'

const ZLArtistList = memo(() => {
  // redux hooks
  const { currentType, artistList } = useAppSelector(
    (state: RootState) => state.artist
  )

  return (
    <ArtistListWrapper>
      <ZLThemeHeaderNormal title={currentType.name} />
      <ZLAlphaList />
      <div className="artist-list">
        {artistList &&
          artistList.map((item: any, index: number) => {
            return <ZLArtistItem key={item.id} info={item} index={index} />
          })}
      </div>
    </ArtistListWrapper>
  )
})

export default ZLArtistList
