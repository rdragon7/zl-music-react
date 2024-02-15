import { memo } from 'react'

import ZLRadioCategory from './c-cpn/radio-category'
import ZLRadioRecommend from './c-cpn/radio-recommend'
import ZLRadioRanking from './c-cpn/radio-ranking'

import { RadioWrapper } from './style'

const ZLRadio = memo(() => {
  return (
    <RadioWrapper className="wrap-v2">
      <ZLRadioCategory />
      <ZLRadioRecommend />
      <ZLRadioRanking />
    </RadioWrapper>
  )
})

export default ZLRadio
