import React from 'react'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

const PostComment = ({ location, url, title }) => {
  let disqusConfig = {
    url: `${url + location.pathname}`,
    // identifier: post.id,
    title: title,
  }
  return (
    <div className="mb-2">
      <CommentCount config={disqusConfig} placeholder={'...'} />
      <Disqus config={disqusConfig} />
    </div>
  )
}

export default PostComment