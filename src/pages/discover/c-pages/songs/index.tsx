import { memo, useEffect } from 'react'

import ZLSongsHeader from './c-cpn/songs-header'
import ZLSongsList from './c-cpn/songs-list'
import { useAppDispatch } from '@/store/hook'
import { getCategoryList, getCategorySong } from '@/store/slice/songSlice'

import { SongsWrapper } from './style'

const ZLSongs = memo(() => {
  // state & props

  // redux hooks
  const dispatch = useAppDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getCategoryList())
    dispatch(getCategorySong())
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <ZLSongsHeader />
      <ZLSongsList />
    </SongsWrapper>
  )
})

export default ZLSongs
