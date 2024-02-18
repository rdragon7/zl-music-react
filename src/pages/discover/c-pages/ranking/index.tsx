import { memo } from 'react'

import ZLTopList from './c-cpn/top-list'
import ZLRankingHeader from './c-cpn/ranking-header'
import ZLRankingList from './c-cpn/ranking-list'
import ZLRankingComments from './c-cpn/ranking-comments'

import { RankingWrapper, RankingLeft, RankingRight } from './style'
const ZLRanking = memo(() => {
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <ZLTopList />
      </RankingLeft>
      <RankingRight>
        <ZLRankingHeader />
        <ZLRankingList />
        <ZLRankingComments />
      </RankingRight>
    </RankingWrapper>
  )
})

export default ZLRanking
