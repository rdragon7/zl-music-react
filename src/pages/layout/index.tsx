import { Outlet } from 'react-router-dom'

import ZLAppHeader from '@/components/app-header'
import ZLAppFooter from '@/components/app-footer'
import ZLAppPlayerBar from '../player/app-player-bar'

const ZLLayout = () => {
  return (
    <div>
      <div>
        <ZLAppHeader />
        {/* 嵌套路由使用Outlet占位 */}
        <Outlet />
        <ZLAppFooter />
        <ZLAppPlayerBar />
      </div>
    </div>
  )
}

export default ZLLayout
