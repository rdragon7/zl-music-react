import { memo } from 'react'
import { NavLink } from 'react-router-dom'

const ZLAppHeader = memo(() => {
  return (
    <div>
      <NavLink to="/">发现音乐</NavLink>
      <NavLink to="/friend">我的朋友</NavLink>
      <NavLink to="/mine">我的</NavLink>
    </div>
  )
})

export default ZLAppHeader
