import { memo, useEffect } from 'react'

import ZLThemeHeaderRCM from '@/components/theme-header-rcm'
import ZLTopRanking from '@/components/top-ranking'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import {
  getNewRanking,
  getOriginRanking,
  getUpRanking
} from '@/store/slice/recommendSlice'

import { RecommendRankingWrapper } from './style'

const ZLRecommendRanking = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { upRanking, newRanking, originRanking } = useAppSelector(
    (state: RootState) => state.recommend
  )

  // other hooks
  useEffect(() => {
    dispatch(getUpRanking(19723756))
    dispatch(getNewRanking(3779629))
    dispatch(getOriginRanking(2884035))
  }, [dispatch])

  return (
    <RecommendRankingWrapper>
      <ZLThemeHeaderRCM title="榜单" />
      <div className="ranking-content">
        <ZLTopRanking info={upRanking} />
        <ZLTopRanking info={newRanking} />
        <ZLTopRanking info={originRanking} />
      </div>
    </RecommendRankingWrapper>
  )
})

export default ZLRecommendRanking
