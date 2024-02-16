import { memo } from 'react'

import { artistCategories } from '@/api/local-data'
import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import { changeCurrentArea, changeCurrentType } from '@/store/slice/artistSlice'

import { ArtistCategoryWrapper, CategoryItem } from './style'

const ZLArtistCategory = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()
  const { currentArea, currentType } = useAppSelector(
    (state: RootState) => state.artist
  )

  // other hooks

  // action
  const selectArtist = (area: number, type: any) => {
    dispatch(changeCurrentArea(area))
    dispatch(changeCurrentType(type))
  }
  return (
    <ArtistCategoryWrapper>
      {artistCategories.map((item: any) => {
        return (
          <div className="section" key={item.area}>
            <h2 className="title">{item.title}</h2>
            {item.artists.map((iten: any) => {
              const isSelect =
                currentArea === item.area && currentType.type === iten.type
              return (
                <CategoryItem
                  key={iten.name}
                  className={isSelect ? 'active' : ''}
                >
                  <span onClick={() => selectArtist(item.area, iten)}>
                    {iten.name}
                  </span>
                </CategoryItem>
              )
            })}
          </div>
        )
      })}
    </ArtistCategoryWrapper>
  )
})

export default ZLArtistCategory
