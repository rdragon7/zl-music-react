import { memo } from 'react'

import ZLTopBanner from './c-cpns/top-banner'
import ZLHotRecommend from './c-cpns/hot-recommend'
import ZLNewAlbum from './c-cpns/new-album'

import { RecommendWrapper } from './style'

export default memo(function ZLRecommend() {
  return (
    <RecommendWrapper>
      <ZLTopBanner />
      <div className="recommend-content wrap-v2">
        <div className="left">
          <ZLHotRecommend />
          <ZLNewAlbum />
        </div>
        <div className="right">22</div>
      </div>
    </RecommendWrapper>
  )
})
