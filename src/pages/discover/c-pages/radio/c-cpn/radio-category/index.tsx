import { Fragment, memo, useEffect, useRef } from 'react'

import { Carousel } from 'antd'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { changeCurrentId, getRadioCategoryList } from '@/store/slice/radioSlice'

import { CategoryItemImage, RadioCategoryWrapper } from './style'

const ZLRadioCategory = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { radioCategory, currentId } = useAppSelector(
    (state: RootState) => state.radio
  )

  // other hooks
  const carouselRef = useRef<any>()
  useEffect(() => {
    dispatch(getRadioCategoryList())
  }, [dispatch])

  // action
  const handleCategory = (iten: any) => {
    dispatch(changeCurrentId(iten.id))
  }

  return (
    <RadioCategoryWrapper>
      <div
        className="arrow arrow-left"
        onClick={() => carouselRef.current.prev()}
      ></div>
      <div className="carousel-wrapper">
        <Carousel dots={{ className: 'dots' }} ref={carouselRef}>
          {[0, 1].map((item: number, index: number) => {
            return (
              <div key={index} className="category-page">
                {item === 0 ? (
                  radioCategory &&
                  radioCategory.map((iten: any) => {
                    return (
                      <div
                        key={iten.id}
                        className={
                          'item ' + (currentId === iten.id ? 'active' : '')
                        }
                        onClick={() => handleCategory(iten)}
                      >
                        <CategoryItemImage
                          className="image"
                          $imgUrl={iten.picWebUrl}
                        ></CategoryItemImage>
                        {iten.name}
                      </div>
                    )
                  })
                ) : (
                  <Fragment>
                    <a href="/todo" className="item-other">
                      <i className="faq"></i>
                      <span>常见问题</span>
                    </a>
                    <a href="/todo" className="item-other">
                      <i className="apply"></i>
                      <span>我要做主播</span>
                    </a>
                  </Fragment>
                )}
              </div>
            )
          })}
        </Carousel>
      </div>
      <div
        className="arrow arrow-right"
        onClick={() => carouselRef.current.next()}
      ></div>
    </RadioCategoryWrapper>
  )
})

export default ZLRadioCategory
