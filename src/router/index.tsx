import { ReactNode, Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

// 实现路由懒加载
import ZLLayout from '@/pages/layout'
const ZLDiscover = lazy(() => import('@/pages/discover'))
const ZLMine = lazy(() => import('@/pages/mine'))
const ZLFriend = lazy(() => import('@/pages/friend'))

const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>loading...</h1>}>{children}</Suspense>
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <ZLLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<ZLDiscover />)
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
