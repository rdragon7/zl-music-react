import { memo, useEffect } from 'react'

import ZLThemeHeaderNormal from '@/components/theme-header-normal'
import ZLRadioRankingCover from '@/components/radio-ranking-cover'
import ZLPagination from '@/components/pagination'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { changeCurrentPage, getHotRadioById } from '@/store/slice/radioSlice'
import { RADIO_PAGE_SIZE } from '@/common/constants'

import { RadioRankingWrapper } from './style'

const ZLRadioRanking = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { hotRadio, currentId, currentPage } = useAppSelector(
    (state: RootState) => state.radio
  )

  // other hooks
  useEffect(() => {
    if (currentId === 0) return
    dispatch(getHotRadioById(currentId))
  }, [dispatch, currentId])

  // action
  const onPageChange = (page: number, pageSize: number) => {
    dispatch(changeCurrentPage(page))
    dispatch(getHotRadioById(currentId, pageSize, (page - 1) * pageSize))
  }

  return (
    <RadioRankingWrapper>
      <ZLThemeHeaderNormal
        title="电台排行榜"
        rightSlot={['最热电台', '上升最快']}
      />
      <div className="ranking-list">
        {hotRadio &&
          hotRadio.djRadios &&
          hotRadio.djRadios.map((item: any) => {
            return <ZLRadioRankingCover key={item.id} info={item} />
          })}
      </div>
      <ZLPagination
        currentPage={currentPage}
        total={hotRadio.count}
        pageSize={RADIO_PAGE_SIZE}
        onPageChange={(page, pageSize) => onPageChange(page, pageSize)}
      />
    </RadioRankingWrapper>
  )
})

export default ZLRadioRanking
