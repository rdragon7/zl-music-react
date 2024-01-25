import { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { discoverMenu } from '@/common/local-data'

import { DiscoverWrapper } from './style'

const ZLDiscover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className="discover-top">
        <div className="menu wrap-v2">
          {discoverMenu.map(item => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </div>
      </div>
      <Outlet />
    </DiscoverWrapper>
  )
})

export default ZLDiscover
