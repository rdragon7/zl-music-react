import { memo } from 'react'

import ZLTopBanner from './c-cpns/top-banner'
import ZLHotRecommend from './c-cpns/hot-recommend'
import ZLNewAlbum from './c-cpns/new-album'
import ZLRecommendRanking from './c-cpns/recommend-ranking'
import ZLUserLogin from './c-cpns/user-login'
import ZLSettleSinger from './c-cpns/settle-singer'
import ZLHotAnchor from './c-cpns/hot-anchor'

import { RecommendWrapper } from './style'

export default memo(function ZLRecommend() {
  return (
    <RecommendWrapper>
      <ZLTopBanner />
      <div className="recommend-content wrap-v2">
        <div className="left">
          <ZLHotRecommend />
          <ZLNewAlbum />
          <ZLRecommendRanking />
        </div>
        <div className="right">
          <ZLUserLogin />
          <ZLSettleSinger />
          <ZLHotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
})
