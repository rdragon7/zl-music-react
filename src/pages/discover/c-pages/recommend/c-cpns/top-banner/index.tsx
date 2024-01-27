import { memo, useEffect, useRef, useState } from 'react'

import { Carousel } from 'antd'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getTopBanner } from '@/store/slice/recommendSlice'

import { TopBannerWrapper } from './style'

const ZLTopBanner = memo(() => {
  // state & props
  const [currentIndex, setCurrentIndex] = useState(0)

  // redux hooks
  const { topBannerList } = useAppSelector(
    (state: RootState) => state.recommend
  )
  const dispatch = useAppDispatch()

  // other hooks
  const bannerRef = useRef(null)
  useEffect(() => {
    dispatch(getTopBanner())
  }, [dispatch])

  // 业务逻辑
  const bannerChange = (_from: number, to: number) => {
    setCurrentIndex(to)
  }
  const bgImg =
    topBannerList[currentIndex] &&
    (topBannerList[currentIndex] as any).imageUrl + '?imageView&blur=40x20'

  return (
    <TopBannerWrapper $bgImg={bgImg}>
      <div className="top-banner-content wrap-v2">
        <div className="left">
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBannerList &&
              topBannerList.map((item: any) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img
                      src={item.imageUrl}
                      alt={item.imageTitle}
                      className="image"
                    />
                  </div>
                )
              })}
          </Carousel>
        </div>
        <div className="right">
          <a href="/todo">下载</a>
        </div>
        <div className="control">
          <button
            className="btn left"
            onClick={() => (bannerRef.current as any).prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => (bannerRef.current as any).next()}
          ></button>
        </div>
      </div>
    </TopBannerWrapper>
  )
})

export default ZLTopBanner
