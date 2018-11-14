import React from 'react'

const PostItem = ({match}) => {
  return (
    <div>
      Post detail
      Current Post id = {match.params.id}
    </div>
  )
} 

export default PostItem