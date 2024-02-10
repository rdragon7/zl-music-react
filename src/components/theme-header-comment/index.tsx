import { memo } from 'react'

import { IProps } from './typings'

import { ThemeHeaderCommentWrapper } from './style'

const ZLThemeHeaderComment: React.FC<IProps> = memo(props => {
  // state & props
  const { info } = props

  return (
    <ThemeHeaderCommentWrapper>
      <h3 className="title">评论</h3>
      <div className="count">共{info && info.total}条评论</div>
    </ThemeHeaderCommentWrapper>
  )
})

export default ZLThemeHeaderComment
