import { memo, useEffect, useState } from 'react'

import { singerAlphas } from '@/utils/handle-data'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { getArtistLists } from '@/store/slice/artistSlice'

import { AlphaListWrapper } from './style'

const ZLAlphaList = memo(() => {
  // state & props
  const [currentAlpha, setCurrentAlpha] = useState('-1')

  // redux hooks
  const dispatch = useAppDispatch()
  const { currentArea, currentType } = useAppSelector(
    (state: RootState) => state.artist
  )

  // other hooks
  useEffect(() => {
    dispatch(getArtistLists(currentArea, currentType.type, currentAlpha))
  }, [dispatch, currentArea, currentType, currentAlpha])

  // action
  const handleCurrentAlpha = (item: any) => {
    setCurrentAlpha(item)
  }

  return (
    <AlphaListWrapper>
      {singerAlphas.map((item: any) => {
        const isActive = currentAlpha === item
        return (
          <div key={item} className={'item ' + (isActive ? 'active' : '')}>
            <span onClick={() => handleCurrentAlpha(item)}>
              {item === '-1' ? '热门' : item === '0' ? '其他' : item}
            </span>
          </div>
        )
      })}
    </AlphaListWrapper>
  )
})

export default ZLAlphaList
