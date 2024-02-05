import { ReactNode, Suspense, lazy } from 'react'

// 实现路由懒加载
import ZLLayout from '@/pages/layout'
const ZLDiscover = lazy(() => import('@/pages/discover'))
const ZLRecommend = lazy(() => import('@/pages/discover/c-pages/recommend'))
const ZLRanking = lazy(() => import('@/pages/discover/c-pages/ranking'))
const ZLSongs = lazy(() => import('@/pages/discover/c-pages/songs'))
const ZLRadio = lazy(() => import('@/pages/discover/c-pages/radio'))
const ZLArtist = lazy(() => import('@/pages/discover/c-pages/artist'))
const ZLAlbum = lazy(() => import('@/pages/discover/c-pages/album'))
const ZLPlayer = lazy(() => import('@/pages/player'))
const ZLMine = lazy(() => import('@/pages/mine'))
const ZLFriend = lazy(() => import('@/pages/friend'))

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>loading...</h1>}>{children}</Suspense>
}

export const routes: any = [
  {
    path: '/',
    element: <ZLLayout />,
    children: [
      {
        // index: true,
        element: lazyLoad(<ZLDiscover />),
        children: [
          {
            index: true,
            element: lazyLoad(<ZLRecommend />)
          },
          {
            path: '/discover/ranking',
            element: lazyLoad(<ZLRanking />)
          },
          {
            path: '/discover/songs',
            element: lazyLoad(<ZLSongs />)
          },
          {
            path: '/discover/radio',
            element: lazyLoad(<ZLRadio />)
          },
          {
            path: '/discover/artist',
            element: lazyLoad(<ZLArtist />)
          },
          {
            path: '/discover/album',
            element: lazyLoad(<ZLAlbum />)
          },
          {
            path: '/discover/player',
            element: lazyLoad(<ZLPlayer />)
          }
        ]
      },
      {
        path: 'mine',
        element: lazyLoad(<ZLMine />)
      },
      {
        path: 'friend',
        element: lazyLoad(<ZLFriend />)
      }
    ]
  }
]
