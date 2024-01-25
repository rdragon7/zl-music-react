import { memo } from 'react'

import ZLTopBanner from './c-cpns/top-banner'

import { RecommendWrapper } from './style'

export default memo(function ZLRecommend() {
  return (
    <RecommendWrapper>
      <ZLTopBanner />
    </RecommendWrapper>
  )
})
