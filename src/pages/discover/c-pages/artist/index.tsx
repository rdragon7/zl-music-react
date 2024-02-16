import { memo } from 'react'

import ZLArtistCategory from './c-cpn/artist-category'
import ZLArtistList from './c-cpn/artist-list'

import { ArtistWrapper } from './style'

const ZLArtist = memo(() => {
  return (
    <ArtistWrapper className="wrap-v2">
      <ZLArtistCategory />
      <ZLArtistList />
    </ArtistWrapper>
  )
})

export default ZLArtist
