import { Fragment, memo } from 'react'

import { RootState, useAppDispatch, useAppSelector } from '@/store/hook'
import {
  changeCurrentCategory,
  changeCurrentPage,
  changeIsShowCategory,
  getCategorySong
} from '@/store/slice/songSlice'

import { SongsCategoryWrapper } from './style'

const ZLSongsCategory = memo(() => {
  // state & props

  // redux hooks
  const { category } = useAppSelector((state: RootState) => state.songs)

  // other hooks
  const dispatch = useAppDispatch()

  // action
  // 处理全部分类按钮
  const allClick = () => {
    dispatch(changeCurrentPage(1))
    dispatch(changeCurrentCategory('全部'))
    dispatch(getCategorySong('all'))
    dispatch(changeIsShowCategory(false))
  }

  // 处理每一项分类item
  const selectCategory = (name: string) => {
    dispatch(changeCurrentPage(1))
    dispatch(changeCurrentCategory(name))
    dispatch(getCategorySong(name))
    // 将选择框关闭
    dispatch(changeIsShowCategory(false))
  }

  return (
    <SongsCategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={() => allClick()}>
          全部风格
        </span>
      </div>
      <div className="category">
        {[0, 1, 2, 3, 4].map((item: any, index: number) => {
          return (
            <dl className={'item' + index} key={item}>
              <dt>
                <i className="icon sprite_icon2"></i>
                {category.categories[item]}
              </dt>
              <dd>
                {category.sub
                  .filter((iten: any) => iten.category === item)
                  .map((iten2: any) => {
                    return (
                      <Fragment key={iten2.name}>
                        <span
                          className="cat"
                          onClick={() => selectCategory(iten2.name)}
                        >
                          {iten2.name}
                        </span>
                        <span className="line">|</span>
                      </Fragment>
                    )
                  })}
              </dd>
            </dl>
          )
        })}
      </div>
    </SongsCategoryWrapper>
  )
})

export default ZLSongsCategory
