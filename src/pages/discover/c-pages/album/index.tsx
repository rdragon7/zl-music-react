import { memo } from 'react'

import ZLHotAlbum from './c-cpn/hot-album'
import ZLAllAlbum from './c-cpn/all-album'

import { AlbumWrapper } from './style'

const ZLAlbum = memo(() => {
  return (
    <AlbumWrapper className="wrap-v2">
      <ZLHotAlbum />
      <ZLAllAlbum />
    </AlbumWrapper>
  )
})

export default ZLAlbum
