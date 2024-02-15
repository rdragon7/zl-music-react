import { memo, useEffect } from 'react'

import ZLThemeHeaderNormal from '@/components/theme-header-normal'
import ZLRadioRecommendCover from '@/components/radio-recommend-cover'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getRadioRecommendByType } from '@/store/slice/radioSlice'

import { RadioRecommendWrapper } from './style'

const ZLRadioRecommend = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { currentId, radioRecommend } = useAppSelector(
    (state: RootState) => state.radio
  )

  // other hooks
  useEffect(() => {
    if (currentId === 0) return
    dispatch(getRadioRecommendByType(currentId))
  }, [dispatch, currentId])

  return (
    <RadioRecommendWrapper>
      <ZLThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {radioRecommend &&
          radioRecommend.slice(0, 5).map((item: any) => {
            return <ZLRadioRecommendCover info={item} key={item.id} />
          })}
      </div>
    </RadioRecommendWrapper>
  )
})

export default ZLRadioRecommend
