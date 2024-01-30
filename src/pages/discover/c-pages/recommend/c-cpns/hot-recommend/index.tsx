import { Fragment, memo, useEffect } from 'react'

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'
import ZLThemeHeaderRCM from '@/components/theme-header-rcm'
import ZLSongCover from '@/components/song-cover'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getHotRecommend } from '@/store/slice/recommendSlice'

import { HotRecommendWrapper } from './style'

const ZLHotRecommend = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { hotRecommendList } = useAppSelector(
    (state: RootState) => state.recommend
  )

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommend(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ZLThemeHeaderRCM
        title="热门推荐"
        keyword={['华语', '流行', '摇滚', '民谣', '电子']}
      />
      <div className="hot-recommend-lis">
        {hotRecommendList &&
          hotRecommendList.map((item: any) => {
            return (
              <Fragment key={item.id}>
                <ZLSongCover info={item} />
              </Fragment>
            )
          })}
      </div>
    </HotRecommendWrapper>
  )
})

export default ZLHotRecommend
