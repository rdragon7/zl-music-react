import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getTopBanner } from '@/store/slice/recommendSlice'
import { useEffect } from 'react'

const ZLRecommend = () => {
  // state & props
  const { topBannerList } = useAppSelector(
    (state: RootState) => state.recommend
  )

  // redux hooks
  const dispatch = useAppDispatch()
  // other hooks
  useEffect(() => {
    dispatch(getTopBanner())
  }, [])

  // handles

  return (
    <div>
      {topBannerList.map((item: any) => {
        return <img key={item.targetId} src={item.imageUrl} />
      })}
    </div>
  )
}

export default ZLRecommend
